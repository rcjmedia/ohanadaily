// Update with your config settings.
const path = require('path');
require('dotenv').config({ path: '../.env' });
// console.log(process.env)

module.exports = {
  development: {
    client: 'pg',
    connection: {
      //TO DO : Romeo change back to process.env for your computer.
      host: process.env.POSTGRES_HOST_PORT || 'localhost',
      port: process.env.POSTGRES_CONTAINER_PORT || 5432,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'news',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'news',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
