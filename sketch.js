var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var rankCount=0;
var form, player, game;
var p;
var num=0;
var cars, car1, car2, car3, car4;
var track;
var ground;
var carImg1,carImg2,carImg3,carImg4;
function preload(){
  carImg1= loadImage("images/car1.png")
  carImg2=loadImage("images/car2.png")
  carImg3=loadImage("images/car3.png")
  carImg4=loadImage("images/car4.png")
track=loadImage("images/track.jpg")
ground=loadImage("images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(rankCount===4){
    clear();
    game.end()
  }
  // if(gameState===2){
  //   game.end()
  // }
}