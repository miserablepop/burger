// Dependencies
/////////////////////////////////////////////////////
var mysql = require("mysql");

// Setup mysql connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});


// Console log error or connection id
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection
module.exports = connection;