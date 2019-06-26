function LetterCapitalize(str) { 

    // code goes here  
    var array,i;
    array = str.split(" ");
    for(i = 0; i < array.length; i++){
       array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1);
    }
    return array.join(" ");
  
  }
     
  // keep this function call here 
  console.log(LetterCapitalize("la ciudad de mexico"));       