const { Model } = require('objection');

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get relationMappings() {
    const Product = require('./products');
    const User = require('./products');
    return {
      belongs_to_a_product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'reviews.review_id',
          to: 'product.id',
        },
      },
      belongs_to_a_User: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'reviews.user_id',
          to: 'user.id',
        },
      },
    };
  }
}

module.exports = Review;