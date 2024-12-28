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