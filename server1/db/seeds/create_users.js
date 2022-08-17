/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed =  function(knex) {
  let users = knex('users')
  // Deletes ALL existing entries
  return users.del()
  .then(function () {
    // insert into posts
    const posts = Array.from({length: 10}).map(() => {
      return {
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        imageUrl: faker.image.imageUrl(),
        createdAt: faker.date.past()
      }
    })
    return knex('posts').insert(posts)
  })
};
};

return knex.schema.createTable('users', function(table) {
  table.increments('id').primary();
  table.string('email').notNullable().unique();
  table.string('password_digest').notNullable();
  table.string('token');
  table.boolean('is_customer');
  table.timestamp('created_at').defaultTo(knex.fn.now())
});
