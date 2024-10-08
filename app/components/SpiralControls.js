import React from 'react';

import { mmToFt, mmToM, mmToIn } from '../util/convert';

// const spiralXMin = Math.min(...spiralPoints.map(point => point[0]));
// const spiralXMax = Math.max(...spiralPoints.map(point => point[0]));
// const spiralYMin = Math.min(...spiralPoints.map(point => point[1]));
// const spiralYMax = Math.max(...spiralPoints.map(point => point[1]));

function SpiralControls({
  desiredDiameter,
  setDesiredDiameter,
  desiredSpacing,
  setDesiredSpacing,
  spiralLength,
  spiralLedCount,
  spiralPoints
}) {
  function handleDiameterChange(event) {
    setDesiredDiameter(event.target.value);
  }

  function handleSpacingChange(event) {
    setDesiredSpacing(event.target.value);
  }

  const spiralPointsText = spiralPoints.reduce((acc, point) => (
  acc += `[${point[0].toFixed(3)}, ${point[1].toFixed(3)}], `
  ), "")

  return (
    <div className="flex flex-col h-full pb-12">
      <h1 className="font-bold block">LED spiral calc</h1>
      <h2 className="font-bold mt-6 block">Parameters</h2>
      <label className="mt-4 block">
        Desired diameter
        <div className="flex bg-white rounded-md p-2">
          <input className="inline appearance-none" type="number" value={desiredDiameter} onChange={handleDiameterChange} />
          <span className="ml-1"> mm</span>
        </div>
        <p className="mt-1 text-slate-500">{mmToFt(desiredDiameter)}ft</p>
      </label>
      <label className="mt-2 block">
        Spacing between each LED
        <select className="mt-1 block w-full rounded-md p-2" value={desiredSpacing} onChange={handleSpacingChange}>
          <option value={17}>16mm - 60 per meter</option>
          <option value={50}>50mm</option>
          <option value={100}>100mm</option>
          <option value={150}>150mm</option>
          <option value={200}>200mm</option>
        </select>
        <p className="mt-1 text-slate-500">{mmToIn(desiredSpacing)}in</p>
      </label>

      <h2 className="mt-6 font-bold">Strip length</h2>
      <p>{spiralLength.toFixed(2)}mm</p>
      <p>{mmToM(spiralLength)}m</p>

      <h2 className="mt-6 font-bold">LED count</h2>
      <p>{spiralLedCount}</p>

      <h2 className="font-bold mt-6">Points</h2>
      <textarea className="mt-1 w-full h-24 p-2 rounded-md h-full min-h-24" readOnly>
        {spiralPointsText}
      </textarea>
    </div>
  );
}

export default SpiralControls;