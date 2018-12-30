const countdown = (num) => {
  const timer = setInterval(function() {
    num--; 
    if (num > 0) {          
      console.log(`Timer: ${num}`);      
    } else {
      console.log('Ring Ring Ring');
      clearInterval(timer);
    }    
  }, 1000);
};

console.log(countdown(3));