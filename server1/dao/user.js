const User = require('../model/users');

class UserDAO {
  findById(id) {
    return User.query().findById(id)
  }
  searchByEmail(body={}){
    return  User.query().findOne({email:body.email})
  }
  insertNewUser(body={}){
    return User.query().insert({email:body.email, password:body.password})
  }
  insertSignIn(body={}){
    return User.query().findOne({email:body.email, password:body.password})
  }
}

module.exports = new UserDAO();
