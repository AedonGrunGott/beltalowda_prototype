import React, { useEffect, useRef } from 'react';


function Star(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.rDelta = 0.015;
  this.color = color;
}
Star.prototype = {
  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 360, false);
    context.fillStyle = this.color;
    context.fill();
  },
  update() {
    if (this.r > 2 || this.r < 0.8) {
      this.rDelta = -this.rDelta;
    }
    this.r += this.rDelta;
  },
};

function randomColor() {
  const arrColors = ['ffffff', 'ffecd3', 'bfcfff'];
  return `#${arrColors[Math.floor((Math.random() * 3))]}`;
}

const Starfield = function CreateStarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const starCount = 600;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const arrStars = [];
    for (let i = 0; i < starCount; i += 1) {
      const randX = Math.floor((Math.random() * canvas.width) + 1);
      const randY = Math.floor((Math.random() * canvas.height) + 1);
      const randR = Math.random() * 1.7 + 0.5;

      const star = new Star(randX, randY, randR, randomColor());
      arrStars.push(star);
    }

    function update() {
      arrStars.forEach((star) => { star.update(); });
    }

    function animate() {
      update();

      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < arrStars.length; i += 1) {
        arrStars[i].render(context);
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, []);


  return (
    <canvas
      style={{ position: 'absolute', width: '100%', height: 'auto' }}
      ref={canvasRef}
      id="starfield"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};


export default Starfield;
