'use client'

import React, { useState } from "react";

import Panel from "../components/Panel";
import PillarControls from "../components/PillarControls";

function getSpiralLength(diameter, ledSpacing, targetLedCount) {
  const radius = diameter / 2;
  const anglePerLED = ledSpacing / radius;
  const totalAngle = targetLedCount * anglePerLED;
  const heightIncrementPerLED = ledSpacing * totalAngle / (2 * Math.PI);
  let totalLength = 0;

  for (let i = 0; i < targetLedCount; i++) {
      const arcLength = radius * anglePerLED;
      const segmentLength = Math.sqrt(arcLength * arcLength + heightIncrementPerLED * heightIncrementPerLED);
      totalLength += segmentLength;
  }

  return totalLength;
}

  // function getPillarPoints(start, spacing, numLeds, height) {
  //   const points = [];
  //   const [x, y, z] = start;

  //   for (let i = 0; i < numLeds; i++) {
  //     const z = i * height / numLeds;
  //     points.push([x, y, z]);
  //   }

  //   return points;
  // }

export default function PillarsPage() {
  const [pillarHeight, setPillarHeight] = useState(2438);
  const [pillarDiameter, setPillarDiameter] = useState(457);
  const [ledSpacing, setLedSpacing] = useState(100);
  const [targetLedCount, setTargetLedCount] = useState(200);
  const [ledsPerPillar, setLedsPerPillar] = useState(50);

  const [pillarSpacing, setPillarSpacing] = useState(50);
  const [pillarCount, setPillarCount] = useState(50);

  const pillarStripLength = getSpiralLength(pillarDiameter, ledSpacing, targetLedCount);
  // const pillarPoints = getPillarPoints([0, 0, 0], ledSpacing, ledsPerPillar, pillarHeight);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-black">
      <div className="flex items-start">

        <Panel className="h-[90vh]">
          <p>Length: {pillarStripLength.toFixed(2)}</p>
          <hr className="mt-6" />
          <p>LED spacing: {ledSpacing.toFixed(2)}</p>
          <hr className="mt-6" />
          <p>Target LED count: {targetLedCount.toFixed(2)}</p>
        </Panel>
      </div>
    </main>
  );
}
