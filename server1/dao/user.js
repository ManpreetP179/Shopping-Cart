const User = require('../model/users');

class UserDAO {
  findById(id) {
    return User.query().findById(id).withGraphFetched('products');
  }
}

module.exports = new UserDAO();
