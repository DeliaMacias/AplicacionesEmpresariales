function ClosestEnemyII(strArr) { 
    let start = [];
    let enemy = [];
    let size = strArr.length;
    let shortest = Infinity;
    
    for (let i = 0; i < size; i++){
        let arr = strArr[i].split('');
        for (let j = 0; j < arr.length; j++){
            let t = [i,j];
            if (arr[j] == 1) start = t;
            else if (arr[j] == 2) enemy.push(t);
        }
    }
    if (enemy.length === 0) return 0;
    for (let e of enemy){
        let x = Math.abs(start[0] - e[0]);
        let y = Math.abs(start[1] - e[1]);
        if (x > size/2) x = size-x;
        if (y > size/2) y = size-y;
        let d = x+y;
        if (shortest > d) shortest = d;
    }
    return shortest; 
}
   
console.log(ClosestEnemyII(["0000", "2010", "0000", "2002"]));