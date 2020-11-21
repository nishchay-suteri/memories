const dotenv = require("dotenv");
dotenv.config();

const DEFAULT_PORT = 3000;

const SERVER_PORT = process.env.PORT || DEFAULT_PORT;
const DB_URI = process.env.DB_URI;

module.exports = {
    SERVER_PORT,
    DB_URI,
};
