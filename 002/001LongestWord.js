function LongestWord(sen) { 

    // code goes here  
    var i,big;
    i=1;
    var cadena = sen.split(" ");
    big = cadena[0];
            while(i < cadena.length){
                  if(big.length < cadena[i].length){
                    big = cadena[i];
                  }
                  
                  i++;
            }
    return big;   
}
  // keep this function call here 
  console.log(LongestWord(" goes Argument here "));       