import React, { Component } from "react";
import "./App.css";
import Gameboard from "./component/Gameboard";
import Jumbotron from "./component/Jumbotron";
import NavBar from "./component/NavBar";

class App extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    gameStatus: "Waiting",
    clickedArray: Array(12).fill(false),
    randomizedArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    imageArray: [
      <i className="fas fa-apple-alt" />,
      <i className="fas fa-ambulance" />,
      <i className="fas fa-angry" />,
      <i className="fas fa-archway" />,
      <i className="fas fa-atlas" />,
      <i className="fas fa-bacon" />,
      <i className="fas fa-band-aid" />,
      <i className="fas fa-baby" />,
      <i className="fas fa-birthday-cake" />,
      <i className="fas fa-bowling-ball" />,
      <i className="fas fa-carrot" />,
      <i className="fas fa-chess-bishop" />
    ]
  };

  handleCardClick = index => {
    const updatedClickedArray = this.state.clickedArray.slice(0);
    //Check clicked card for previously being clicked.
    if (updatedClickedArray[index]) {
      this.setState({ gameStatus: "Lost" });
      this.gameOver();
    } else {
      if (this.state.currentScore < 11) {
        const updatedRandomizedArray = this.state.randomizedArray.slice(0);
        this.shuffleArray(updatedRandomizedArray);
        updatedClickedArray[index] = true;
        this.setState({
          currentScore: this.state.currentScore + 1,
          topScore: Math.max(this.state.currentScore + 1, this.state.topScore),
          clickedArray: updatedClickedArray,
          gameStatus: "Running",
          randomizedArray: updatedRandomizedArray
        });
      } else {
        this.setState({
          currentScore: this.state.currentScore + 1,
          topScore: Math.max(this.state.currentScore + 1, this.state.topScore),
          gameStatus: "Won"
        });
        this.gameOver();
      }
    }
  };

  gameOver() {
    this.setState({
      clickedArray: Array(12).fill(false),
      randomizedArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentScore: 0
    });
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          gameStatus={this.state.gameStatus}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Gameboard
          onClick={this.handleCardClick}
          cards={this.state.imageArray}
          cardsKey={this.state.randomizedArray}
        />
      </div>
    );
  }
}

export default App;
