// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    
    selectAll: function(cb){
        
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        });
    },

    updateOne: function(burger_id, cb){
        orm.updateOne(burger_id, function(res){
            cb(res);
        });
    }
};

module.exports = burger;