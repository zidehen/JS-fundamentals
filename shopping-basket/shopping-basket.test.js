const ShoppingBasket = require('./shopping-basket')
const Candy = require('./candy')

describe('ShoppingBasket class', () => {

  const basket = new ShoppingBasket();
  let candyDouble1 = { name: 'Haribo', price: 1.99 };
  let candyDouble2 = new Candy('Skittles', 2.99)

  it('returns price of 0 when basket empty', () => {
    expect(basket.getTotalPrice()).toEqual(0);
  });
  
  it('adds items to basket', () => {
    basket.items = []
    basket.addItem(candyDouble1);
    expect(basket.items[0].name).toEqual('Haribo');
  });

  it('returns the total price of all items in basket', () => {
    basket.items = []
    basket.addItem(candyDouble1);
    basket.addItem(candyDouble2);
    expect(basket.getTotalPrice()).toEqual(4.98);
  });

  

})


