/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let videoSpeed = 5;



const backgroundLayer1 = new Image();
backgroundLayer1.src = "Images/canvas/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "Images/canvas/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "Images/canvas/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "Images/canvas/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "Images/canvas/layer-5.png";

const characterImage = new Image();
characterImage.src = 'Images/canvas/spritesheet.png'
const spriteWidth = 439;
const spriteHeight = 599;
let frameX = 0;
let videoFrame = 0;




  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = 1200;
      this.height = 175;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = videoSpeed * this.speedModifier;
    }
    update() {
      this.speed = videoSpeed * this.speedModifier;
      if (this.x <= -this.width) {
        this.x = 0;
      }
      this.x = Math.floor(this.x - this.speed);
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
  }

  const layer1 = new Layer(backgroundLayer1, 0.2);
  const layer2 = new Layer(backgroundLayer2, 0.4);
  const layer3 = new Layer(backgroundLayer3, 0.6);
  const layer4 = new Layer(backgroundLayer4, 0.8);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
     
    let position = Math.floor(videoFrame/videoSpeed) % 29;
      frameX = spriteWidth * position;

   
    ctx.drawImage(characterImage, frameX, 0, spriteWidth,spriteHeight, CANVAS_WIDTH * 0.3, 50, spriteWidth * 0.15, spriteHeight * 0.15);
  
    videoFrame++;
    requestAnimationFrame(animate);
  }
  animate();