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
        <button
          onClick={props.clicked}
          style={{
            fontSize: '30px',
            color: 'white',
            backgroundColor: '#8f7a66',
            padding: '15px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default topbar;
