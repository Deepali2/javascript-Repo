//generate prime numbers till the given number

let primes = [2, 3, 5];

//helper function to do binary search
const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length -1; 
  let mid = 0; 
  while(left <= right) {
    mid = left + Math.floor((right - left)/2);
    if (target === array[mid]) return array.slice(0, mid + 1);
    if ((target < array[mid] && target > array[mid - 1]))return array.slice(0, mid);
    if ((target > array[mid] && target < array[mid + 1]))return array.slice(0, mid + 1);
    if (target < array[mid]) right = mid - 1;
    if (target > array[mid]) left = mid + 1;
  }
  return array.slice(0, mid);
};

//main function
const generatePrimesTillN = (n) => { 
  n = Math.floor(n);
  if (n < 1) n = -n;
  if (n === 0) return 'Invalid Number. Please give a positive whole number greater than or equal to 2';  
  else if (n === 1) return ' 1 is neither prime nor composite since it has only one factor which is 1';
  else if (n >= 2 && n <= primes[primes.length - 1]) {
    return binarySearch(primes, n);    
  } else {
    //number given is greater than the last number in the primes array    
    let numberToCheck = primes[primes.length - 1] + 2;   
    console.log(numberToCheck);

    //helper function to check if number is prime
    const checkPrime = (number) => {
      if (number %2 === 0) return false;
      let sqroot = Math.floor(Math.sqrt(number));
      for (let i = 1; i < primes.length; i++) {
        if (primes[i] > sqroot) return true;
        else if (number % primes[i] === 0) return false;
      }
    };
  console.log(numberToCheck);
  console.log(n);
    while(numberToCheck <= n) {   
      if (checkPrime(numberToCheck)) primes.push(numberToCheck);           
      numberToCheck = numberToCheck + 2;
    }    
    return primes;
  }  
};

console.log(generatePrimesTillN(6.23));

console.log(primes)


