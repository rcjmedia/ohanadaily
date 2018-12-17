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
          password: 'Lbomb',
          birthdate: '09/23/1985',
          address: '123 Boulevard Street, Honolulu, Hawaii 96822',
          user_type: 'seller',
          rank: 1,
          avatar: 'defaultAvatar.png'
        },
        {
          first_name: 'Romeo',
          last_name: 'Corpuz',
          email: 'romeo@news.com',
          password: 'Rbomb',
          birthdate: '10/22/1986',
          address: '1234 Boulevard Avenue, Honolulu, Hawaii, 96811',
          user_type: 'seller',
          rank: 2,
          avatar: 'defaultAvatar.png'
        },
        {
          first_name: 'Chad',
          last_name: 'Runner',
          email: 'chad@email.com',
          password: 'password',
          birthdate: '1/23/1993',
          address: '4353 Laniakea street, Honolulu, Hawaii, 94324',
          user_type: 'buyer',
          rank: 23,
          avatar: 'defaultAvatar.png'
        },
        {
          first_name: 'Walt',
          last_name: 'Whitman',
          email: 'walt@email.com',
          password: 'walts',
          birthdate: '3/21/1934',
          address: '3455 Tops Street, Lake Tahoe, Nevada, 93452',
          user_type: 'buyer',
          rank: 5,
          avatar: 'defaultAvatar.png'
        }
      ]);
    });
};
