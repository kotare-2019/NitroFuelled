
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, score: 0, name: 'Bridey'},
        {id: 2, score: 0, name: 'Hammers'},
        {id: 3, score: 0, name: 'Karla'},
        {id: 4, score: 0, name: 'Ben'}
      ]);
    });
};
