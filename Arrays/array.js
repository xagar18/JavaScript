// array push
const pusharray = [1, 2, 3, 4, 5];
pusharray.push(6); // [1, 2, 3, 4, 5, 6]
pusharray.push(7, 8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array pop
const poparray = [1, 2, 3, 4, 5];
poparray.pop(); // [1, 2, 3, 4]
poparray.pop(); // [1, 2, 3]

// array shift
const shiftarray = [1, 2, 3, 4, 5];
shiftarray.shift(); // [2, 3, 4, 5]
shiftarray.shift(); // [3, 4, 5]

// array unshift
const unshiftarray = [1, 2, 3, 4, 5];
unshiftarray.unshift(0); // [0, 1, 2, 3, 4, 5]
unshiftarray.unshift(-2, -1, 0); // [-2, -1, 0, 1, 2, 3, 4, 5]

// array slice
const slicearray = [1, 2, 3, 4, 5];
slicearray.slice(0, 2); // [1, 2]
slicearray.slice(2, 4); // [3, 4]

// array splice
const splicearray = [1, 2, 3, 4, 5];
splicearray.splice(2, 0, 6); // [1, 2, 6, 3, 4, 5] // insert 6 at index 2
splicearray.splice(2, 1); // [1, 2, 3, 4, 5] // remove 1 element at index 2 (6)
splicearray.splice(2, 1, 6); // [1, 2, 6, 4, 5] // replace 1 element at index 2 with 6 (3)
splicearray.splice(2, 2); // [1, 2, 5] // remove 2 elements at index 2 (6, 4)

// array concat
const concatarray1 = [1, 2, 3];
const concatarray2 = [4, 5, 6];
concatarray1.concat(concatarray2); // [1, 2, 3, 4, 5, 6]

// array reverse
const reversearray = [1, 2, 3, 4, 5];
reversearray.reverse(); // [5, 4, 3, 2, 1]

// array sort
const sortarray = [5, 3, 1, 4, 2];
sortarray.sort(); // [1, 2, 3, 4, 5]

// array indexOf
const indexOfarray = [1, 2, 3, 4, 5];
indexOfarray.indexOf(3); // 2
indexOfarray.indexOf(6); // -1

// array lastIndexOf
const lastIndexOfarray = [1, 2, 3, 4, 5, 3];
lastIndexOfarray.lastIndexOf(3); // 5
lastIndexOfarray.lastIndexOf(6); // -1

// array includes
const includesarray = [1, 2, 3, 4, 5];
includesarray.includes(3); // true
includesarray.includes(6); // false

// array find
const findarray = [1, 2, 3, 4, 5];
findarray.find((x) => {
  return x > 2;
}); // 3 // find first element that is greater than 2
findarray.find((x) => {
  return x > 5;
}); // undefined

// array findIndex
const findIndexarray = [1, 2, 3, 4, 5];
findIndexarray.findIndex((x) => {
  return x > 2;
}); // 2 // find index of first element that is greater than 2
findIndexarray.findIndex((x) => {
  return x > 5;
}); // -1

// array filter
const filterarray = [1, 2, 3, 4, 5];
filterarray.filter((x) => {
  return x > 2;
}); // [3, 4, 5] // filter elements that are greater than 2
filterarray.filter((x) => {
  return x > 5;
}); // []

// array map
const maparray = [1, 2, 3, 4, 5];
maparray.map((x) => {
  return x * 2;
}); // [2, 4, 6, 8, 10] // double each element
maparray.map((x) => {
  return x * x;
}); // [1, 4, 9, 16, 25] // square each element

// array reduce
const reducearray = [1, 2, 3, 4, 5];
reducearray.reduce((acc, x) => {
  return acc + x;
}, 0); // 15 // sum of all elements
reducearray.reduce((acc, x) => {
  return acc * x;
}, 1); // 120 // product of all elements

// array every
const everyarray = [1, 2, 3, 4, 5];
everyarray.every((x) => {
  return x > 0;
}); // true // all elements are greater than 0
everyarray.every((x) => {
  return x > 2;
}); // false // not all elements are greater than 2

// array some
const somearray = [1, 2, 3, 4, 5];
somearray.some((x) => {
  return x > 2;
}); // true // some elements are greater than 2
somearray.some((x) => {
  return x > 5;
}); // false // no elements are greater than 5

// array forEach
const forEacharray = [1, 2, 3, 4, 5];
forEacharray.forEach((x) => {
  console.log(x);
}); // 1 2 3 4 5

// array join
const joinarray = [1, 2, 3, 4, 5];
joinarray.join(); // "1,2,3,4,5"
joinarray.join(""); // "12345"
joinarray.join("-"); // "1-2-3-4-5"

// array toString
const toStringarray = [1, 2, 3, 4, 5];
toStringarray.toString(); // "1,2,3,4,5"

// array fill
const fillarray = [1, 2, 3, 4, 5];
fillarray.fill(0); // [0, 0, 0, 0, 0]
fillarray.fill(0, 2); // [1, 2, 0, 0, 0] // fill with 0 starting from index 2
fillarray.fill(0, 2, 4); // [1, 2, 0, 0, 5] // fill with 0 from index 2 to 4
