if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); //reads .env file
}

const config = {
    app: {
        port: "3001"
    },
    db: {
        connectionString: process.env.CONNECTION_STRING
    },
    privateKey: process.env.PRIVATE_KEY
};


module.exports = config;