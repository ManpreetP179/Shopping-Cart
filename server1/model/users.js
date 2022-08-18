const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const product = require('./products');
    const user = require('./users');
    
  }
}

module.exports = User;