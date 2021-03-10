class Game {
    constructor(){
  
    }
  
   
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      car1 = createSprite(100,200);
      car1.addImage("car1",car1_img);
      car2 = createSprite(300,200);
      car2.addImage("car2",car2_img);
      car3 = createSprite(500,200);
      car3.addImage("car3",car3_img);
     
      cars = [car1, car2, car3, ];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
  player.getcarsatend()    
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
       
        
       
        var index = 0;
  
       
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
  
          index = index + 1 ;
  
      
          x = x + 200;
         
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
         
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          
        }
  
      }
  
      
  
      if(player.distance > 3860){
        gameState = 2;
        player.rank+=1
        Player.updatecarsatend(player.rank)
        player.getplayerrank()
        clear()
        rank=new Rank()
        rank.display()
      }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  