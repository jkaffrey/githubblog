
exports.up = function(knex, Promise) {

  knex.schema.createTable('users', function(table) {

    table.increments();

    table.string('username');
    table.string('password');

    table.integer('totalGrade');
    table.integer('assignmentsComplete');

    table.boolean('isSiteAdmin');
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('users');
};
