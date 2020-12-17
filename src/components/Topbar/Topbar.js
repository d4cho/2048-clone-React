import React from 'react';
import classes from './Toolbar.module.css';

const topbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={classes.Title}>2048</div>
        <div className={classes.Intro}>Join the tiles, get to 2048!</div>
        <div className={classes.Intro}>
          Click <strong>New Game</strong> to start
        </div>
      </div>
      <div>
        <div className={classes.ScoreContainer}>
          <div style={{ color: '#eee4da', fontSize: '20px' }}>SCORE</div>
          <div style={{ color: 'white', fontSize: '40px' }}>{props.score}</div>
        </div>
        <button className={classes.NewGame} onClick={props.clicked}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default topbar;
