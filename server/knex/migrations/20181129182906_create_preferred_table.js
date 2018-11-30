exports.up = function(knex, Promise) {
  return knex.schema.createTable('preferred', function(table) {
    table.increments('id').primary();
    table.string('buyer_id').unsigned().index().inTable('users').references('id');
    table.string('seller_id').unsigned().index().inTable('users').references('id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('preferred');
}