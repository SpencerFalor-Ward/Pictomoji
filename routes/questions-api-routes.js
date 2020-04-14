var db = require("../models")
var axios = require("axios")

// ajax query to populate emojiDB from emojidex

var queryURL = `https://www.emojidex.com/api/v1/utf_emoji`
axios({
	url: queryURL,
	method: "GET",
}).then(function (response) {
	var arr = response.data
	console.log(arr)
	db.Emoji.bulkCreate(arr).then(function () {
		return db.Emoji.findAll()
	})
})

module.exports = function (app) {
	// GET route for getting a question
	app.get("/api/questions/", function (req, res) {
		db.Question.findAll({ raw: true }).then(function (questions) {
			// res.json(data)
			console.log(questions)
			// console.log(Question[0].dataValues.questions)
			res.render("index", { questionsTable: questions })
			// res.json([])
		})
		// db.Question.findOne({
		// 	// parameters for selecting question
		// }).then(function () {
		// 	// render question to question location
		// })
	})
}
