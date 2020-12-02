import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
  if (props.value == "Rock") {
    return (
      <button className="square" onClick={props.onClick}>
        {<img src = 'https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/stone.png' width="100" height="100"/>}
      </button>
    );
  } else if (props.value == "Paper") {
     return (
      <button className="square" onClick={props.onClick}>
        {<img src = 'https://hacktoberfest.lingonsaft.com/images/paper.png' width="100" height="100"/>}
      </button>
     );
  } else if (props.value == "Scissors") {
    return (
      <button className="square" onClick={props.onClick}>
        {<img src = 'https://hacktoberfest.lingonsaft.com/images/scissors.png' width="100" height="100"/>}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 0,
      computer: 0,
      results: ["nothing","nothing"],
    };
  }

  handleClick(i) {
    const moves = ["Rock", "Paper", "Scissors"];
    const move = moves[Math.floor(Math.random() * Math.floor(3))];
    const result = i + move;
    
    if (i == move) {
      this.setState({results: [i,move]})
    }else if ((result == 'RockScissors' || result =='ScissorsPaper' || result == 'PaperRock')) { // if it's the players turn
      this.setState({
        player: this.state.player+1,
        results: [i,move],
    });
    } else { // if it's the computers turn
      this.setState({
        computer: this.state.computer+1,
        results: [i,move],
      });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    //const status = 'Next player: ' + (this.state.playerIsNext ? 'Player' : 'Computer');

    return (
      <div>
        <div>{"Player score: " + this.state.player}</div>
        <div>{"Computer score: " + this.state.computer}</div>
        <div>{"You played " + this.state.results[0] + ". Computer played " + this.state.results[1] + "."}</div>
        <div className="board-row">
          {this.renderSquare("Rock")}
          {this.renderSquare("Paper")}
          {this.renderSquare("Scissors")}
        </div>
        
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGame : true,
      username       : "",
      password       : ""
    };

    this.enableGamePage  = this.enableGamePage.bind(this);
  }
  
  enableGamePage() {
    this.setState({
      isGamePage : false,
    });
  }
  
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>
            <button onClick={this.enableGamePage} className="loginbutton">Next</button>
          </div>
      </div>
    );
    
    return (
      <div>
        { this.state.isGamePage ? this.gamePage() : null }
      </div>
    );
  }
}

class Game2 extends React.Component {
  render() {
    return (
      <div className="game">
        {"hi"}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
