//defining the board

//Define main players - weasel and rabbit

// Define dance combos - 3 dance combos generated automatically with timer set to each color that lights 

// Set start location for players 

class Player{
    constructor(location, size){
        this.location = location;
        this.size = size;
    }
}

class PlayerWeasel{
    constructor(location, size){
    super(location,size);    
    }
}

class PlayerRabbit{
    constructor(location, size){
    super(location,size);    
    }
}

class Game{
    constructor(board){
       this.weasel = new PlayerWeasel({x:100, y:100}, 50); 
       this.rabbit = new PlayerRabbit({x:500, y:500}, 100);
       this.board = board;
    }
}









// set possible locations MOVE OPTIONS

//initialize game
//game states 



class Game(){

}

//reset game button
const resetGame = function () {

}