import React from "react";

export default function ElevatorSVG({ Y_Axis }) {
  return (
    <svg className="h-[600px] w-60 bg-blue-200 border-black border-solid border-2">
      <line
        className="stroke-red-500 stroke-opacity-75 stroke-width-1"
        x1="40"
        y1="0"
        x2="40"
        y2="600"
      />
      <line className="stroke-red-900" x1="0" y1="200" x2="600" y2="200" />
      <line className="stroke-red-900" x1="0" y1="400" x2="600" y2="400" />
      <text x="80" y="100" fill="#000">
        Level 2
      </text>
      <text x="80" y="300" fill="#000">
        Level 1
      </text>
      <text x="80" y="500" fill="#000">
        Level 0/GL
      </text>
      <rect
        id="lift"
        x="10"
        y={Y_Axis}
        height="200"
        width="60"
        className="stroke-black fill-yellow-500"
      />
    </svg>
  );
}
