
exports.up = function(knex, Promise) {
  knex.schema.createTable('blogs', function(table) {

    table.increments();

    table.string('name');
    table.string('description');
    table.string('github_url');

    table.boolean('isPublic');

    table.integer('ownerId');
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('blogs');
};
