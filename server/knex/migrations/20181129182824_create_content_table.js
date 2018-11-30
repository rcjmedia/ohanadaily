exports.up = function(knex, Promise) {
  return knex.schema.createTable('content', function(table) {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.integer('user_id').references('id').inTable('users').index();
    table.string('title', 320).notNullable();
    table.date('description').notNullable();
    table.string('location', 95).notNullable();
    table.boolean('bid').notNullable();
    table.boolean('status').notNullable();
    table.string('category').notNullable();
    table.integer('file_size').notNullable();
    table.string('resolution').notNullable();
    table.string('file_location').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('content');
}