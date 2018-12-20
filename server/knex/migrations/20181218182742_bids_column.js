exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table
      .integer('bid_id')
      .references('id')
      .inTable('bids')
      .onDelete('CASCADE')
      .index();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('avatar');
  });
};
