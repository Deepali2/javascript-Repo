//Return the largest product of any contiguus sub-array of a list. Can assume array is non empty

const maxProductContigouosArray = (arr) => {
  //initialize product to 0
  let product = 0;  
  //iterate over the array
  for (let i = 0; i < arr.length - 1; i++) {
    //make a slice of the array from i
    let arrSlice = arr.slice(i);    
    let length = arrSlice.length;
    while (length > 0) {
      let arrSliceProduct = arrSlice.reduce((a, b) => a * b);
      if (arrSliceProduct > product) product = arrSliceProduct;
      arrSlice = arrSlice.slice(0, length - 1); 
      length = arrSlice.length;   
    }
  }
  return product;
};

let array = [.5, 3, -2];
console.log(maxProductContigouosArray(array));