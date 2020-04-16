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
		res.render("index.handlebars")
	})

	// questions route loads questionsInput.handlebars
	app.get("/questionsInput", function (req, res) {
		res.render("questionsInput.handlebars")
	})
	app.get("/game", function (req, res) {
		res.render("game.handlebars")
	})
	app.get("/signup", function (req, res) {
		res.render("signup.handlebars")
	})
	// app.get('/signup', function (req, res) {
	// 	res.render('signup.handlebars')
	// })
}
