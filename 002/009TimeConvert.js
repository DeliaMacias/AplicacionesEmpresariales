function TimeConvert(num) {
    
    var hr=0,mn=0,time;
    if(num>=60){
        hr = Math.floor(num/60);
        mn = (num-(hr*60));
    }
    else{
        mn = num;
    }
    if(mn<10){
        mn="0"+mn;
    }
    // code goes here  
    return hr +":"+mn; 
           
  }
     
  // keep this function call here 
  console.log(TimeConvert(8));                            
  