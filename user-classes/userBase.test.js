const User = require('./user')
const UserBase = require('./userBase')

describe('UserBase class', () => {
  it('returns length of array', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
      ];
    const userBase = new UserBase(users);  
    expect(userBase.count()).toEqual(3);
  });
  
  it('returns individual names', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users);  
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });
  
  it('returns introduction with user names', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users);  
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  });
});