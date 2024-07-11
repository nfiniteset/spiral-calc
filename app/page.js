'use client'

import React, { useState } from "react";

import getSpiralLength from "./util/getSpiralLength";
import getSpiralPoints from "./util/getSpiralPoints";

import Canvas from "./components/Canvas";
import Panel from "./components/Panel";

export default function Home() {
  const [desiredDiameter, setDesiredDiameter] = useState(3048);
  const [desiredSpacing, setDesiredSpacing] = useState(50);

  const spiralLength = getSpiralLength(desiredDiameter, desiredSpacing)
  const spiralLedCount = Math.floor(spiralLength / desiredSpacing)
  const spiralPoints = getSpiralPoints(desiredSpacing, desiredSpacing, spiralLedCount);
  // const spiralXMin = Math.min(...spiralPoints.map(point => point[0]));
  // const spiralXMax = Math.max(...spiralPoints.map(point => point[0]));
  // const spiralYMin = Math.min(...spiralPoints.map(point => point[1]));
  // const spiralYMax = Math.max(...spiralPoints.map(point => point[1]));

  const pillarStripLength = 10000;
  const pillarHeight = 2438.4;
  const pillarSpacing = 2438.4;
  const pillarLEDSpacing = 50;
  const pillarLedCount = Math.floor(pillarStripLength / pillarLEDSpacing);
  const pillarCount = 8;
  const totalStripLength = pillarStripLength * pillarCount;
  const totalWireLength = (pillarHeight + pillarSpacing) * (pillarCount - 1);
  const totalLedCount = pillarLedCount * pillarCount;


  function handleDiameterChange(event) {
    setDesiredDiameter(event.target.value);
  }

  function handleSpacingChange(event) {
    setDesiredSpacing(event.target.value);
  }

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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-black">
      <div className="flex items-start">
        <Canvas className="h-[90vh]" points={spiralPoints} />

        <Panel className="h-[90vh]">
          <h1 className="font-bold block">LED spiral calc</h1>
          <h2 className="font-bold mt-6 block">Parameters</h2>
          <label className="mt-4 block">
            Desired diameter
            <div className="flex bg-white rounded-md p-2">
              <input className="inline appearance-none" type="number" value={desiredDiameter} onChange={handleDiameterChange} />
              <span className="ml-1"> mm</span>
            </div>
            <p className="mt-1">{mmToFt(desiredDiameter)}ft</p>
          </label>
          <label className="mt-2 block">
            Spacing between each LED
            <select className="mt-1 block w-full rounded-md p-2" value={desiredSpacing} onChange={handleSpacingChange}>
              <option value={50}>50mm</option>
              <option value={100}>100mm</option>
              <option value={150}>150mm</option>
              <option value={200}>200mm</option>
            </select>
            <p className="mt-1">{mmToIn(desiredSpacing)}in</p>
          </label>

          <h2 className="mt-6 font-bold">Strip length</h2>
          <p>{spiralLength.toFixed(2)}mm</p>
          <p>{mmToM(spiralLength)}m</p>

          <h2 className="mt-6 font-bold">LED count</h2>
          <p>{spiralLedCount}</p>
          
          {/* <h2 className="font-bold mt-6">Pillars</h2>
          <p>Height: {mmToFt(pillarHeight)}ft</p>
          <p>Space between pillars: {mmToFt(pillarSpacing)}ft</p>

          <p className="mt-6">Pillar strip length: {mmToM(pillarStripLength)}m</p>
          <p>Pillar LED count: {pillarLedCount}</p>

          <p className="mt-6">Total strip length: {mmToM(totalStripLength)}m</p>
          <p>Total LED count: {totalLedCount}</p>
          <p>Total wire length: {mmToM(totalWireLength)}m</p> */}

          <h2 className="font-bold mt-6">Points</h2>
          {/* <p>X min: {spiralXMin.toFixed(3)}</p>
          <p>X max: {spiralXMax.toFixed(3)}</p>
          <p>Y min: {spiralYMin.toFixed(3)}</p>
          <p>Y max: {spiralYMax.toFixed(3)}</p> */}

          <textarea className="mt-1 w-full h-24 p-2 rounded-md" readonly>
            {spiralPoints.reduce((acc, point) => (
              acc += `[${point[0].toFixed(3)}, ${point[1].toFixed(3)}], `
            ), "")}
          </textarea>
        </Panel>
      </div>
    </main>
  );
}
