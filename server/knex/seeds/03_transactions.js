exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('transactions').insert([
        { 
          buyer_id: 4, 
          seller_id: 2, 
          content_id: 1 
        }
      ]);
    });
};
