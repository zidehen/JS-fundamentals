const Candy = require('./candy')
class ShoppingBasket {
  
  constructor() {
    this.totalPrice = 0
    this.items = []
  } 

  getTotalPrice() {
    return this.totalPrice;
  }

  addItem(candy) {
    return this.items.push(candy);

  }
}

module.exports = ShoppingBasket;

const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());
console.log(basket.addItem('Mars'));
console.log(basket.items)