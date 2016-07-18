
exports.up = function(knex, Promise) {

  knex.schema.createTable('assignments', function(table) {

    table.increments();

    table.integer('posterId');
    table.integer('weight'); //0-100 converted to a decimal
    table.integer('maxGrade');

    table.string('title');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('assignments');
};
