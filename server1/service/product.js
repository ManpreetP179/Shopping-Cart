const productDAO = require('../dao/product');

class ProductService {
  getUser(id) {
    return productDAO.findById(id);
  }
  getAll() {
    return productDAO.index(id);
  }
}

module.exports = new UserService();
