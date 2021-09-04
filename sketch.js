var alien1_img,alien_2img,pl_1img,pl_2img,pl1,pl_2img,alienGroup;
var gameState=3
var pl1,pl2,pl3,pl4,bullet4,bullet1,bullet2,bullet3,alien
var pl1_score=0
var pl2_score=0
var pl3_score=0
var pl4_score=0

function preload() {
    pl_1img=loadImage("Images/player_1.png")
    pl_2img=loadImage("Images/player_2.png")
    pl_3img=loadImage("Images/player_3.png")
    pl_4img=loadImage("Images/player_4.png")
    alien1_img=loadImage("Images/enemy.png")
    alien2_img=loadImage("Images/enemy_2.png")
    alien3_img=loadImage("Images/enemy_3.png")
    alien4_img=loadImage("Images/enemy_4.png")
    bullet_Img=loadImage("Images/bullet.png")
    bullet_Img_2=loadImage("Images/bullet_2.png")
    bullet_Img_3=loadImage("Images/bullet_3.png")
    bullet_Img_4=loadImage("Images/bullet_4.png")
    bg=loadImage("Images/background.jpg")
    bg2=loadImage("Images/bg1.jpg")
    bg3=loadImage("Images/bg2.jpg")
    crown=loadImage("Images/king.png")
    logo_img=loadImage("Images/logo.png")
    avatar=loadImage("Images/avatar.png")
    over1=loadImage("Images/game.jpg")
    over_sound=loadSound("sound/over.mp3")
    playerGroup=new Group()
    alienGroup=new Group()
    bulletGroup=new Group()
}

function setup() {

    width = windowWidth-20;
    height = windowHeight-20;

    createCanvas(width, height);

    pl1=createSprite(width*0.1,100,10,10)
    pl1.addImage(pl_1img)
    pl1.scale=0.4

    pl2=createSprite(width*0.1,300,10,10)
    pl2.addImage(pl_2img)
    pl2.scale=0.5

    pl3=createSprite(width*0.1,500,10,10)
    pl3.addImage(pl_3img)
    pl3.scale=0.2

    pl4=createSprite(width*0.1,700,10,10)
    pl4.addImage(pl_4img)
    pl4.scale=0.3

    bullet1=createSprite(width*0.1,100)
    bullet1.addImage(bullet_Img)
    bullet1.scale=0.2
    bullet1.velocityX=4

    bullet2=createSprite(width*0.1,300)
    bullet2.addImage(bullet_Img_2)
    bullet2.scale=0.2
    bullet2.velocityX=4

    bullet3=createSprite(width*0.1,500)
    bullet3.addImage(bullet_Img_3)
    bullet3.scale=0.2  
    bullet3.velocityX=4

    bullet4=createSprite(width*0.1,700)
    bullet4.addImage(bullet_Img_4)
    bullet4.scale=0.2
    bullet4.velocityX=4

    bulletGroup.add(bullet4)
    bulletGroup.add(bullet1)
    bulletGroup.add(bullet2)
    bulletGroup.add(bullet3)

    
    playerGroup.add(pl1)
    playerGroup.add(pl2)
    playerGroup.add(pl3)
    playerGroup.add(pl4)

    logo=createSprite(1000,800)
    logo.addImage(logo_img)
    logo.scale=0.5

    king=createSprite(800,500)
    king.addImage(crown)

    avatar1=createSprite(800,700)
    avatar1.addImage(avatar)
    avatar1.scale=0.3
    
    over=createSprite(900,200)
    over.addImage(over1)
}

function draw() {
  
    if(gameState===3){
      over.visible=false
      king.visible=false
      logo.visible=true
      avatar1.visible=false
      bulletGroup.destroyEach()
      playerGroup.destroyEach()
      background(bg2);
      textSize(150)
      fill("yellow")
      text("Alien Invasion",750,200)
      textSize(30)
      fill("yellow")
      
      text("Are you ready to save your planet from aliens???",850,300)
      text("You must kill atleast 10 aliens to save your planet",850,350)
      fill("yellow")
      text("Press the SPACE key to fire bullet",20,850)
      text("Press the ENTER key to re-fire bullet", 20,900)
      
     // text("You must press the space key to make your bullets mover and if the alien is killed you must press enter",200,400)
      fill("red")
      textSize(50)
      text("Press Up arrow to begin",1500,920)
      if(keyCode===38){
        gameState=1
      }
    }

    if(gameState===1)
    {
      avatar1.visible=false
      king.visible=false
      logo.visible=false
      over.visible=false
      background(bg);
      
      pl1=createSprite(width*0.1,100,10,10)
      pl1.addImage(pl_1img)
      pl1.scale=0.4
  
      pl2=createSprite(width*0.1,300,10,10)
      pl2.addImage(pl_2img)
      pl2.scale=0.5
  
      pl3=createSprite(width*0.1,500,10,10)
      pl3.addImage(pl_3img)
      pl3.scale=0.2
  
      pl4=createSprite(width*0.1,700,10,10)
      pl4.addImage(pl_4img)
      pl4.scale=0.3

      playerGroup.add(pl1)
      playerGroup.add(pl2)
      playerGroup.add(pl3)
      playerGroup.add(pl4)
      
      alienMaker() 
      if(keyCode===13){
        bulletGroup.destroyEach()
        bullet1=createSprite(width*0.1,100)
        bullet1.addImage(bullet_Img_2)
        bullet1.scale=0.2
    
        bullet2=createSprite(width*0.1,300)
        bullet2.addImage(bullet_Img_3)
        bullet2.scale=0.2
        bullet2.velocityX=4
    
        bullet3=createSprite(width*0.1,500)
        bullet3.addImage(bullet_Img_4)
        bullet3.scale=0.2
        bullet3.velocityX=4
    
        bullet4=createSprite(width*0.1,700)
        bullet4.addImage(bullet_Img)
        bullet4.scale=0.2
        bullet4.velocityX=4
    
        bulletGroup.add(bullet4)
        bulletGroup.add(bullet1)
        bulletGroup.add(bullet2)
        bulletGroup.add(bullet3)
      }
    if(keyCode===32){
      bullet1.velocityX=4
    }
  

  if(bullet1.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl1_score+=1
 
  }
  if(bullet2.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl2_score+=1 

  }
  if(bullet3.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl3_score+=1
   
  }
  if(bullet4.isTouching(alienGroup)){
    alienGroup.destroyEach()
    bulletGroup.destroyEach()
    pl4_score+=1
   }
  fill("white")
  textSize(20)
  text ("SCORES -", 50,50)
  text ("Player 1", 10,100)
  text ("Player 2", 10,300)
  text ("Player 3", 10,500)
  text ("Player 4", 10,700)
  text("Player 1 = "+pl1_score,200,50)
  text("Player 2 = "+pl2_score,350,50)
  text("Player 3 = "+pl3_score,500,50)
  text("Player 4 = "+pl4_score,650,50)
 
    }
  if(pl1_score===10 || pl2_score===10 || pl3_score===10 || pl4_score===10){
    gameState=0
}
  if(gameState===0){
    background(bg3)
    over_sound.play()
    king.visible=true
    avatar1.visible=true
    over.visible=true
    alienGroup.destroyEach()
    playerGroup.destroyEach()
    //textSize(50)
    //fill("blue")
  //  text("Game Over",width*0.4,height*0.1)
   // text("Press Up Arrow to see the score",500,200)
   if(pl1_score===10){
    textSize(30)
     fill("white")
    text("Player 1 wins",1100,600)
   }
   else if(pl2_score===10){
    textSize(30)
    fill("red")
    text("Player 2 wins",1100,600)
   }
   else if(pl3_score===10){
    textSize(30)
    fill("white")
    text("Player 3 wins",1100,600)
   }
   else if(pl4_score===10){
     textSize(30)
    fill("white")
    text("Player 4 wins",1100,600)
   }
    
  }
  drawSprites()
}
 

function alienMaker(){
  if(frameCount % 100 === 0) {
    alien = createSprite(random(width*.5, width*.9), random(height*.5,height*.9));
    
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: alien.addImage("al1",alien1_img);
          alien.scale=0.5
          break;
        case 2: alien.addImage("al2", alien2_img);
         alien.scale=1
          break;
        case 3: alien.addImage("al3", alien3_img);
            alien.scale=0.3
          break;
        case 4: alien.addImage("al4",alien4_img);
          alien.scale=0.3
          break;
    }
    alienGroup.add(alien)
    alienGroup.lifetime=600
}
}

/*function bullet(){
  
    bullet4=createSprite(160,700)
    bullet4.addImage(bullet_Img)
    bullet4.scale=0.2
    bullet4.velocityX=4

    bullet1=createSprite(160,500)
    bullet1.addImage(bullet_Img_2)
    bullet1.scale=0.2
   
    bullet2=createSprite(160,100)
    bullet2.addImage(bullet_Img_3)
    bullet2.scale=0.2
    bullet2.velocityX=4

    bullet3=createSprite(160,300)
    bullet3.addImage(bullet_Img_4)
    bullet3.scale=0.2
    bullet3.velocityX=4
  
    bulletGroup.add(bullet4)
    bulletGroup.add(bullet1)
    bulletGroup.add(bullet2)
    bulletGroup.add(bullet3)
  }
*/
