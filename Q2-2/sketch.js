// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    if(i%2!=0&&j%2==0||i%2==0&&j%2!=0){
      fill(100)
      rect(size*i,size*j,size,size)

      if(j<3){
        fill(255, 0, 0)
        ellipse(size*i+size*1/2,size*j+size*1/2,size*0.8,size*0.8)
      }
      
    if(j>=5){
        fill( 0)
        ellipse(size*i+size*1/2,size*j+size*1/2,size*0.8,size*0.8)
      }
    }
  }
  }
}