import React from "react";
import ButtonDown from "../controllers/ButtonDown";
import ButtonUp from "../controllers/ButtonUp";

export default function Container() {
  return (
    <div className="flex justify-center items-center space-x-4 gap-5">
      <div className="flex flex-col gap-28">
        <div >
          <ButtonDown />
        </div>

        <div className="flex flex-row gap-3">
          <ButtonDown />
          <ButtonUp />
        </div>
        <div>
          <ButtonUp />
        </div>
      </div>

      <div>
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
            y="400"
            height="200"
            width="50"
            className="stroke-black fill-yellow-500"
          />
        </svg>
      </div>
    </div>
  );
}
