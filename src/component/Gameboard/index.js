import React from "react";
import Card from "../Card";
import "./style.css";

function Gameboard(props) {
  return (
    <div className="container">
      <div className="row">
        {props.cardsKey.map((element, index) => {
          return (
            <Card key={element} onClick={() => props.onClick(element)}>
              {props.cards[element]}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Gameboard;
