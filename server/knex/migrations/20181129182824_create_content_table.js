exports.up = function(knex, Promise) {
  return knex.schema.createTable('content', function(table) {
    table.increments();
    table.string('content_type', 50).notNullable();
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
    table.string('bid_time_duration', 50);
    table.boolean('status').notNullable(); // true or false; closes the bidding module if false
    table.string('category', 50).notNullable();
    table.string('file_size', 50).notNullable();
    table.string('resolution', 50).notNullable();
    table
      .string('thumb_img', 1000)
      .notNullable()
      .defaultTo('default.jpg');
    table
      .string('download_link', 1000)
      .notNullable()
      .defaultTo('default.jpg');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('content');
};
