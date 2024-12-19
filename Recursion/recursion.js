function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    num =  num * factorial(num - 1);
    return num
  }
}
const factres = factorial(5);
console.log(factres);


