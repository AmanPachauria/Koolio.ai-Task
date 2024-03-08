import React from "react";
import ButtonDown from "../controllers/ButtonDown";
import ButtonUp from "../controllers/ButtonUp";
import { useState } from "react";
import { useEffect } from "react";

export default function Container() {
  const [Y_Axis, SetY_Axis] = useState(400);
  const [Up, SetUp] = useState(false);
  const [Down, SetDown] = useState(false);
  const [Up1, SetUp1] = useState(false);
  const [Down1, SetDown1] = useState(false);
  const [elevatorLevel, SetElevatorLevel] = useState(0);


  useEffect(() => {
  
    console.log("Y_Axis updated:", Y_Axis);
    if(Y_Axis === 200 && Up1 === false && Up === true ){
        SetUp(false);
        AnimationUp();
    }
    else if(Y_Axis === 200 && Down1 === false && Down === true){
        SetDown(false);
        AnimationDown();
    }
    else if( Y_Axis === 200 && Up1 === true){
        SetUp(false);
        SetUp1(false);
    }
    else if( Y_Axis === 200 && Down1 === true){
        SetDown(false);
        SetDown1(false);
    }
  }, [Y_Axis]); 

  function AnimationUp() {
    console.log("Up Animation");

    const startY = Y_Axis;
    const endY = Y_Axis - 200;
    const duration = 5000;
    const interval = 10;

    const totalSteps = duration / interval;
    let step = 0;

    const updatePosition = () => {
      const newY = startY - ((startY - endY) * step) / totalSteps;
      SetY_Axis(newY);
      step++;

      if (step <= totalSteps) {
        setTimeout(updatePosition, interval);
      }
    };

    updatePosition();
    SetElevatorLevel(elevatorLevel + 1);
  }

  function AnimationDown() {
    console.log("Down Animation");

    const startY = Y_Axis;
    const endY = Y_Axis + 200; // Increase the value here
    const duration = 5000;
    const interval = 10;

    const totalSteps = duration / interval;
    let step = 0;

    const updatePosition = () => {
      const newY = startY + ((endY - startY) * step) / totalSteps; // Change the calculation
      SetY_Axis(newY);
      // console.log(newY);
      step++;

      if (step <= totalSteps) {
        setTimeout(updatePosition, interval);
      }
    };

    updatePosition();
    SetElevatorLevel(elevatorLevel - 1);
  }

  function handleClick0Up() {
    if (elevatorLevel === 0) {
      SetUp(true);
      AnimationUp();
      
    }
  }

  function handleClick1Up() {
    if (elevatorLevel !== 2) {
      SetUp1(true);
      if (Up === false) {
        AnimationUp();
        SetUp1(false);
      }
    }
  }

  function handleClick1Down() {
    if (elevatorLevel !== 0) {
      SetDown1(true);
      if( Down === false){
        AnimationDown();
        SetDown1(false);
      }
      
    }
  }

  function handleClick2Down() {
    if (elevatorLevel === 2) {
      SetDown(true);
      AnimationDown();
    }
  }

  return (
    <div className="flex justify-center items-center space-x-4 gap-5">
      <div className="flex flex-col gap-28">
        <div>
          <ButtonDown onClick={handleClick2Down} />
        </div>

        <div className="flex flex-row gap-3">
          <ButtonDown onClick={handleClick1Down} />
          <ButtonUp onClick={handleClick1Up} />
        </div>
        <div>
          <ButtonUp onClick={handleClick0Up} />
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
            y={Y_Axis}
            height="200"
            width="60"
            className="stroke-black fill-yellow-500"
          />
        </svg>
      </div>
    </div>
  );
}
