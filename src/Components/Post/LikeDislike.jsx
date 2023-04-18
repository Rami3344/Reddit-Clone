import React, { useState, useEffect } from "react";

function LikeDislike(props) {
  const [color, setColor] = useState("white");
  function turnGreen() {
    if (color === "white" || color === "red") {
      setColor("green");
      document.getElementById("btnUp").style.color = "green";
      document.getElementById("num").style.color = "green";
      document.getElementById("btnDown").style.color = "white";
    }
  }
  function turnRed() {
    if (color === "green" || color === "white") {
      setColor("red");
      document.getElementById("btnUp").style.color = "white";
      document.getElementById("btnDown").style.color = "red";
      document.getElementById("num").style.color = "red";
    }
  }
  return (
    <div className="like-dis">
      <button id="btnUp" onClick={turnGreen}>
        ⬆
      </button>
      <span id="num">{props.upDown}</span>
      <button id="btnDown" onClick={turnRed}>
        ⬇
      </button>
    </div>
  );
}

export default LikeDislike;
