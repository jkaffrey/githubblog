
exports.up = function(knex, Promise) {

  knex.schema.createTable('accessRights', function(table) {

    table.increments();

    table.integer('blogId');
    table.integer('userId');
    table.integer('access'); //0 - Blog Admin : 1 - Blog User : 2 - Blog Limited User
  });
};

exports.down = function(knex, Promise) {

  knex.schema.dropTableIfExists('accessRights');
};
