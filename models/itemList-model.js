var db = require('./db');
var table_name = "item_list";
var table_id = "item_id";


module.exports = {

	
	getAllInfo: function(callback){
		var sql = `select * from item_list`;
		
		db.getResults(sql, function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});	
	},
	
	
	getById: function(id, callback){

		var sql = `select * from ${table_name} where ${table_id} = ${id}`;
		//console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback(false);
			}
		});
	},

	getByOutlet: function(id, callback){

		var sql = `SELECT employee.emp_ID, employee.outlet_ID, outlet.name as outlet FROM employee,outlet WHERE employee.outlet_ID = outlet.outlet_ID and ${table_ids}= ${id}`;
		console.log(sql);
		db.getResults(sql, function(result){
			if(result.length > 0 ){
				callback(result[0]);
				console.log(result[0]);
			}else{
				callback(false);
			}
		});
	},


	getAll: function(callback){
		var sql = `select * from ${table_name}`;
		
		db.getResults(sql, function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback(false);
			}
		});	
	},



}
