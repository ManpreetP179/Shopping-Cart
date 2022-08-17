/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', function(table) {
        table.increments('id');
        table.string('rating');
        table.string('body');
        table.string("owner");
        table.integer('user_id').unsigned().references('users.id');
        table.integer('product_id').unsigned().references('products.id');
        table.timestamp("createdAt").default(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};
