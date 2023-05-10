//defining the board

//Define main players - weasel and rabbit

// Define dance combos - 3 dance combos generated automatically with timer set to each color that light up
//In the future option to connect a song chosen from a playlist  
// Set start location for players 

//Button to toggle between intro page and game page
const clickToPlay = document.getElementById("click-to-play");
const introPage = document.getElementById("intro-page");
const gamePage = document.getElementById("game-page");

clickToPlay.addEventListener("click", function(){
    if (introPage.style.display === "none"){
        introPage.style.display = "block";
        gamePage.style.display = "none";
    }else{
        introPage.style.display = "none";
        gamePage.style.display = "block";
    }
});

//Game intro speech bubbles --TO FIX 

const speechBubble = document.querySelector(".speech-bubble");

setTimeout(() => {
  speechBubble.style.display = "none";
}, 5000);




//Create color buttons

let colorButtons = document.getElementsByClassName("color-button-container");


function flashButton(colorButton) {
    colorButton.style.opacity = "0.1";
    setTimeout(function() {
      colorButton.style.opacity = "1";
    }, Math.random() * 500 + 100);
  }

  function flashButtons() {
    let count = 0;
    let currentIndex = 0;
    let interval = setInterval(function() {
      flashButton(colorButtons[currentIndex]);
      currentIndex++;
      if (currentIndex >= colorButtons.length) {
        currentIndex = 0;
        count++;
      }
      if (count >= 15) {
        clearInterval(interval);
      }
    }, Math.random() * 700 + 500);
  }
  
  flashButtons();  

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", flashButtons);





//test for future code versions


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


const RhythmConstructor = {
    nextStep: () => {
        // call each step at a time interval
    },
    rhythm: () => {
        redBall(1000);
        greenBall(400);
        blueBall(1200);
        yellowBall(600);
    },
    rhythm2: () => {
        redBall(1000);
        greenBall(400);
        blueBall(1200);
        yellowBall(600);
    }
}

RhythmConstructor.rhythm1();