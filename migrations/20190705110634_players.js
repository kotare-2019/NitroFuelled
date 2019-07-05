
exports.up = function (knex, Promise) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('name').unique()
    table.integer('score')

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('players')
};
