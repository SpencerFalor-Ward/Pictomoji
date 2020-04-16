exports.signup = function (req, res) {
	res.render("signup")
}

exports.signin = function (req, res) {
	res.render("signin")
}

exports.game = function (req, res) {
	console.log(req.user)
	res.render("game", req.user)
}

exports.logout = function (req, res) {
	req.session.destroy(function (err) {
		if (err) {
			throw err
		}
		res.redirect("/")
	})
}
