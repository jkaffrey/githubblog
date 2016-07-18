
exports.up = function(knex, Promise) {

  knex.schema.createTable('users', function(table) {

    table.increments();
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('users');
};
