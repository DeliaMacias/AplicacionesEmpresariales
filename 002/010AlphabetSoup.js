function AlphabetSoup(str) { 

    var cad = str.split(""),alf = cad.sort();
    
     return alf.join("");
            
   }
   // keep this function call here 
  console.log( AlphabetSoup("coderbyte"));    