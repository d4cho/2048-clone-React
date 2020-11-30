import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary/Auxiliary';
import Topbar from '../components/Topbar/Topbar';
import Board from '../components/Board/Board';
import {
  moveRight,
  moveLeft,
  moveUp,
  moveDown,
  areTheyEqual,
  randomScoreAccumulator,
  winCondition,
  deepCopier,
  isGameOver
} from '../lib/GameLogic';
import Backdrop from '../components/Backdrop/Backdrop';
import ArrowKeysReact from 'arrow-keys-react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardLayout: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      gameOver: false,
      score: 0,
      win: false
    };

    ArrowKeysReact.config({
      left: () => {
        if (winCondition(this.state.boardLayout)) {
          this.setState({
            win: true
          });
        }
        let board = moveLeft(this.state.boardLayout);
        let newScore = randomScoreAccumulator(
          this.state.boardLayout,
          board,
          this.state.score
        );
        const object = this.numberGenerator(board);
        const updatedBoard = object.board;
        const gameOverUpdate = object.gameOver;

        if (areTheyEqual(this.state.boardLayout, board)) {
          this.setState({
            boardLayout: updatedBoard,
            score: newScore,
            gameOver: gameOverUpdate
          });
        } else {
          this.setState({
            boardLayout: board,
            score: newScore,
            gameOver: gameOverUpdate
          });
        }
      },
      right: () => {
        if (winCondition(this.state.boardLayout)) {
          this.setState({
            win: true
          });
        }

        let board = moveRight(this.state.boardLayout);
        let newScore = randomScoreAccumulator(
          this.state.boardLayout,
          board,
          this.state.score
        );
        const object = this.numberGenerator(board);
        const updatedBoard = object.board;
        const gameOverUpdate = object.gameOver;

        if (areTheyEqual(this.state.boardLayout, board)) {
          this.setState({
            boardLayout: updatedBoard,
            score: newScore,
            gameOver: gameOverUpdate
          });
        } else {
          this.setState({
            boardLayout: board,
            score: newScore,
            gameOver: gameOverUpdate
          });
        }
      },
      up: () => {
        if (winCondition(this.state.boardLayout)) {
          this.setState({
            win: true
          });
        }
        let board = moveUp(this.state.boardLayout);
        let newScore = randomScoreAccumulator(
          this.state.boardLayout,
          board,
          this.state.score
        );
        const object = this.numberGenerator(board);
        const updatedBoard = object.board;
        const gameOverUpdate = object.gameOver;

        if (areTheyEqual(this.state.boardLayout, board)) {
          this.setState({
            boardLayout: updatedBoard,
            score: newScore,
            gameOver: gameOverUpdate
          });
        } else {
          this.setState({
            boardLayout: board,
            score: newScore,
            gameOver: gameOverUpdate
          });
        }
      },
      down: () => {
        if (winCondition(this.state.boardLayout)) {
          this.setState({
            win: true
          });
        }
        let board = moveDown(this.state.boardLayout);
        let newScore = randomScoreAccumulator(
          this.state.boardLayout,
          board,
          this.state.score
        );
        const object = this.numberGenerator(board);
        const updatedBoard = object.board;
        const gameOverUpdate = object.gameOver;

        if (areTheyEqual(this.state.boardLayout, board)) {
          this.setState({
            boardLayout: updatedBoard,
            score: newScore,
            gameOver: gameOverUpdate
          });
        } else {
          this.setState({
            boardLayout: board,
            score: newScore,
            gameOver: gameOverUpdate
          });
        }
      }
    });
  }

  numberGenerator = (arr) => {
    let object = {
      board: deepCopier(arr),
      gameOver: false
    };

    let randomRowIndex = Math.floor(Math.random() * Math.floor(4));
    let randomColIndex = Math.floor(Math.random() * Math.floor(4));
    let check = true;

    if (
      arr[0].indexOf(null) === -1 &&
      arr[1].indexOf(null) === -1 &&
      arr[2].indexOf(null) === -1 &&
      arr[3].indexOf(null) === -1 &&
      isGameOver(object.board)
    ) {
      object.gameOver = true;
      return object;
    } else {
      while (check) {
        if (object.board[randomRowIndex][randomColIndex] === null) {
          object.board[randomRowIndex][randomColIndex] = 2;
          check = false;
        } else if (
          arr[0].indexOf(null) === -1 &&
          arr[1].indexOf(null) === -1 &&
          arr[2].indexOf(null) === -1 &&
          arr[3].indexOf(null) === -1
        ) {
          object.gameOver = isGameOver(object.board);
          break;
        } else {
          randomRowIndex = Math.floor(Math.random() * Math.floor(4));
          randomColIndex = Math.floor(Math.random() * Math.floor(4));
        }
      }
      return object;
    }
  };

  newGameNumberGenerator = () => {
    let board = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    ];
    let randomRowIndex = Math.floor(Math.random() * Math.floor(4));
    let randomColIndex = Math.floor(Math.random() * Math.floor(4));
    let check = true;

    while (check) {
      if (board[randomRowIndex][randomColIndex] === null) {
        board[randomRowIndex][randomColIndex] = 2;
        randomRowIndex = Math.floor(Math.random() * Math.floor(4));
        randomColIndex = Math.floor(Math.random() * Math.floor(4));
        board[randomRowIndex][randomColIndex] = 2;
        check = false;
      } else {
        randomRowIndex = Math.floor(Math.random() * Math.floor(4));
        randomColIndex = Math.floor(Math.random() * Math.floor(4));
      }
    }
    return board;
  };

  newGameClickedHandler = () => {
    let updatedBoard = this.newGameNumberGenerator();
    this.setState({
      boardLayout: updatedBoard,
      score: 0,
      win: false
    });
  };

  backdropClickedHandler = () => {
    this.setState({
      win: false,
      gameOver: false
    });
  };

  render() {
    return (
      <Aux>
        <div {...ArrowKeysReact.events} tabIndex='1'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '50px'
            }}>
            2048 clone
          </div>
          <Topbar
            clicked={this.newGameClickedHandler}
            score={this.state.score}
          />
          <Backdrop
            showLost={this.state.gameOver}
            show={this.state.win}
            clicked={this.backdropClickedHandler}
          />
          <Board currentBoard={this.state.boardLayout} />
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
          Click new game to start.
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            padding: '0 24px'
          }}>
          HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the
          same number merge into one when they touch. Add them up to reach 2048!
        </div>
      </Aux>
    );
  }
}

export default Game;
