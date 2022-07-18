class Enemy {
constructor(x,y,color){
    this.E = createSprite(x,y,30,30)
    this.E.shapeColor=color
    this.life = 50
    this.addAnimation('idle',hakonIdle)
    this.addAnimation('walk',hakonAnimationD)
}
Damage(dano){
  if(this.E.isTouching(hakon)&&hakon_life>1){
      hakon_life-=dano
      if(hakon_life<=0){
        hakon_life = 1
      }
      
    if(this.E.x > hakon.x){
        hakon.x-=150
    }else if(this.E.x < hakon.x){
        hakon.x+=150
    }
    if(this.E.y > hakon.y){
        hakon.y-=150
    }else if(this.E.y < hakon.y){
        hakon.y+=150
    }
  }
}
Hit(){
    if(tiro.isTouching(this.E)){
           this.life-=10
           
    }
    
}
 display(){
     drawSprites()
 }

}