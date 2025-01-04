//this keyword
//refers to the context in which a function is executed. The value of this is determined by how a function is called, not where it's defined.

//console.log(this); // In a browser, this would log the window object

function showContext() {
  console.log(this);
}
//showContext(); // Logs: window (in browser)

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
//person.greet(); // Logs: Hello, Alice

//arrow function
const p = {
  name: "Alice",
  greet: function () {
    const inner = () => {
      console.log("Hello, " + this.name);
    };
    inner();
  },
};
//p.greet(); // Logs: Hello, Alice

function showName() {
  console.log(this.name);
}

const p1 = { name: "Alice" };
const p2 = { name: "Bob" };

//showName.call(p1); // Logs: Alice
//showName.call(p2); // Logs: Bob

function showName() {
  console.log(this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

const boundShowName = showName.bind(person1);
boundShowName(); // Logs: Alice
