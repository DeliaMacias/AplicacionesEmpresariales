function SimpleSymbols(str) { 
    var cad = str.split("");
    var abc =["a","b","c","d","e","f","g","h","i","j"
            ,"k","l","m","n","ñ","o","p","q","r","s",
                "t","u","v","w","x","y","z"];
    var inter = cad.filter(x => abc.includes(x));
    if(str==""){
        return false;
    }
    if(!cad.includes("+")|| !cad.includes("=")){
        return false;
    }
    if(inter<1){
        return false;
    }
    for(let i= 0; i<str.length; i++){
            if(abc.includes(str[i])){
                if(str[i-1]!="+" || str[i+1]!= "+"){
                    return false;
                }
            }  
    }
    return true;     
}
  // keep this function call here 
  console.log(SimpleSymbols("=++34*+b+*+b+"));                            
  
  
    