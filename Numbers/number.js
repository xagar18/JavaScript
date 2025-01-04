// parse Number

console.log(parseInt('123px')); // 123
console.log(parseInt('px12345')); // NaN
console.log(parseInt("123px45px")); // 123

// parseFloat

console.log(parseFloat('123.45px')); // 123.45
console.log(parseFloat('px123.45')); // NaN
console.log(parseFloat("123.45px45.67px")); // 123.45
