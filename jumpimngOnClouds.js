
function jumpingOnClouds(c) {
  //initialize count as 0, index as 0
  let count = 0, index = 0;
  //use a while loop for index <= array length
  while(c.length - 1 - index > 0) {
    console.log(index);
    console.log(count)
       //if next to next element is not a 1 
       if ( c [index + 2] === 0) {
        //increase index by 2
        index += 2;
        //increase count by 1
        count++;
      }      
      //else 
      else if(c[index + 1] === 0){
        //increase index by 1
        index++;
        //increase count by 1
        count++;
      }
      console.log(count)
  }     
  // return the count
  return count;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));