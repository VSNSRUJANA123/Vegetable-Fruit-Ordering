const mysql = require("mysql2");
const dotenv = require("dotenv").config();

const dbConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
dbConnection.connect((err) => {
  if (err) {
    console.log("database disconnected");
    process.exit(1);
  }
  console.log("databases connected");
});
module.exports = dbConnection;
