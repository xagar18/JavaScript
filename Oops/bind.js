const player = {
  firName: 'Virat',
  lastName: 'Kohli',
  Number: 18,
  canBowl: false,
  getDetails: function () {
    return `${this.firName} ${this.lastName} is a cricketer with jersey number ${this.Number}. Can bowl: ${this.canBowl}`;
  },
};

const obj = function () {
  console.log(this.getDetails());
};
const x = obj.bind(player); // Outputs: Virat Kohli is a cricketer with jersey number 18. Can bowl: false
// Explanation: The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value (in this case, `player`).
// The `getDetails` method of the `player` object is then called within the context of the `obj` function, allowing it to access the properties of `player`.
// Note: The `bind` method does not call the function immediately; it returns a new function that can be called later.

x();
