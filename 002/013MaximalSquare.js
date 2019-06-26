function MaximalSquare(strArr) { 
    const matrix = strArr.map(it => it.split(""))
    const board = Array.from({ length : matrix.length }).map(() => [])
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i === 0 || j === 0) {
                board[i][j] = matrix[i][j]
            } else {
                if(matrix[i][j] == 1) {
                    board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1
                } else {
                    board[i][j] = 0
                }
                
            }
        }
    }
  // code goes here  
  return Math.pow(Math.max(...board.reduce((r, row) => r.concat(row), [])), 2); 
}
   
// keep this function call here 
console.log(MaximalSquare(["0111", "1111", "1111", "1111"]));