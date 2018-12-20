// bidder 1: 1,4,7
// bidder 2: 2,5,8
// bidder 1: 3,6,9

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bids').del()
    .then(function () {
      // Inserts seed entries
      return knex('bids').insert([
        {
          bidder: 1, // id: 1
          bid_amount: '100',
          content_id: 2
        },
        {
          bidder: 2, // id: 2
          bid_amount: '120',
          content_id: 2
        },
        {
          bidder: 3, // id: 3
          bid_amount: '130',
          content_id: 2
        },
        {
          bidder: 4, // id: 4
          bid_amount: '140',
          content_id: 2
        }
      ]);
    });
};
