import React, { Component } from "react";
import "./Game.css";

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

export class Game extends Component {
  render() {
    return (
      <div>
        <div className="Board" style={{ width: WIDTH,
           height: HEIGHT, backgroundSize:`${CELL_SIZE}px ${CELL_SIZE}px` }} />
      </div>
    );
  }
}

export default Game;
