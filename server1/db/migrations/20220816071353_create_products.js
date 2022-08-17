/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function async(knex, Promise) {
    return knex.schema.createTable('products', function(table) {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.string("imageUrl");
        table.string("owner")
        table.integer('user_id').unsigned().references('users.id');
        table.timestamp("createdAt").default(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("products");
};
