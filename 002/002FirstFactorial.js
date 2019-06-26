function FirstFactorial(num) { 

    // code goes here  
    var n;
    n=1;
    for(let i = 1; i <=num; i++){
        n = n*i; 
    }

    return n; 
           
  }
     
  // keep this function call here 
  console.log(FirstFactorial(8));   