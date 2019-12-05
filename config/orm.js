// Import connection
var connection = require("./connection.js");

var orm = {
    
    // selectAll()
	selectAll: function(cb) 
	{
		//mySQL Query
		connection.query('SELECT * FROM burgers', function(err, result)
		{
			if (err) throw err;
			cb(result);
		});
    },

    // insertOne()
	insertOne: function(burger_name, cb)
	{
		connection.query('INSERT INTO burgers SET ?', 
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				cb(result);
			});
				
	},

	// updateOne()
	updateOne: function(burgerID, cb)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				cb(result);
			});
	}
};


// Export the orm object for the model 
module.exports = orm;