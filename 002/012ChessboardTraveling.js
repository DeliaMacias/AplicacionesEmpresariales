function ChessboardTraveling(str) { 
    str = str.split('');
    let a = parseInt(str[1]);
    let b = parseInt(str[3]);
    let x = parseInt(str[6]);
    let y = parseInt(str[8]);
    let options = 0
    
    return options = fatorial((x-a) + (y-b)) / (fatorial(x-a) * fatorial(y-b)); 
         
}
function fatorial(num) { 

    if(num === 0 || num === 1)
        return 1;
    else
        return num * fatorial(num -1);   
}
   
// keep this function call here 
console.log(ChessboardTraveling("(1 1)(3 3)"));
