function VowelSquare(strArr) { 

    // code goes here  
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (strArr.length < 2 || strArr[0].length < 2) {
        return 'not found';
    }
    
    for (let i = 0; i < strArr.length-1; i++) {
        for (let j = 0; j < strArr[0].length-1; j++) {
            if (
                vowels.includes(strArr[i].charAt(j)) && 
                vowels.includes(strArr[i+1].charAt(j)) &&
                vowels.includes(strArr[i].charAt(j+1)) &&
                vowels.includes(strArr[i+1].charAt(j+1)) 
            ) {return i + '-' + j}
        }
    }

    return 'not found'; 
           
}

console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));