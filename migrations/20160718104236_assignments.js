
exports.up = function(knex, Promise) {

  knex.schema.createTable('assignments', function(table) {

    table.increments();
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('assignments');
};
