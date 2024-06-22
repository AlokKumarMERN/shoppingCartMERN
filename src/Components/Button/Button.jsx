import React from "react";
import "./Button.css"
// import { useCounter } from "../../CounterContext/CounterContext";

function Buttons({act, name}) {
  // const {act} = useCounter();
  // console.log(`act   ${name}`);

  return (
    <div className="p-lg-2 m-1">

      {name === act ? (
        <button type="button" className="btnStyle1">{name}</button>
      ) : (
        <button type="button" className="btnStyle2">{name}</button>
      )}
    </div>
  );
}

export default Buttons;
