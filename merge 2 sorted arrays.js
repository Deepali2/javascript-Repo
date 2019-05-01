const mergeSortedArrays = (arr1, arr2) => {
  let pointer1Index = 0;
  let pointer2Index = 0;
  let sortedArr = [];

  while(pointer1Index <= arr1.length - 1 || pointer2Index <= arr2.length - 1) {
     if (arr1[pointer1Index] && arr1[pointer1Index] <= arr2[pointer2Index]) {
       sortedArr.push(arr1[pointer1Index]);
       pointer1Index++;
     } else {
       if (arr2[pointer2Index]) {
        sortedArr.push(arr2[pointer2Index]);
        pointer2Index++;
       }      
     }    
  }

  return sortedArr;
};

console.log(mergeSortedArrays([1, 3], [2, 3, 4]));