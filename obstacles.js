const obs= new Image();
obs.src= 'Utils\\Crystal.png';

const obsTop = new Image();
obsTop.src='Utils\\Crystal2.png';

const obstaclesArray = [];

class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 30;
    this.color = "hsla(" + hue + ",100%,50%,1)";
    this.counted = false;
  }  
  draw() {
    ctx.fillStyle = this.color;
    //top pipe drawing
    //ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.drawImage(obsTop, this.x-10, 0, this.width*1.7, this.top );
    //bottom pipe drawing
    // ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    ctx.drawImage(obs, this.x -15, canvas.height - this.bottom, this.width*2 , this.bottom);
  }
  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}
function handlleObstacle() {
  if (frame % 150 === 0) {
    obstaclesArray.unshift(new Obstacle());
  }
  for (var i = 0; i < obstaclesArray.length; i++) {
    obstaclesArray[i].update();
  }
  if (obstaclesArray.length > 20) {
    obstaclesArray.pop(obstaclesArray[0]);
  }
}