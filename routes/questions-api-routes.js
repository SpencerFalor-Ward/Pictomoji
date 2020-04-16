var db = require("../models")
// var axios = require('axios')

// ajax query to populate emojiDB from emojidex

// var queryURL = `https://www.emojidex.com/api/v1/utf_emoji`
// axios({
// 	url: queryURL,
// 	method: 'GET',
// }).then(function (response) {
// 	var arr = response.data
// 	console.log(arr)
// 	db.Emoji.bulkCreate(arr).then(function () {
// 		return db.Emoji.findAll()
// 	})
// })

let selectedEmojis = []
let question = []
let selected = {}
module.exports = function (app) {
	// GET route for getting a question
	app.get("/api/questions/", function (req, res) {
		question = []
		db.Question.findAll({ raw: true })
			.then(function (questions) {
				console.log("test1:" + questions)
				// selected = questions[0]
				selected = questions[Math.floor(Math.random() * questions.length)]
				// console.log('test1.5:' + selected)
			})
			.then(function () {
				;(selectedEmojis = selected.questions.split(" ")),
					console.log("Here is:" + selectedEmojis)
				for (let i = 0; i < selectedEmojis.length; i++) {
					question.push(String.fromCodePoint("0x" + selectedEmojis[i]))
					console.log("test2:" + question)
				}
				res.render("game", { questionsTable: question })
				console.log("test3:" + { questionsTable: question })
			})
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
// module.exports = selected
