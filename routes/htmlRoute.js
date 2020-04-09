// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require('path')

// Routes
// =============================================================
module.exports = function (app) {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads index.html
	app.get("/", function (req, res) {
		// res.sendFile(path.join(__dirname, '../views/index.html'))
		res.render("index")
	})

	// // scores route loads scores.html
	// app.get('/scores', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../views/scores.html'))
	// })

	// // game route loads game.html
	// app.get('/game', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../views/game.html'))
	// })

	// // index route loads index.html
	// app.get('/index', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../views/index.html'))
	// })
}
