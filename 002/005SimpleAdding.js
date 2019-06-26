function SimpleAdding(num) { 
    while(num>=1 && num<=100){
        // code goes here 
        var tot=0;
        for(let i =1;i <= num; i++){
            tot +=  + i;
        }   
        return tot;
    }
    return "Numero invalido"

    
  }
     
  // keep this function call here 
  console.log(SimpleAdding(100));                            
  
  
    