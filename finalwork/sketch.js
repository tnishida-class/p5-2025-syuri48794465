let x, y;
let vx, vy;
let size
const g = 1;
let snow=[]


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2
  y = height / 2
  size=height*0.2
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}

function draw(){
  background(246,246,246);
  
  //snowfall
  for(let i = 0; i < snow.length; i++){
    let t = snow[i];
    fill(255);
    ellipse(t.x, t.y, t.size);
    t.x += t.vx;
    t.y += t.vy;
  }

   // 重力とジャンプ
   if(y<windowHeight-size*0.5){ vy+=g}
  else{
    vy=0
    if(keyIsDown(" ".charCodeAt(0))){ 
    vy-=20}
  }
    
  
  // 制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  //snowman
  fill(255);
  ellipse(x, y, size, size);
  ellipse(x,y-size*0.8,size*0.8)
  fill(200,7,7)
  rect(x+size*0.1,y-size*0.5,size*0.2,size*0.5,20)
  ellipse(x,y-size*0.45,size*0.7,size*0.2)
  ellipse(x,y-size*0.75,size*0.15,size*0.1)
  fill(0)
  ellipse(x-size*0.2,y-size*0.8,size*0.1)
  ellipse(x+size*0.2,y-size*0.8,size*0.1)
  ellipse(x,y-size*0.2,size*0.1)
  ellipse(x,y,size*0.1) 

// snowfall
if(frameCount % 10 == 0){ 
    const a=random(0,3)
    const dx = random(-1,1)
    const dy = random(2,4)
    const b = { x:windowWidth/a , y: 0, vx: dx, vy: dy, size: 10};
    snow.push(b);
    }

//
if(size<height*0.8&&y>windowHeight-size*0.5){ 
    size+=0.2
}
else{size=height*0.2}
}

