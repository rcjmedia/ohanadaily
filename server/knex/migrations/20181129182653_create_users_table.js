
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().notNullable();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('email', 50).notNullable();
    table.string('password', 50).notNullable();
    table.string('birthdate', 50).notNullable();
    table.string('address', 95).notNullable();
    table.integer('rank').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};