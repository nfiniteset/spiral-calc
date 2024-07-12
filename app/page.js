'use client'

import React, { useState } from "react";

import getSpiralLength from "./util/getSpiralLength";
import getSpiralPoints from "./util/getSpiralPoints";

import Canvas from "./components/Canvas";
import Panel from "./components/Panel";
import SpiralControls from "./components/SpiralControls";

export default function Home() {
  const [desiredDiameter, setDesiredDiameter] = useState(3048);
  const [desiredSpacing, setDesiredSpacing] = useState(50);

  const spiralLength = getSpiralLength(desiredDiameter, desiredSpacing)
  const spiralLedCount = Math.floor(spiralLength / desiredSpacing)
  const spiralPoints = getSpiralPoints(desiredSpacing, desiredSpacing, spiralLedCount);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-black">
      <div className="flex items-start">
        <Canvas className="h-[90vh]" points={spiralPoints} />

        <Panel className="h-[90vh]">
          <SpiralControls {...{desiredDiameter,
            setDesiredDiameter,
            desiredSpacing,
            setDesiredSpacing,
            spiralLength,
            spiralLedCount,
            spiralPoints}}>
          </SpiralControls>
        </Panel>
      </div>
    </main>
  );
}
