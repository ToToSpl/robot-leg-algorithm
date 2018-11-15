const cartDim = 10;

const a = 1.5;
const f = 4;
const g = 5;

let B = [0,0];
let C = [0,0];

function setup() {
  createCanvas(640, 640);
  background(100);

}

function draw(){
  background(100);

  stroke(0);
  strokeWeight(1);
  line(0,height/2,width,height/2);
  line(width/2,0,width/2,height);

  fill(255,0,0);

  ellipse(mouseX, mouseY, 10);

  ellipse(pixX(-a), pixY(0), 10);
  ellipse(pixX(a), pixY(0), 10);

  calcB(cartX(mouseX),cartY(mouseY));
  calcC(cartX(mouseX),cartY(mouseY));

  stroke(255,0,0);
  strokeWeight(2);

  line(pixX(-a), pixY(0), pixX(B[0]), pixY(B[1]));
  line(pixX(B[0]), pixY(B[1]), mouseX, mouseY);

  line(pixX(a), pixY(0), pixX(C[0]), pixY(C[1]));
  line(pixX(C[0]), pixY(C[1]), mouseX, mouseY);

}


function calcB(x,y){
  let i = 1 / (2 * y);
  let j = pow(f,2) + pow(x,2) + pow(y,2) - pow(g,2) - pow(a,2);
  let k = 2 * (a + x);

  let l = 1 + pow(k,2) * pow(i,2);
  let m = 2 * (a - (j * k * pow(i,2)));
  let n = pow(a,2) + (pow(i,2) * pow(j,2)) - pow(f,2);

  let delta = pow(m,2) - 4 * l * n;

  if(delta > 0){
    let xB = (-m - sqrt(delta)) / (2 * l);
    let yB = i * (j - k * xB);

    B = [xB,yB];

    ellipse(pixX(xB),pixY(yB),10);
  }
}

function calcC(x,y){
  let i = 1 / (2 * y);
  let j = pow(f,2) + pow(x,2) + pow(y,2) - pow(g,2) - pow(a,2);
  let k = 2 * (-a + x);

  let l = 1 + pow(k,2) * pow(i,2);
  let m = 2 * (-a - (j * k * pow(i,2)));
  let n = pow(a,2) + (pow(i,2) * pow(j,2)) - pow(f,2);

  let delta = pow(m,2) - 4 * l * n;

  if(delta > 0){
    let xC = (-m + sqrt(delta)) / (2 * l);
    let yC = i * (j - k * xC);

    C = [xC,yC];

    ellipse(pixX(xC),pixY(yC),10);
  }
}

function cartX(x){
  return map(x, 0, width, -cartDim, cartDim);
}

function cartY(y){
  return map(y, height, 0, -cartDim, cartDim);
}

function pixX(x){
  return map(x, -cartDim, cartDim, 0, width);
}

function pixY(y){
  return map(y, -cartDim, cartDim, height, 0);
}