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
  // Deletes ALL existing entries
  return knex('posts').del()
  .then(function () {
    // insert into posts
    const posts = Array.from({length: 1000}).map(() => {
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
