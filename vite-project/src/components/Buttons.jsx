import React from "react";
import "./Button.css"
function Buttons({clickHandler,title, variant}){

  return <button className={variant} onClick={clickHandler}>{title}</button>;

}
  
export default Buttons