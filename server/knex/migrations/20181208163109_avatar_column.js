exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('avatar').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('avatar');
  });
};
