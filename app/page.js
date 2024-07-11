import React from "react";

import getSpiralLength from "./getSpiralLength";
import getSpiralPoints from "./getSpiralPoints";

import Canvas from "./Canvas";

export default function Home() {
  const spiralDiameter = 3048;
  const spiralSpacing = 50;
  const spiralLength = getSpiralLength(spiralDiameter, spiralSpacing)
  const spiralLedCount = Math.floor(spiralLength / spiralSpacing)
  const spiralPoints = getSpiralPoints(spiralSpacing, spiralSpacing, spiralLedCount);
  const spiralXMin = Math.min(...spiralPoints.map(point => point[0]));
  const spiralXMax = Math.max(...spiralPoints.map(point => point[0]));
  const spiralYMin = Math.min(...spiralPoints.map(point => point[1]));
  const spiralYMax = Math.max(...spiralPoints.map(point => point[1]));

  const pillarStripLength = 10000;
  const pillarHeight = 2438.4;
  const pillarSpacing = 2438.4;
  const pillarLEDSpacing = 50;
  const pillarLedCount = Math.floor(pillarStripLength / pillarLEDSpacing);
  const pillarCount = 8;
  const totalStripLength = pillarStripLength * pillarCount;
  const totalWireLength = (pillarHeight + pillarSpacing) * (pillarCount - 1);
  const totalLedCount = pillarLedCount * pillarCount;

  function mmToFt(mm) {
    return (mm / 304.8).toFixed(2);
  }

  function mmToIn(mm) {
    return (mm / 25.4).toFixed(2);
  }

  function mmToM(mm) {
    return (mm / 1000).toFixed(2);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-start">
        <Canvas className="h-[90vh]" points={spiralPoints} />

        <div className="ml-6">
          <h2 className="font-bold">Spiral</h2>
          <p>Diameter: {spiralDiameter}mm / {mmToFt(spiralDiameter)}ft</p>
          <p>Spacing: {spiralSpacing}mm / {mmToIn(spiralSpacing)}in</p>
          <p>Length: {spiralLength.toFixed(2)}mm / {mmToM(spiralLength)}m</p>
          <p>LED count: {spiralLedCount}</p>
          
          {/* <h2 className="font-bold mt-6">Pillars</h2>
          <p>Height: {mmToFt(pillarHeight)}ft</p>
          <p>Space between pillars: {mmToFt(pillarSpacing)}ft</p>

          <p className="mt-6">Pillar strip length: {mmToM(pillarStripLength)}m</p>
          <p>Pillar LED count: {pillarLedCount}</p>

          <p className="mt-6">Total strip length: {mmToM(totalStripLength)}m</p>
          <p>Total LED count: {totalLedCount}</p>
          <p>Total wire length: {mmToM(totalWireLength)}m</p> */}

          <h2 className="font-bold mt-6">Points</h2>
          <p>X min: {spiralXMin.toFixed(3)}</p>
          <p>X max: {spiralXMax.toFixed(3)}</p>
          <p>Y min: {spiralYMin.toFixed(3)}</p>
          <p>Y max: {spiralYMax.toFixed(3)}</p>

          <textarea className="mt-6 w-full h-24" readonly>
            {spiralPoints.reduce((acc, point) => (
              acc += `[${point[0].toFixed(3)}, ${point[1].toFixed(3)}], `
            ), "")}
          </textarea>
        </div>
      </div>
    </main>
  );
}
