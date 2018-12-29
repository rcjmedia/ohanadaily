exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Carl',
          last_name: 'Laugerbaun',
          email: 'carl@news.com',
          password: 'Lbomb'
        },
        {
          first_name: 'Romeo',
          last_name: 'Corpuz',
          email: 'romeo@news.com',
          password: 'Rbomb'
        },
        {
          first_name: 'Chad',
          last_name: 'Runner',
          email: 'chad@email.com',
          password: 'password'
        },
        {
          first_name: 'Walt',
          last_name: 'Whitman',
          email: 'walt@email.com',
          password: 'walts'
        }
      ]);
    });
};
