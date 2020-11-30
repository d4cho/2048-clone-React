import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      <div className={classes.Text}>
        <h1>You won! Congrats</h1>
        <div>click NEW GAME</div>
      </div>
    </div>
  ) : props.showLost ? (
    <div className={classes.Backdrop} onClick={props.clicked}>
      <div className={classes.Text}>
        <h1>You lost!</h1>
        <div>click NEW GAME</div>
      </div>
    </div>
  ) : null;

export default backdrop;
