
exports.up = function(knex, Promise) {

  knex.schema.createTable('submissions', function(table) {

    table.increments();

    table.integer('userId');
    table.integer('assignmentId');
    table.integer('grade');

    table.text('submissionText');
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('submissions');
};
