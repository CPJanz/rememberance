import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <ul className="nav w-100">
        <li className="navbar-brand mr-auto">REMEMBERANCE</li>

        {props.gameStatus === "Waiting" ? (
          <li className="navbar-brand mx-auto">Pick A Card</li>
        ) : props.gameStatus === "Running" ? (
          <li className="navbar-brand mx-auto correct">Correct Answer</li>
        ) : props.gameStatus === "Lost" ? (
          <li className="navbar-brand mx-auto incorrect">Incorrect Answer</li>
        ) : (
          <li className="navbar-brand mx-auto correct">You Win!</li>
        )}

        <li className="navbar-brand ml-auto">
          Score: {props.currentScore} | High Score {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
