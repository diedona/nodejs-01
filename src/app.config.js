require('dotenv').config(); //reads .env file
const convict = require('convict'); //multiple environment

const config = convict({
    env: {
        doc: "The application environment.",
        format: ["prd", "dev"],
        default: "development",
        env: "NODE_ENV"
    },
    app: {
        port: {
            doc: "app port.",
            format: '*',
            default: "3001",
        }
    },
    db: {
        connectionString: {
            doc: "db connection string.",
            format: '*',
            default: "mongodb://localhost:27017/nodeapi",
        }
    }
});

const env = config.get('env');
config.loadFile(`./src/config/${env}.json`); // starts at root
config.validate({ allowed: 'strict' }); // throws error if config does not conform to schema

module.exports = config.getProperties(); // so we can operate with a plain old JavaScript object and abstract away convict (optional)