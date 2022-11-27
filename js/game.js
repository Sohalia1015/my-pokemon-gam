class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(750,height-1000);
    player1.addAnimation("pikachu",pikachuImg);
    player1.addAnimation("pikabolt", pikabolt)
    player1.changeAnimation('pikachu')
    player1.scale = 1.7
    
    player2 = createSprite(width-850,height-1000);
    player2.addAnimation("eevee", eeveeImg);
    player2.scale = 1.7                  
    player2.addAnimation("eeveeGrowl", eeveeGrowl)   
    player2.changeAnimation('eevee')                    
    players=[player1,player2];

  

       
        }
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                //player.getPlayerAtEnd()
                image(backgroundImg, 0, 0, width, height);
                 //var x =100;
                 //var y=200;
                 var index =0;
                 drawSprites();
                    
                         textSize(25);
                         fill("white");
                        // text("Player 1 :" +allPlayers.player1.score,50,50);
                        // text("Player 2 :" + allPlayers.player2.score, 50, 100);

                        var index = 0;
                        for (var plr in allPlayers) {
                          //add 1 to the index for every loop
                          index = index + 1;
                  
                          //use data form the database to display the cars in x and y direction
                    
                          if (index === player.index) {
                            stroke(10);
                            fill("red");
                            textSize(100)
                            text(player.name, 500, 200)
                            
                  
                            // Changing camera position in y direction
                          }
                        }

           
                if(player.score>=5){
                    gameState = 2; 
                    player.rank += 1;
                    Player.updatePlayerAtEnd(player.rank);
                    player.update();
                    this.showRank();
                    
                }
                 

                if (keyWentDown(UP_ARROW)) {
                    player.distance -= 10
                    player.tapCount = player.tapCount +1
                    player.update()

                    if(allPlayers.player1.tapCount % 30 === 0){
                     allPlayers.player1.score = allPlayers.player1.score +10
                     player1.changeAnimation('pikabolt')

                    }

                
                    if(allPlayers.player2.tapCount % 30 === 0){
                        allPlayers.player2.score = allPlayers.player2.score +10
                        player2.changeAnimation('eeveeGrowl')
   
                       }
                       if(allPlayers.player1.tapCount % 30 === 5){
                        player1.changeAnimation("pikachu")
                       }
                       
                       if(allPlayers.player2.tapCount % 30 === 5){
                        player2.changeAnimation("eevee")
                       }
                }
                
                 // if(keyWentDown(UP_ARROW)){
                   
                
                 // }

                  }
                


                showRank() {
                    alert("Awesome !! You finished the game! You rank is :" +player.rank)
                  }

                  gameOver() {
                    textSize(40)
                    fill("white")
                    text("GAME OVER",displayWidth/2-400,displayHeight/2-200)
                    }
    
    end(){
       console.log("Game Ended");
       console.log(player.rank)
       this.gameOver();
    }


   
}