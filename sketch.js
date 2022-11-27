var database;
var backgroundImg
var eeveeImg
var pikachuImg
var pikabolt
var eeveeGrowl

var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var player_img;
var player1score =0;
var player2score =0;


function preload(){
eeveeImg = loadAnimation("images/Eevee1.png","images/Eevee2.png")
eeveeGrowl = loadAnimation("images/EeveeGrowl.png")

pikachuImg = loadAnimation("images/Pikachu1.png", "images/Pikachu2.png")
pikabolt = loadAnimation("images/Pikabolt1.png", "images/Pikabolt2.png")

backgroundImg = loadImage("images/background.jpg")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImg)


  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
   
    game.end();
  }


  drawSprites()
}

