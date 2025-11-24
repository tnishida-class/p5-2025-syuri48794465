// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  for(let i = 0; i < scores.length; i++){
  stroke(0);
  line(dx*i+dx/2, height*scores[i]/200, dx*(i+1)+dx/2,height*scores[i+1]/200); // BLANK[1]
  ellipse(dx*i+dx/2, height*scores[i]/200,8)
  }

}
