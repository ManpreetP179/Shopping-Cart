const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const product = require('./products');
    const user = require('./users');
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'products.user_id'
        },
      },
      reviewes: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'review.user_id'
        },
      }
    };
  }
}

module.exports = User;