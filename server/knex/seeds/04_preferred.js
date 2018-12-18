exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('preferred')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('preferred').insert([
        { 
          buyer_id: 4, 
          seller_id: 2 
        }
      ]);
    });
};
