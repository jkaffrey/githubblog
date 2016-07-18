
exports.up = function(knex, Promise) {

  knex.schema.createTable('submissions', function(table) {

    table.increments();
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('submissions');
};
