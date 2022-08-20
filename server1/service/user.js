const userDAO = require('../dao/user');

class UserService {
  getUser(id) {
    return userDAO.findById(id);
  }
  findByEmail(body ={}){
    return userDAO.searchByEmail(body)
  }
  signUp(body ={})
  {
    return userDAO.insertNewUser(body)
   
  }
  signIn(body ={})
  {
     return userDAO.insertSignIn(body)
  }

}

module.exports = new UserService();
