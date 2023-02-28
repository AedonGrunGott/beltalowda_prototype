import React, { useEffect, useRef } from 'react';

const Starfield = function CreateStarfieldBackground() {
  const canvasRef = useRef(null);

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const starCount = 1000;

    function generateStarPositions(count) {
      const starArray = [];
      const canvas = canvasRef.current;
      for (let i = 0; i < count; i += 1) {
        const xPos = Math.random() * canvas.offsetWidth;
        const yPos = Math.random() * canvas.offsetHeight;
        const radius = Math.random() * 1.3;
        starArray.push([xPos, yPos, radius]);
      }
      return starArray;
    }
    const starArray = generateStarPositions(starCount);

    function drawStars(stars) {
      const hueRange = [60, 80, 240];

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const xPos = star[0];
        const yPos = star[1];
        const radius = star[2];

        const hue = hueRange[getRandom(0, hueRange.length - 1)];
        const saturation = getRandom(20, 50);
        const lightness = getRandom(50, 90);

        context.beginPath();
        context.arc(xPos, yPos, radius, 0, 360);
        context.fillStyle = `hsla(${hue},${saturation}%,${lightness}%,0.8`;
        context.fill();
      });
    }
    drawStars(starArray);
  }, []);


  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      width="800"
      height="600"
    />
  );
};


export default Starfield;
