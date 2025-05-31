var obj = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}
// obj.greet(); // Outputs: Hello, my name is John

var obj1 = {
  name: 'John',
  age: 30,
  greet1: () => {
    console.log(this);
    // 'this' refers to the global context, not the object
    console.log('Hello, my name is ' + this.name);
  },
};
obj1.greet1();
// Outputs: Hello, my name is undefined
// Explanation: In arrow functions, 'this' does not refer to the object that calls the function,
// but to the context in which the arrow function was defined.

var obj2 = {
  name: 'John',
  age: 30,
  greet2: function () {
    console.log(this);
    // 'this' refers to the object itself
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
    }, 100);
  },
};
obj2.greet2(); 
// Outputs: Hello, my name is John
// Explanation: In this case, the arrow function captures the 'this' value from the surrounding context,

var obj3 = {
  name: 'John',
  age: 30,
  greet3: () => {
    console.log(this);
    // 'this' refers to the global context, not the object
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
    }, 100);
  },
};
obj3.greet3(); 
// Outputs: Hello, my name is undefined
// Explanation: Here, the arrow function does not have its own 'this', so it refers to the global context, 
// which does not have a 'name' property, resulting in 'undefined'.
// In this case, the arrow function captures the 'this' value from the surrounding context,
// which is the global context, and since 'this.name' is not defined in the global context, it results in 'undefined'.
// In contrast, the regular function captures 'this' from the object context, allowing it to access 'this.name'.
