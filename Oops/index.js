// Product class to represent a product in the store
class Product {
  // Constructor to initialize the product
  constructor(n, p) {
    // data members can be added here
    this.name = n;
    this.price = p;
  }
  // behavior methods for the product(members)
  display() {
    console.log(this.name, this.price);
  }
  buyProduct() {
    console.log('Product purchased.');
  }
}

let iphone = new Product('iPhone', 999);
let macbook = new Product('MacBook', 1999);

iphone.display();

// Displaying product details
// console.log(iphone, macbook);
// console.log(typeof iphone);
