var authController = require("../controllers/authcontroller.js")

module.exports = function (app, passport) {
	app.get("/signup", authController.signup)

	app.get("/game", isLoggedIn, authController.game)

	app.post(
		"/signup",
		passport.authenticate("local-signup", {
			successRedirect: "/game",
			failureRedirect: "/signup",
		}),
	)

	app.post(
		"/signin",
		passport.authenticate("local-signin", {
			successRedirect: "/game",
			failureRedirect: "/",
		}),
	)

	app.get("/logout", authController.logout)

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next()

		res.redirect("/")
	}
}
