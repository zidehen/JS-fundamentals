const Candy = require('./candy')
class ShoppingBasket {
  
  constructor() {
    this.items = []
  } 
  
  addItem(candy) {
    this.items.push(candy);
    return `${candy.name} added to basket`;

  }
  getTotalPrice() {
    let totalPrice = 0
    this.items.map((item) => {
      totalPrice += item.price;
    })
    return totalPrice
  }
}

module.exports = ShoppingBasket;

const candy1 = new Candy('Oreo', 3.99)
const candy2 = new Candy('Skittles', 3.99)
const basket = new ShoppingBasket();

console.log(basket.addItem(candy1));
console.log(basket.addItem(candy2));
console.log(basket.getTotalPrice());
