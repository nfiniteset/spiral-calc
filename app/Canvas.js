'use client';

import React, { useRef, useEffect } from 'react'

const canvasWidth = 3200;
const centerX = canvasWidth / 2;
const centerY = canvasWidth / 2;

const Canvas = props => {
    const canvasRef = useRef(null)
    const points = props.points;

    useEffect(() => {
        const draw = ctx => {
            ctx.clearRect(0, 0, canvasWidth, canvasWidth);
            for (var i=0; i< points.length; i++) {
                const point = points[i];
                const x = centerX + point[0];
                const y = centerY + point[1];
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, 2 * Math.PI);
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