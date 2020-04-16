const selected = require("../../../routes/questions-api-routes")

// Start Button
// var startBtn = document.getElementById("start");

// Input
// var inputEl = document.getElementById("input");

// Outputs
// var answerEl = document.getElementById("answerOutput");
// var emojiEl = document.getElementById("emojiOutput");

// Submit
// var submitBtn = document.getElementById("submit");

// Timer
// var timer = document.getElementById("timeRem")
// var time = 25

function startGame() {
	let nav = document.getElementsByClassName("navbar")
	let body = document.getElementById("bodyContainer")
	let answerBox = document.getElementById("answers")
	let open = document.getElementById("opening")
	open.classList.add("display")
	nav.classList.remove("display")
	answerBox.classList.remove("display")
	body.classList.remove("display")
	// let interval = setInterval(function () {
	// 	if (time === 0) {
	// 		showScore()
	// 		return
	// 	}
	// 	time--
	// 	timer.textContent = time
	// }, 1000)
}
startGame()
let nav = document.getElementsByClassName("navbar")
let body = document.getElementById("bodyContainer")
let answerBox = document.getElementById("answers")
let open = document.getElementById("opening")
$("#start")
	.on("click", function startGame() {
		// let interval = setInterval(function () {
		// 	if (time === 0) {
		// 		showScore()
		// 		return
		// 	}
		// 	time--
		// 	timer.textContent = time
		// }, 1000)
	})
	.then(function () {
		open.classList.add("display")
		nav.classlist.remove("display")
		nav.classlist.add("navbar")
		answerBox.classlist.remove("display")
		body.classlist.remove("display")
	})
// Results
// var correct = 0;
// var score = 0;

// function startGame(){
//     startBtn.addEventListener("click", () => {

//         interval = setInterval(function(){
//             if(time === 0){
//                 showScore();
//                 return;
//             }

//             time--;
//             timer.textContent = time
//         }, 1000)

//     })
// }

// function badInput(){
//     inputEl.addEventListener("click", function(){

//     })
// }

// function showScore(){
//     clearInterval(interval);
//     scoreNum.textContent = `Score: ${score}`

// }
console.log("index.js")

// questionsInput button click working
$("#input").on("click", function (event) {
	console.log("TEST")
	event.preventDefault()
	var newQ = {
		questions: $("#questions").val().trim(),
		answers: $("#answers").val().trim(),
		difficulty: parseInt($("#difficulty").val().trim()),
	}
	console.log(newQ)
	$.post("/api/questionsInput", newQ)
		// On success, run the following code
		.then(function () {
			console.log("Success!")
		})
})
// let correctAnswers = 0

$("#submit").on("click", function (event) {
	console.log("test")
	event.preventDefault()
	let inputWordHolder = []
	let answerWordHolder = []

	// iterates through individual words of emoji codes
	function inputWordSplitter(res, req) {
		let inputWords = req.body.split(" ")
		for (let i = 0; i < inputWords.length; i++) {
			inputWordHolder.push({ label: i, value: [] })
			// wordComparer()
		}
	}

	function answerWordSplitter(res) {
		let selectedAnswer = selected.answers
		let selectedAnswerWords = selectedAnswer.split(" ")

		for (let k = 0; k < selectedAnswerWords.length; k++) {
			answerWordHolder.push({ label: k, value: [] })
			// console.log("currentWord:", currentWord);
			res.render("game", { answersTable: selectedAnswer })
		}
	}
	inputWordSplitter()
	answerWordSplitter()
	// function wordComparer() {
	// 	for (let m = 0; m < answerWordHolder.length; m++) {
	// 		var currentAnswerWord = answerWordHolder[m]
	// 		for (let n = 0; n < inputWordHolder.length; n++) {
	// 			let currentWord = inputWordHolder[n]
	// 			if (currentAnswerWord === currentWord) {
	// 				correctAnswers++
	// 			}
	// 		}
	// 	}
	// }
})
