
const obj = {
  "123": { type: "dir", name: "blah" },
  "345": { type: "file", name: "blah2" },
  "456": { type: "dir", name: "blah3" },
  "567": { type: "file", name: "blah4" },
  "678": { type: "dir", name: "blah5" },
  "789": { type: "subdir", name: "blah6" },
  "890": { type: "file", name: "blah7" },
  "901": { type: "dir", name: "blah8" },
  "012": { type: "subdir", name: "blah9" },
} ; 
 // {file:3,dir:4, subdir:2}   

const countTypes = () => {

  const values = Object.values(obj);

  let result = {};
  const check = (ele, result) => {
    for (let key in result) {
      if (key === ele.type) return true
    }
    return false;
  }

  for (let ele of values) {
    result[ele.type] = result[ele.type] || [];
    result[ele.type].push(ele) ;
 }
   return result;
};

console.log(countTypes(obj));



 



