exports.up = function(knex, Promise) {
  return knex.schema.createTable('content', function(table) {
    table.increments();
    table.string('content_type').notNullable();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.string('category');
    table
      .string('thumb_img')
      .notNullable()
      .defaultTo('default.jpg');
    table
      .string('media_file')
      .notNullable()
      .defaultTo('media.mp4');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('content');
};
