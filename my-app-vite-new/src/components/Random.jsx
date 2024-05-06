import { useState } from "react";
import Buttons from "./Buttons";
import "./Counter.css";

const Random = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentValue, setCurrentValue] = useState(Math.floor(Math.random() * (max - min + 1) + min))
  ;

  const clickHandler = (operation) => {
    switch (operation) {
      case "BIGGER":
          setMin(currentValue + 1)
          setCurrentValue(Math.floor(Math.random() * (max - currentValue + 1) + currentValue))
        break;
      case "SMALLER":
          setMax(currentValue - 1)
          setCurrentValue(Math.floor(Math.random() * (currentValue - min + 1) + min))

        break;
      case "EQUAL":
        alert('Right Number')
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className="pp">{currentValue}</p>
      <div className="divv">
        <Buttons
          clickHandler={() => clickHandler("BIGGER")}
          title={"BIGGER"}
          variant="BiggerButton"
        />
        <Buttons
          clickHandler={() => clickHandler("SMALLER")}
          title={"SMALLER"}
          variant="SmallerButton"
        />
        <Buttons
          clickHandler={() => clickHandler("EQUAL")}
          title={"EQUAL"}
          variant="EqualButton"
        />
      </div>
    </div>
  );
};

export default Random;
