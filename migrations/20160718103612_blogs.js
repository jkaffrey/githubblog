
exports.up = function(knex, Promise) {
  knex.schema.createTable('blogs', function(table) {

    table.increments();
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('blogs');
};
