exports.up = function(knex, Promise) {
  return knex.schema.createTable('content', function(table) {
    table.increments('id').primary();
    table.string('type').notNullable();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('title', 320).notNullable();
    table.string('description', 855).notNullable();
    table.string('location', 95).notNullable();
    table.integer('bid').notNullable();
    table.boolean('status').notNullable();
    table.string('category').notNullable();
    table.integer('file_size').notNullable();
    table.string('resolution').notNullable();
    table.string('thumb_img', 1000).notNullable();
    table.string('download_link', 1000).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('content');
};
