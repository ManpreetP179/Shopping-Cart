
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//we are using knex to create the data

exports.up = function(knex, Promise) {

    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('is_customer');
        table.timestamps(true, true);
    }).createTable('products', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.string("imageUrl");
        table.string("owner")
        table.integer('user_id').unsigned().references('users.id');
        table.timestamps(true, true);
    }).createTable('reviews', function(table) {
        table.increments('id').primary();
        table.string('rating');
        table.string('body');
        table.string("owner");
        table.integer('user_id').unsigned().references('users.id');
        table.integer('product_id').unsigned().references('products.id');
        table.timestamps(true, true);
    })
    //will user it later
    // .knex.schema.createTable('orders', function(table) {
    //     table.increments('id').primary();
    //     table.boolean('is_confirmed');
    //     table.integer('user_id').unsigned().references('users.id');
    //     table.integer('products_id').unsigned().references('products.id');
    //     table.timestamps(true, true);
    // });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("orders")
    .dropTableIfExists("products")
    .dropTableIfExists("reviews")
    .dropTableIfExists("users");
};
