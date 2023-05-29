function  giveNumbers (start, end){
    let current = start;
    
    const intervalId = setInterval (() => {
      console.log (current);
      
      if (current === end) {
        clearInterval(intervalId);
      }
      
      current = current + 1;
    }, 1000); 
  }
  
  giveNumbers (-4, 4)
