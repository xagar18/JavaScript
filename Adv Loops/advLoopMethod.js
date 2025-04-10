let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrbig = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    isMarried: false,
  },
  {
    name: "Jane Smith",
    age: 25,
    occupation: "Graphic Designer",
    isMarried: true,
  },
  {
    name: "Sam Johnson",
    age: 35,
    occupation: "Project Manager",
    isMarried: true,
  },
  {
    name: "Emily Davis",
    age: 28,
    occupation: "Marketing Specialist",
    isMarried: false,
  },
  {
    name: "Michael Brown",
    age: 40,
    occupation: "Data Analyst",
    isMarried: true,
  },
];
const obj = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  isMarried: false,
};

//Gives value of arrays
// arr.forEach((elem) => console.log(elem));

//map in array => returns whole array
let newArr = arr.map((i) => {
  return i * i;
});
// console.log(newArr);

//reduce to calculate inside array
let newarrred = arr.reduce((acc, curr) => {
  return acc + curr;
});
// console.log(newarrred);

let compare = arr.reduce((acc, curr) => {
  return Math.max(acc, curr);
});
// console.log(compare);

//filter in array - The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.

let filterarr = arr.filter((n) => n >= 5);
// console.log(filterarr);

//filter in array (object)

let filterbigarr = arrbig.filter((o) => o.age > 35);
// console.log(filterbigarr);

//map in object
// let mapobj = obj.map(() => {

// })

//reduce in object
const people = {
  person1: {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer",
    isMarried: false,
  },
  person2: {
    name: "Jane Smith",
    age: 25,
    occupation: "Graphic Designer",
    isMarried: true,
  },
  person3: {
    name: "Sam Johnson",
    age: 35,
    occupation: "Project Manager",
    isMarried: true,
  },
  person4: {
    name: "Emily Davis",
    age: 28,
    occupation: "Marketing Specialist",
    isMarried: false,
  },
  person5: {
    name: "Michael Brown",
    age: 40,
    occupation: "Data Analyst",
    isMarried: true,
  },
};

const totalAge = Object.values(people).reduce(
  (acc, person) => acc + person.age,
  0
);

// console.log(totalAge);

//console.log(Object.values(people));
// allows us to convert the values of an object into an array. This is particularly useful when we want to perform array-specific operations on the values of the object.

const arrobj = [
  { name: "John Doe", age: 30, occupation: "Software Developer" },
  { name: "Jane Smith", age: 25, occupation: "Graphic Designer" },
  { name: "Sam Johnson", age: 35, occupation: "Project Manager" },
  { name: "Emily Davis", age: 28, occupation: "Marketing Specialist" },
  { name: "Michael Brown", age: 40, occupation: "Data Analyst" },
];
console.log(arrobj[0].age);



