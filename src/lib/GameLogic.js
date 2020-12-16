export function moveRight(arr) {
  const board = deepCopier(arr);
  for (let row = 0; row < board.length; row++) {
    board[row] = accumulator(board[row]);
  }
  return board;
}

export function moveLeft(arr) {
  const board = deepCopier(arr);
  for (let row = 0; row < board.length; row++) {
    let reversed = board[row].reverse();
    let reversedRow = accumulator(reversed);
    board[row] = reversedRow.reverse();
  }
  return board;
}

export function moveUp(arr) {
  const board = deepCopier(arr);
  let flipped = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      flipped[col] = board[col][row];
    }
    let flippedReversed = flipped.reverse();
    let reversedRow = accumulator(flippedReversed);
    flipped = reversedRow.reverse();
    for (let col = 0; col < board[row].length; col++) {
      board[col][row] = flipped[col];
    }
  }
  return board;
}

export function moveDown(arr) {
  const board = deepCopier(arr);
  let flipped = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      flipped[col] = board[col][row];
    }
    let accumulatedRow = accumulator(flipped);
    for (let col = 0; col < board[row].length; col++) {
      board[col][row] = accumulatedRow[col];
    }
  }
  return board;
}

function accumulator(arr) {
  let numRow = arr.filter((number) => number > 1);
  let nullRow = [];
  for (let i = 0; i < arr.length - numRow.length; i++) {
    nullRow.push(null);
  }
  let joinedRow = nullRow.concat(numRow);

  //check if adjacent numbers are equal and add
  for (let col = 3; col > -1; col--) {
    if (joinedRow[col] !== null && joinedRow[col - 1] === joinedRow[col]) {
      joinedRow[col] += joinedRow[col - 1];
      if (col >= 2 && joinedRow[col - 2] !== null) {
        joinedRow[col - 1] = joinedRow[col - 2];
        if (col >= 3 && joinedRow[col - 3] !== null) {
          joinedRow[col - 2] = joinedRow[col - 3];
          joinedRow[col - 3] = null;
        } else {
          joinedRow[col - 2] = null;
        }
      } else {
        joinedRow[col - 1] = null;
      }
    }
  }
  return joinedRow;
}

export function areTheyEqual(arr1, arr2) {
  for (let row = 0; row < arr1.length; row++) {
    for (let col = 0; col < arr1[row].length; col++) {
      if (arr1[row][col] !== arr2[row][col]) {
        return true;
      }
    }
  }
  return false;
}

export function randomScoreAccumulator(arr1, arr2, num) {
  let score = num;
  if (areTheyEqual(arr1, arr2)) {
    score = num + Math.floor(Math.random() * Math.floor(50));
  }
  return score;
}

export function winCondition(arr) {
  let win = false;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 2048) {
        win = true;
      }
    }
  }
  return win;
}

export function deepCopier(arr) {
  let copiedArr = [];
  for (let i = 0; i < arr.length; i++) {
    copiedArr.push([...arr[i]]);
  }
  return copiedArr;
}

export function isGameOver(arr) {
  let copiedArr = deepCopier(arr);
  for (let row = 0; row < copiedArr.length; row++) {
    for (let col = 0; col < copiedArr[row].length; col++) {
      if (visitEachItem(row, col, arr)) {
        return false;
      }
    }
  }
  return true;
}

function visitEachItem(row, col, arr) {
  const maxSize = arr.length - 1;
  // row + 1, col
  // row, col +1

  // last column
  // row + 1, col

  // last row
  // row, col +1
  const currentValue = arr[row][col];
  let areTheyEqual = false;

  if (col < maxSize) {
    areTheyEqual = areTheyEqual || currentValue === arr[row][col + 1];
  }

  if (row < maxSize) {
    areTheyEqual = areTheyEqual || currentValue === arr[row + 1][col];
  }
  return areTheyEqual;
}
