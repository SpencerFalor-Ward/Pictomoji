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

	// questions route loads questionsInput.handlebars
	app.get("/questionsInput", function (req, res) {
		res.render("questionsInput.handlebars")
	})

	// // game route loads game.html
	// app.get('/game', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../views/game.html'))
	// })

	// // index route loads index.html
	// app.get('/index', function (req, res) {
	// 	res.sendFile(path.join(__dirname, '../views/index.html'))
	// })
}
