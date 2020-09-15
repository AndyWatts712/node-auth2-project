
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'andyman', password: 'dogtown', department: 'accounting'},
        {username: 'snoop', password: 'whatever', department: 'IT'},
        {username: 'jantiwa', password: 'wedding', department: 'HR'}
      ]);
    });
};
