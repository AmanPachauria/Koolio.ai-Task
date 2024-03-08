import React, { useState, useEffect } from "react";
import ButtonDown from "../controllers/ButtonDown";
import ButtonUp from "../controllers/ButtonUp";
import ElevatorSVG from "./ElevatorSVG";
import AnimationUp from "../animations/AnimationUp";
import AnimationDown from "../animations/AnimationDown";

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
        SetDown1(false);
        AnimationUp(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
    }
    else if(Y_Axis === 200 && Down1 === false && Down === true){
        SetDown(false);
        SetUp1(false);
        AnimationDown(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
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

  function handleClick0Up() {
    if (elevatorLevel === 0) {
      SetUp(true);
      AnimationUp(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
      
    }
  }

  function handleClick1Up() {
    if (elevatorLevel !== 2) {
      SetUp1(true);
      if (Up === false && Down === false) {
        AnimationUp(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
        SetUp1(false);
      }
    }
  }

  function handleClick1Down() {
    if (elevatorLevel !== 0) {
      SetDown1(true);
      if( Down === false && Up === false){
        AnimationDown(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
        SetDown1(false);
      }
      
    }
  }

  function handleClick2Down() {
    if (elevatorLevel === 2) {
      SetDown(true);
      AnimationDown(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel);
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
        <ElevatorSVG Y_Axis={Y_Axis} />
      </div>
    </div>
  );
}
