const ShoppingBasket = require('./shopping-basket')

describe('ShoppingBasket class', () => {

    it('returns the total price of basket', () => {
      const basket = new ShoppingBasket()
      expect(basket.getTotalPrice()).toEqual(0);
    });

})