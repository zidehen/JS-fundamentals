const User = require('./user')

describe('User class', () => {
    it('creates a new user account', () => {
      expect(new User).toBeInstanceOf(User);
    })
  
    it('get name from user', () => {
      const user = new User('Zoe')
      expect(user.getName()).toBe('Zoe');
    });

    it('get introduction from user', () => {
      const user = new User('Zoe')
      expect(user.getIntroduction()).toBe('Hi, my name is Zoe');
    });
  })