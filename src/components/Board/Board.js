import React from 'react';
import classes from './Board.module.css';

const board = (props) => {
  const gameBoard = props.currentBoard.map((rows, rowPos) => {
    let row = [];
    //new
    let type = 'white';

    for (let colPos = 0; colPos < rows.length; colPos++) {
      // new
      switch (rows[colPos]) {
        case 2:
          type = 'two';
          break;
        case 4:
          type = 'four';
          break;
        case 8:
          type = 'eight';
          break;
        case 16:
          type = 'sixteen';
          break;
        case 32:
          type = 'thirtytwo';
          break;
        case 64:
          type = 'sixtyfour';
          break;
        case 128:
          type = 'onetwentyeight';
          break;
        case 256:
          type = 'twofiftysix';
          break;
        case 512:
          type = 'fivetwelve';
          break;
        case 1024:
          type = 'tentwentyfour';
          break;
        case 2048:
          type = 'twentyfortyeight';
          break;
        default:
          type = 'white';
          break;
      }
      row.push(
        <div
          className={[classes.Cell, classes[type]].join(' ')}
          key={rowPos + ',' + colPos}>
          {rows[colPos]}
        </div>
      );
    }
    return (
      <div className={classes.Row} key={rows + rowPos}>
        {row}
      </div>
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {gameBoard}
    </div>
  );
};

export default board;
