const User = require('./user')

class UserBase {

  constructor (users) {
    this.users = users
  }
    
  count () {
    return this.users.length;
    }
    
  getNames () {
    return this.users.map(user => {
        return user.name;
    });
    }
    
    getIntroductions () {
        return this.users.map(user => {
            return user.getIntroduction();
        });
    }
    
      }
      module.exports = UserBase;