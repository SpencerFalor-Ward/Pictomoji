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
			// questions = String.fromCodePoint('0x' + questions)
			let temp = []
			questions.forEach(el => {
				let question = String.fromCodePoint("0x" + el.questions)
				temp.push(question)
			})

			res.render("index", { questionsTable: temp })
			// res.json([])
			// var fixedEmoji = emojiList[EMOJI].unicode.substr(0, 5)
			// var emojiIcon = String.fromCodePoint('0x' + fixedEmoji)
		})
		// db.Question.findOne({
		// 	// parameters for selecting question
		// }).then(function () {
		// 	// render question to question location
		// })
	})
	app.post("/api/questionsInput/", function (req, res) {
		console.log("Question Data:")
		console.log(req.body)
		db.Question.create({
			questions: req.body.questions,
			answers: req.body.answers,
			difficulty: req.body.difficulty,
		}).then(questionInput => {
			res.json(questionInput)
		})
	})
}
