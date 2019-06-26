function KaprekarsConstant(num) { 
    var count = 0;
    var desc, asc, arr, result;
    
    function subtract(result) {
        count++;
        desc = Number(result.toString().split("").sort(function(a,b){return b-a}).join(""));
        asc = Number(result.toString().split("").sort(function(a,b){return a-b}).join(""));
        result = desc - asc;
        
        if (result === 6174) {
            return count;
        }
        arr = result.toString().split("");
        if (arr.length < 4) {
          arr.push("0");
        }
        result = Number(arr.join(""));
        return subtract(result);
    }
    return subtract(num);
  }
     
  // keep this function call here 
  console.log(KaprekarsConstant(2111));