function outer() {
  counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
const inc = outer();
const exinc = inc();
console.log(exinc);
