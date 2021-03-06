import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      <div className={classes.Text}>
        <h1>You won! Congrats!</h1>
        <button className={classes.Button} onClick={props.newGameClicked}>
          Play again
        </button>
      </div>
    </div>
  ) : props.showLost ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      <div className={classes.Text}>
        <h1>Game over!</h1>
        <button className={classes.Button} onClick={props.newGameClicked}>
          Try again
        </button>
      </div>
    </div>
  ) : null;

export default backdrop;
