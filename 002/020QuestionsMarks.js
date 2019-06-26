function QuestionsMarks(str) { 

    // code goes here  
    let arr = str.match(/[0-9]\?{1,}\D{1,}.[0-9]/g);
    
    if(arr === null){
        return 'false';
    }
    
    let output = 'false';
    
    for(let i = 0; i < arr.length; i++){
        
        let numArr = arr[i].match(/[0-9]/g);
        
        if(Number(numArr[0]) + Number(numArr[1]) === 10){
            output = 'true';
            break;
        }
    }
    
    return output;
           
  }
     
  // keep this function call here 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));