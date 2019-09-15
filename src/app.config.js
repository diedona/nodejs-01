require('dotenv').config(); //reads .env file

const config = {
    app: {
        port: "3001"
    },
    db: {
        connectionString: process.env.CONNECTION_STRING
    }
};


module.exports = config;