import React, { useEffect, useRef } from 'react';


function Star(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.initialSize = radius;
  this.radius = radius;
  this.rDelta = 0.025 * Math.random();
  this.xDelta = 0.125;
  this.color = color;
}
Star.prototype = {
  render(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 360, false);
    context.fillStyle = this.color;
    context.fill();
  },
  update() {
    if ((this.radius > 2 || this.radius < 0.8)) {
      this.rDelta = -this.rDelta;
    }
    this.radius += this.rDelta;

    if (this.x > window.innerWidth) {
      this.x = 0;
    }
    this.x += this.xDelta * this.initialSize;
  },
};

function randomColor() {
  const arrColors = ['#ffffff', '#ffecd3', '#bfcfff'];
  return `${arrColors[Math.floor((Math.random() * 3))]}`;
}


const Starfield = function CreateStarfieldBackground({ starCount }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let arrStars = [];

    function generateStars() {
      arrStars = [];
      for (let i = 0; i < starCount; i += 1) {
        const xPos = Math.floor((Math.random() * canvas.width) + 1);
        const yPos = Math.floor((Math.random() * canvas.height) + 1);
        const radius = Math.random() * 1 + 0.5;

        const star = new Star(xPos, yPos, radius, randomColor());
        arrStars.push(star);
      }
    }

    function update() {
      arrStars.forEach((star) => { star.update(); });
    }

    function animate() {
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateStars();
      }
      update();

      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < arrStars.length; i += 1) {
        arrStars[i].render(context);
      }
      requestAnimationFrame(animate);
    }

    generateStars();
    animate();
  }, []);


  return (
    <canvas
      style={{ display: 'block', position: 'fixed', width: '100%' }}
      ref={canvasRef}
      id="starfield"
    />
  );
};


export default Starfield;
