'use client';

import React, { useRef, useEffect } from 'react'

const canvasWidth = 3200;
const centerX = canvasWidth / 2;
const centerY = canvasWidth / 2;
const dotSize = 10;

function angleFromOrigin(x, y) {
  const radians = Math.atan2(centerY - y, centerX - x); // Calculate the angle in radians
  const degrees = radians * (180 / Math.PI); // Convert radians to degrees
  return degrees < 0 ? degrees + 360 : degrees; // Normalize the angle to be within 0-360 degrees
}

const Canvas = props => {
    const canvasRef = useRef(null)
    const points = props.points;

    useEffect(() => {
        const draw = ctx => {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvasWidth, canvasWidth);
            for (var i=0; i< points.length; i++) {
                const point = points[i];
                const x = centerX + point[0];
                const y = centerY + point[1];
                ctx.fillStyle = `hsl(${angleFromOrigin(x, y)}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(x, y, dotSize, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    })

    return (
        <div className="border border-black" >
            <canvas width={canvasWidth} height={canvasWidth} ref={canvasRef} {...props}/>
        </div>)
}


export default Canvas;