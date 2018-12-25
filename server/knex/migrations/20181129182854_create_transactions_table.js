exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', function(table) {
    table.increments();
    table
      .integer('buyer_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table
      .integer('seller_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table
      .integer('content_id')
      .references('id')
      .inTable('content')
      .onDelete('CASCADE')
      .index();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions');
};
