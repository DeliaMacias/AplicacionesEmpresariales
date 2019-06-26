function PentagonalNumber(num) { 
    var pent= new Array(num+1);
    pent[1]=1;
    for(let i=2; i<num+1; i++){
        pent[i]=pent[i-1]+5*(i-1);
    }
  // code goes here  
  return pent[num]; 
}
   
// keep this function call here 
console.log(PentagonalNumber(2));