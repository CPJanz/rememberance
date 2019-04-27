import React from "react";
import Card from "../Card";
import "./style.css";

function Gameboard(props) {
  return (
    <div className="container">
      <div className="row">
        {props.cards.map((element, index) => {
          return (
            <Card key={index} onClick={() => props.onClick(index)}>
              {element}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Gameboard;
