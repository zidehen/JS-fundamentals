const Candy = require('./candy')

describe('Candy class', () => {
  
    it('returns the name of the candy', () => {
      const candy = new Candy('Haribo', 1.99)
      expect(candy.getName()).toBe('Haribo');
    });

    it('returns the price of the candy', () => {
        const candy = new Candy('Haribo', 1.99)
        expect(candy.getPrice()).toBe(1.99);
      });
})