// Dependencies
/////////////////////////////////////////////////////
var mysql = require("mysql");
var connection;
// Setup mysql connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Otto22.rents",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'hacktheplanet',
		database: 'burgers_db'
	});
};


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