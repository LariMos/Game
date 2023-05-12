
//defining the board

//Define main players - weasel and rabbit

// Define dance combos - 3 dance combos generated automatically with timer set to each color that light up
//In the future option to connect a song chosen from a playlist  
// Set start location for players 

//Button to toggle between intro page and game page
const clickToPlay = document.getElementById("click-to-play");
const backButton = document.getElementById("return-to-intro");

const introPage = document.getElementById("intro-page");
const instructionsPage = document.getElementById("instructions-page")
const gamePage = document.getElementById("game-page");
const speechAnimationBubble = document.getElementById("lottie-speech-bubble");

clickToPlay.addEventListener("click", function () {
    if (introPage.style.display === "none") {
        introPage.style.display = "block";
        instructionsPage.style.display = "none";
        gamePage.style.display = "none";
    } else {
        introPage.style.display = "none";
        instructionsPage.style.display = "block";
        gamePage.style.display = "none";
    }
});

backButton.addEventListener("click", function () {
    if (gamePage.style.display === "block") {
        gamePage.style.display = "none";
        introPage.style.display = "block";
        instructionsPage.style.display = "none";
    }
});


class SpeechBubble {
    constructor(bubbleId, message) {
        this.bubbleId = document.getElementById(bubbleId);
        this.message = message;
    }
    disappear(time) {
        this.bubbleId.style.display = "block";
        setTimeout(() => {
            if (instructionsPage.style.display === "block") {
                this.bubbleId.style.display = "none";
            }
            speechAnimationBubble.style.display = "none";
            if (gamePage.style.display === "none") {
                gamePage.style.display = "block";
            }
        }, time);
        setTimeout(() => {
            document.querySelector('#weasel-hello').style.display = "none";
        }, time)
    }

    addMessage() {
        this.bubbleId.innerHTML = this.message;
    }
}

let helloWeasel = new SpeechBubble("hello", "Hi, I'm mOs the weasel! Help me catch the fluffy tailed bunny! Just wack the colors when they pop up!");
helloWeasel.addMessage();
helloWeasel.disappear(8000);

const colorButtons = document.getElementsByClassName("color-buttons");
const weaselImages = document.getElementsByClassName("weasel-images");
const playerScore = document.getElementById("player-score");
let correctClicks = 0;
let totalFlashes = 0;
let count = 0;
let interval;

const readySetGoText = document.getElementById("ready-set-go");

function countdown() {
    if (gamePage.style.display === "block") {
        setTimeout(function () {
            readySetGoText.textContent = "Ready?!";

            setTimeout(function () {
                readySetGoText.textContent = "Set";

                setTimeout(function () {
                    readySetGoText.textContent = "Go!";

                    setTimeout(function () {
                        readySetGoText.textContent = "";
                    }, 1000);

                }, 1000);
            }, 1000);
        }, 1000);
    }
}

function flashButton(colorButton) {
    colorButton.classList.add("flashing");
    colorButton.style.opacity = "1";
    setTimeout(function () {
        colorButton.classList.remove("flashing");
        colorButton.style.opacity = "0.1";
    }, 1000);
}

function flashImage(weaselImage) {
    weaselImage.style.display = "block";
    setTimeout(function () {
        weaselImage.style.display = "none";
    }, 1000);
}

function flashButtons() {
    let totalFlashes = 0;
    let delayBetweenEachButtonFlash = 800;
    let interval = setInterval(() => {
        let delay = 0;
        for (let i = 0; i < colorButtons.length; i++) {
            setTimeout(() => {
                flashButton(colorButtons[i]);
                flashImage(weaselImages[i]);
            }, delay);
            delay += delayBetweenEachButtonFlash;
        }
        totalFlashes++;
        if (totalFlashes >= 15) {
            clearInterval(interval);
            let percentage = (correctClicks / (totalFlashes * colorButtons.length)) * 100;
            if (percentage >= 50) {
                alert("Yes!!! I'm close enough to catch the rabbit!");
                // triggerWinCelebration();
            } else if (percentage <= 50 && totalFlashes === 14){
                alert("Darn it's too far! I won't catch it...Better luck next time!");
                // triggerLoseCelebration();
            }
        }
    }, colorButtons.length * delayBetweenEachButtonFlash);
}

function handleClick(e) {
    const target = e.target;
    if (target.classList.contains("color-buttons") && target.classList.contains("flashing")) {
        correctClicks++;
        rabbitPop();
        playerScore.innerText = correctClicks;
    }
}

const rabbitPop1 = document.getElementById("rabbit-pop-1");
function rabbitPop() {
    if (correctClicks >= 3) {
        rabbitPop1.style.display = "block";
    }
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    correctClicks = 0;
    count = 0;
    countdown();
    playerScore.innerText = correctClicks;
    flashButtons();
    rabbitPop();
});
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", handleClick);
}

function triggerWinCelebration() {
    const winCelebration = document.getElementById("win-celebration");
    winCelebration.style.display = "block";
    setTimeout(() => {
      winCelebration.style.display = "none";
    }, 500);
  }

  function triggerLoseCelebration() {
    const loseCelebration = document.getElementById("lose-celebration");
    loseCelebration.style.display = "block";
    setTimeout(() => {
      loseCelebration.style.display = "none";
    }, 500);
  }



//I WANT TO REWRITE THE CODE USING CLASSES AFTER PROJECT DEADLINE

// class Player{
//     constructor(location, size){
//         this.location = location;
//         this.size = size;
//     }
// }

// class PlayerWeasel extends Player{
//     constructor(location, size){
//     super(location,size);    
//     }
// }

// class PlayerRabbit extends Player{
//     constructor(location, size){
//     super(location,size);    
//     }
// }

// class Game{
//     constructor(board){
//        this.weasel = new PlayerWeasel({x:100, y:100}, 50); 
//        this.rabbit = new PlayerRabbit({x:500, y:500}, 100);
//        this.board = board;
//     }
// }

// set possible locations MOVE OPTIONS

//initialize game
//game states 

// class Game(){

// }

// //reset game button
// const resetGame = function () {

// }


// const RhythmConstructor = {
//     nextStep: () => {
//         // call each step at a time interval
//     },
//     rhythm: () => {
//         redBall(1000);
//         greenBall(400);
//         blueBall(1200);
//         yellowBall(600);
//     },
//     rhythm2: () => {
//         redBall(1000);
//         greenBall(400);
//         blueBall(1200);
//         yellowBall(600);
//     }
// }

// RhythmConstructor.rhythm1();

