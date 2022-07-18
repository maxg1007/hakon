var mapa,hakonIdle ,hakon_img,hakon,hakonAnimation,enemy,tiro,tirosIMG;
var hakon_life = 100;
var direita = null;
var esquerda = null;
var atirou = false;
var tiros 


function preload(){
 mapa = loadImage('img/map.jpg')
 hakonAnimationD = loadAnimation('img/hakon.png','img/hakon_idle.png','img/hakon2.png')
 hakonIdle = loadAnimation('img/hakon_idle.png')
 
 
}

function setup(){
  createCanvas(1920,1080);
  hakon = createSprite(1100,1050,30,30)
  hakon.scale = 0.2
  
  hakon.addAnimation('idle',hakonIdle)
  hakon.addAnimation('walk',hakonAnimationD)
  
  enemy=new Enemy(1200,1050,'red')
  

  hakon.debug = true
  hakon.setCollider('rectangle',0,0,240,700)

  tiros = new Group()
}

function draw(){
  background('white');
  image(mapa,0,0,1920*5,1080*5)
  drawSprites()
  fill('black')
  textSize(20)
  text(mouseX + ',' + mouseY,mouseX,mouseY)
  
  enemy.Damage(10)
  
  enemy.E.overlap(tiros,function(atingido,dano){
    dano.remove()
    enemy.life -=10
    console.log(enemy.life)
  })
  

  
  
  fill('black')
  stroke('black')
  rect(hakon.x-50,hakon.y-100,100,10)

  fill('red')
  rect(hakon.x-50,hakon.y-100,hakon_life,10)
  
 atirar()
 control()  
}
function control(){
  if(keyDown('w')){
    hakon.y -= 10 
    
  }
  if(keyDown('s')){
    hakon.y += 10 
  }
  if(keyDown('a')){
    hakon.x -= 10 
    esquerda = true
    direita = false
    hakon.changeAnimation('walk')
    hakon.mirrorX(-1)

  }else if(keyDown('d')){
    hakon.x += 10 
    hakon.changeAnimation('walk')
    hakon.mirrorX(+1)
    esquerda = false
    direita = true
    
   
  }else{
    hakon.changeAnimation('idle')
  }
  
  camera.y = hakon.y
  
  if(hakon.x<=960){
    camera.x = 960
  }else if(hakon.x>=8640){
    camera.x = 8640
  }else{
    camera.x = hakon.x
  }
  if(hakon.y<=550){
    camera.y = 550
  }else if(hakon.y>=4850){
    camera.y = 4850
  }else{
    camera.y = hakon.y
  }
 console.log(esquerda)

}
function atirar(){
  if(!atirou){
  if(keyDown('space') && esquerda===true){
      tiro = createSprite(hakon.x,hakon.y,10,10)
      tiro.velocityX = -10;
      tiros.add(tiro)  
  }
  if(keyDown('space') && direita===true){
    tiro = createSprite(hakon.x,hakon.y,10,10)
    tiro.velocityX = 10;
    tiros.add(tiro)
   
}
   atirou = true
   setTimeout(()=>{
    atirou = false
   },1000)
   
  }
  
}
 