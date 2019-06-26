function LetterChanges(str) { 

    // code goes here  
    var chang ="",cad="";
    var voc=["a","e","i","o","u"];
    
   //97-122
   
    for(let i = 0; i < str.length; i++){
        var code = str.charCodeAt(i);
        if(code>96 && code<123){
            cad = String.fromCharCode(str.charCodeAt(i)+1);
        }else{
            cad = String.fromCharCode(str.charCodeAt(i));
        }
        if(voc.includes(cad)){
            cad = cad.toUpperCase();
        }
        chang += cad;   
    }
    return chang;   
  }
  // keep this function call here 
  console.log(LetterChanges("fun times!"));                         
  
  