const { Model } = require('objection');

class Product extends Model {
  static get tableName() {
    return 'products';
  }

  static get relationMappings() {
    const User = require('./users');
    const Review = require('./review');
    return {
      belongs_to_a_writer: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'products.user_id',
          to: 'user.id',
        },
      },
      has_many_reviews: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: 'products.id',
          to: 'reviews.product_id'
        },
      },
    };
  }
}


module.exports = Product;