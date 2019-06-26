function FirstReverse(str) { 

    // code goes here 
    var cad,c;
    c= "";
    
    for(let i = str.length-1; i >= 0; i--){ 
        cad = str.charAt(i);
        c += cad;
    }
    return c;

  }
     
  // keep this function call here 
console.log(FirstReverse("hola mundo"));                            
  