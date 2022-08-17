// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "shopping_cart",
      username: "user123",
      password: "123",
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};