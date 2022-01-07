const ShoppingBasket = require('./shopping-basket')
const Candy = require('./candy')

describe('ShoppingBasket class', () => {

  it('returns the total price of basket', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('adds items to basket', () => {
    const candyDouble = { name: 'Haribo', price: 1.99 };
    const basket = new ShoppingBasket();
    basket.items = []
    basket.addItem(candyDouble);
    expect(basket.items[0].name).toEqual('Haribo');
  });

})


