const User = require('../model/products');

class UserDAO {
  findById(id) {
    return User.query().findById(id)
  }
  searchByEmail(email){
    return User.query().findById(id)
  }
  insertNewUser(body={}){
    return User.query().insert({email:body.email, password:body.password})
  }
}

module.exports = new UserDAO();
