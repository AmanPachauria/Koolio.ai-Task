export default function AnimationDown(Y_Axis, SetY_Axis, elevatorLevel, SetElevatorLevel) {
    console.log("Down Animation");
  
    const startY = Y_Axis;
    const endY = Y_Axis + 200;
    const duration = 5000;
    const interval = 10;
  
    const totalSteps = duration / interval;
    let step = 0;
  
    const updatePosition = () => {
      const newY = startY + ((endY - startY) * step) / totalSteps; 
      SetY_Axis(newY);
      step++;
  
      if (step <= totalSteps) {
        setTimeout(updatePosition, interval);
      }
    };
  
    updatePosition();
    SetElevatorLevel(elevatorLevel - 1);
  }
  