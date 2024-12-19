// Array Loops

const a = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  50,
];

// a[52] = 50;
// console.log(a[52]);

// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   if(a[i])console.log(`${i + 1} of Array ${element}`);

// }

// arr = [2, 9];
// arr.push(3);
// console.log(arr);

//Return new array
// let newArr = arr.map((i) => i * 2);
// console.log(newArr);

//uses Executes a provided function once for each array element.
// arr.forEach((i) => console.log(i));

//Object Loops

let objData = {
  name: "John Doe",
  age: 27,
  email: "john.doe@example.com",
  city: "Mumbai",
  favoriteColor: "Blue",
  hobby: "Photography",
  jobTitle: "Software Developer",
};

//all
// console.log(Object.keys(objData));
// console.log(Object.values(objData));

//individual
// console.log(objData.age);
// console.log(objData["age"]);

//for in
// for (const k in objData) {
//   const elem = objData[k];
//   console.log(elem);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}
