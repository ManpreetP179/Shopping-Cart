/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id').primary();
        table.boolean('is_confirmed');
        table.integer('user_id').unsigned().references('users.id');
        table.integer('products_id').unsigned().references('products.id');
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("orders");
};
