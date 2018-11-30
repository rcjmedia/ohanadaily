exports.up = function(knex, Promise) {
  return knex.schema.createTable('preferred', function(table) {
    table.increments('id').primary();
    table.integer('buyer_id').references('id').inTable('users').index();
    table.integer('seller_id').references('id').inTable('users').index();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('preferred');
}