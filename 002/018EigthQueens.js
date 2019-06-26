function EightQueens(queens) { 
    
    function parseQueen(queen) {
        var arr = queen.replace(/[\(\)]/g, "").split(",");
        return {
            x: parseInt(arr[0]),
            y: parseInt(arr[1]),
            name: queen
        }
    }

    for (b = 0; b < queens.length; b++) {
        queens[b] = parseQueen(queens[b]);
        for (a = 0; a < b; a++) {
            if (queens[a].x == queens[b].x ||
                queens[a].y == queens[b].y ||
                Math.abs(queens[a].y - queens[b].y) == Math.abs(queens[a].x - queens[b].x)) {
                return queens[a].name;
            }
        }
    }

    return true;
    
}
   
// keep this function call here 
console.log(EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]));

  