

//Button to toggle between intro page and instruction page
const clickToPlay = document.getElementById("click-to-play");
const introPage = document.getElementById("intro-page");
const instructionsPage = document.getElementById("instructions-page")

//Introducing the game page and creating a back button to return to intro page 
const gamePage = document.getElementById("game-page");
const backButton = document.getElementById("return-to-intro");
//On introduction page speech bubble is animated through a lottie file 
const speechAnimationBubble = document.getElementById("lottie-speech-bubble");

//on the game page define variables using the document object to select elements from the HTML page through ID
const playerScore = document.getElementById("player-score");
//on the game page before the game launches set a ready-set-go warm-up
const readySetGoText = document.getElementById("ready-set-go");
// define variables to keep track of the number of correct clicks, total flashes, and a countdown timer.
let correctClicks = 0;
let totalFlashes = 0;
let count = 0;
let interval;

//Change display style between intro page and instruction page 
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

//Back button to flip display style of game page to none and bring back the intro page
backButton.addEventListener("click", function () {
    if (gamePage.style.display === "block") {
        gamePage.style.display = "none";
        introPage.style.display = "block";
        instructionsPage.style.display = "none";
    }
});

//On the instruction page the speech bubble appears with a timeout function that flips the display style between the instruction page and the game page
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

//speech bubble with ID hello is created and message introduced back into HTML
let helloWeasel = new SpeechBubble("hello", "Hi, I'm mOs the weasel! Help me catch the fluffy tailed bunny! Just wack the colors when they pop up!");
helloWeasel.addMessage();
helloWeasel.disappear(8000);

// Create a countdown effect before the game starts
// a series of setTimeout() functions to change the text, and then blank after a certain amount of time has passed. 
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

// Defines an array of color buttons selected from the HTML page through class name
const colorButtons = document.getElementsByClassName("color-buttons");

// Creates a flashing effect on the button.

function flashButton(colorButton) {
    colorButton.classList.add("flashing");//adds the "flashing" class to a given color button element
    colorButton.style.opacity = "1"; //sets its opacity to 1
    setTimeout(function () {
        colorButton.classList.remove("flashing"); //removes the "flashing" class
        colorButton.style.opacity = "0.1"; //then sets the opacity to 0.1
    }, 1000); //waits 1 second
}

// Defines an array of weasel images selected from the HTML page through class name
const weaselImages = document.getElementsByClassName("weasel-images");

// shows a given weasel image element, waits 1 second, and then hides it again.
function flashImage(weaselImage) {
    weaselImage.style.display = "block";
    setTimeout(function () {
        weaselImage.style.display = "none";
    }, 1000);
}

// sets up a loop that flashes each color button and weasel image in turn using the flashButton() and flashImage() functions
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
        totalFlashes++; //increments a totalFlashes counter each time a button is flashed.
        if (totalFlashes >= 15) { //When all the buttons have been flashed 15 times, it calculates the percentage of correct clicks
            clearInterval(interval);
            let percentage = (correctClicks / (totalFlashes * colorButtons.length)) * 100;
            if (percentage >= 50) { //if the percentage is greater than or equal to 50% it triggers a win alert
                alert("Yes!!! I'm close enough to catch the rabbit!"); //The alert messages will be replaced by a win celebration
                // triggerWinCelebration();
            } else{
                alert("Darn it's too far! I won't catch it...Better luck next time!"); //The alert messages will be replaced by a lose celebration
                // triggerLoseCelebration();
            }
        }
    }, colorButtons.length * delayBetweenEachButtonFlash);
}

//function is called whenever a color button is clicked 
function handleClick(e) {
    const target = e.target;
    if (target.classList.contains("color-buttons") && target.classList.contains("flashing")) { 
        correctClicks++; //If the button has the "flashing" class, it increments the correctClicks counter
        rabbitPop(); //calls a function rabbitPop()that brings the rabbit images up 
        playerScore.innerText = correctClicks; //updates the score displayed on the page
    }
}

const rabbitPop2 = document.getElementById("rabbit-pop-2");
const rabbitHole = document.getElementById("rabbit-hole");
//brings up the rabbit image after 3 correct clicks
const rabbitPop1 = document.getElementById("rabbit-pop-1");
function rabbitPop() {
    if (correctClicks === 3) {
        rabbitPop1.style.display = "block";
    }else if(correctClicks === 5){
        rabbitPop2.style.display = "block";
    }else if(correctClicks === 7){
        rabbitHole.style.display = "none";
        rabbitPop1.style.display = "none";
        rabbitPop2.style.top = "100px";
    }else if(correctClicks === 9){
        rabbitPop2.style.top = "200px";
    }
    else if(correctClicks === 12){
        rabbitPop2.style.top = "400px";
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

