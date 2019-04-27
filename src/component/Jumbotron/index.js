import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Can you remember?</h1>
        <p className="lead">
          Click on each icon only once. How many far can you get before making a
          mistake?
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
