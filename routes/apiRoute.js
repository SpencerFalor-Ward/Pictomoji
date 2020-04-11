// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var emoji = require("../models/emoji.js");
var db = require('../models')

// Routes
// =============================================================
module.exports = function (app) {
	// Get all chirps
	app.get("/api/users", function (req, res) {
		console.log("hello")
		res.json([])
		
		// Sequelize queries are asynchronous, which helps with perceived speed.
		// If we want something to be guaranteed to happen after the query, we'll use
		// the .then function
		//The empty object is telling it that there are no restrictions and to return all the data
		// emoji.findAll({}).then(function(results) {
		//   // results are available to us inside the .then
		//   res.json(results);
		// });
		// db.findAll({}).then(function(results) {
		//   // results are available to us inside the .then
		//   res.json(results);
		// });
	})

	// Add a emoji-gram
	app.post("/api/users", async function (req, res) {
		// console.log('Emoji Data:')
		console.log(req.body)
		db.Users.create(req.body).then(function(dbUsers) {
			res.json(dbUsers);
		});
		
		//below is creating the data. similar to INSERT INTO like we were using previously
		// var results = await emoji.create({
		// 	name: req.body.name,
		// 	code: req.body.code,
		// 	category: req.body.category,
		// })
		// res.end()
		// // if you did have somehting to return you would do
		// res.json(results)
	})

	app.put("/api/users", function(req, res) {
		db.Users.update(req.body, 
			{
				where: {
					id: req.body.id
				}
			})
			.then(function(dbUsers) {
				res.json(dbUsers);
			});
	});
};
