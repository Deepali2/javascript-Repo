const flatArr = (arr, results = []) => {
  for (let ele of arr) {
    if (Array.isArray(ele)) flatArr(ele, results);
    else results.push(ele);
  }
  return results;
};

console.log(flatArr(myArray));
