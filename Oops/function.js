function Product(n, p) {
  // data members can be added here
  this.name = n;
  this.price = p;

  this.display = function () {
    // behavior methods for the product(members)
    console.log(this.name, this.price);
  };
}
const p1 = new Product('iPhone', 999);
console.log(p1);
p1.display();

const p3 = new Product('iPad', 799);
console.log(p3);
p3.display();

//const p2 = Product('MacBook', 1999);
//console.log(p2); // undefined, because 'this' is not bound to the instance



