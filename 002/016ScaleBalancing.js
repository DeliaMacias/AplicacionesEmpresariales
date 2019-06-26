function ScaleBalancing(strArr) { 

    // code goes here  
    let newArr = strArr.map(val => {
        return val.replace(/[\[\]]/g, "").split(',').map(val2 => {
          return parseInt(val2, 10);
        }).sort((a, b) => {
          return a - b;
        });
      });

    var scale = newArr[0];
    var weigths = newArr[1];

    for (let i = 0; i < weigths.length; i++) {
        for (let j = i+1; j < weigths.length; j++) {
            if (scale[0]+weigths[i] == scale[1]+weigths[j]){
                return weigths[i] + ',' + weigths[j];
            }
        }
    }

    for (let i = 0; i < weigths.length; i++) {
        for (let j = i+1; j < weigths.length; j++) {
            if (scale[0] == scale[1]+weigths[i]+weigths[j]){
                return weigths[i] + ',' + weigths[j];
            }
        }
    }

    for (let i = 0; i < weigths.length; i++) {
        for (let j = i+1; j < weigths.length; j++) {
            if (scale[0]+weigths[i]+weigths[j] == scale[1]){
                return weigths[i] + ',' + weigths[j];
            }
        }
    }

    for (let i = 0; i < weigths.length; i++) {
        if (scale[0] == scale[i]+weigths[i]){
            return weigths[i]+'';
        }
    }

    for (let i = 0; i < weigths.length; i++) {
        if (scale[1] == scale[0]+weigths[i]){
            return weigths[i]+'';
        }
    }

    return 'not possible'; 
           
  }

  console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"]));