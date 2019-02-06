function checkIfWin(board){
  let winDiagonalTopToBottom = board[0] && board[0] === board[4] && board[0] === board[8],
      winDiagonalBottomToTop = board[6] && board[6] === board[4] && board[6] === board[2],
      winRowOne = board[0] && board[0] === board[1] && board[0] === board[2],
      winRowTwo = board[3] && board[3] === board[4] && board[3] === board[5],
      winRowThree = board[6] && board[6] === board[7] && board[6] === board[8],
      winColOne = board[0] && board[0] === board[3] && board[0] === board[6],
      winColTwo = board[1] && board[1] === board[4] && board[1] === board[7],
      winColThree = board[2] && board[2] === board[5] && board[2] === board[8];
  if (winDiagonalTopToBottom || winDiagonalBottomToTop || winRowOne || winRowTwo || winRowThree || winColOne || winColTwo || winColThree){
    return true;
  } 
 }


export default checkIfWin;