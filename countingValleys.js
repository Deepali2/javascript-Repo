function countingValleys(n, s) {
  let valleyCount = 0,
      height      = 0,
      seaLevel    = true,
      mountain    = false,
      valley      = false;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    if (seaLevel) {
      if (s[i] === 'U') {
        mountain = true;
        seaLevel = false;
        height++;
      } else {
        if (s[i] === 'D') {
          valley = true;
          seaLevel = false;
          valleyCount++;
          console.log(valleyCount);
          height--;
        }
      }
    } else {
      if (s[i] === 'U') height++;
      if (s[i] === 'D') height--;
      if (height === 0) seaLevel = true;
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));
