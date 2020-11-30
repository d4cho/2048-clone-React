import React from 'react';
import classes from './Toolbar.module.css';

const topbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <button onClick={props.clicked} style={{ fontSize: '50px' }}>
        new game
      </button>
      <div className={classes.Score}>
        <div>score: {props.score}</div>
      </div>
    </div>
  );
};

export default topbar;
