import React, { useState } from "react";
import "./Button";

function Buttons({ name, act }) {
//   console.log(act, name);
  return (
    <div className="p-lg-2 m-1">

      {name == act ? (
        <button type="button" style={{backgroundColor: 'red'}}>{name}</button>
      ) : (
        <button type="button" style={{backgroundColor: 'yellow'}}>{name}</button>
      )}
    </div>
  );
}

export default Buttons;
