import { useState } from "react";
import Buttons from "./Buttons";
import "./Counter.css";

const Counter = () => {
  const [n, setN] = useState(0);

  const clickHandler = (operation) => {
    switch (operation) {
      case "ADD":
        setN(n + 1);
        break;
      case "SUBSTRACT":
        setN(n - 1);
        break;
      case "CLEAR":
        setN(0);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className="pp">{n}</p>
      <div className="divv">
        <Buttons clickHandler={() => clickHandler("ADD")} title={"ADD"} variant="buttonAdd" />
        <Buttons clickHandler={() => clickHandler("SUBSTRACT")}title={"SUBSTRACT"} variant='buttonSubstract'/>
        <Buttons clickHandler={() => clickHandler("CLEAR")} title={"CLEAR"} variant='buttonClear'/>
      </div>
    </div>
  );
};

export default Counter;
