var hypnoticBall, database;
var form, player, game;
var gameState=0;
var playerCount=0;
var allPlayers;
var Car1,Car2,Car3,Car4;
var Cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);

 game=new Game()
game.getState()
game.start()
 
}

function draw(){
  background("white");
  
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
}


