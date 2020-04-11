// Start Button
var startBtn = document.getElementById("start");

// Input
var inputEl = document.getElementById("input");

// Outputs
var answerEl = document.getElementById("answerOutput");
var emojiEl = document.getElementById("emojiOutput");

// Submit
var submitBtn = document.getElementById("submit");

// Timer
var timer = document.getElementById("timeRem")
var time = 25

// Results
var correct = 0;
var score = 0;

function startGame(){
    startBtn.addEventListener("click", () => {

        interval = setInterval(function(){
            if(time === 0){
                showScore();
                return;
            }
    
            time--;
            timer.textContent = time
        }, 1000)

    })
}

function badInput(){
    inputEl.addEventListener("click", function(){
        
    })
}

function showScore(){
    clearInterval(interval);
    scoreNum.textContent = `Score: ${score}`
=======
}