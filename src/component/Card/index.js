import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="clicky-card col-3" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Card;
