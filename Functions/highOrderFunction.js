//Passing func inside function(higher order function)
function printHello(InsideFun) {
  InsideFun(1, 2);
}
function InsideFun(a, b) {
  console.log(a + b);
}
printHello(InsideFun);

//alternative
function printHello(InsideFun, a, b) {
  InsideFun(a, b);
}
function InsideFun(a, b) {
  console.log(a + b);
}
printHello(InsideFun, 3, 4);

//example 1
function mainFun(childFun) {
  childFun("Sagar");
}
function childFun(name) {
  console.log(`My name is ${name}`);
}
mainFun(childFun);

//example 2
function newMain(newChild, name) {
  newChild(name);
}
function newChild(name) {
  console.log(`My Fav Subject is ${name}`);
}
newMain(newChild, "JavaScript");
