exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('content').insert([
        {
          content_type: 'photo',
          user_id: 2,
          name: 'School Report explained',
          description: 'School Report explained',
          price: '50',
          category: 'school',
          thumb_img: 'maia-2-1436576.jpg',
          media_file: 'newwhatisschoolreport.mp4'
        },
        {
          content_type: 'video',
          user_id: 1,
          name: 'Reporting sport masterclass video ',
          description: 'Reporting sport masterclass video',
          price: '100',
          category: 'sports',
          thumb_img: 'large-pumpkin-1387927.jpg',
          media_file: 'sonalimasterclassfinal_fido.mp4'
        },
        {
          content_type: 'photo',
          user_id: 2,
          name: 'What is news?',
          description: 'What is news?',
          price: '75',
          category: 'info',
          thumb_img: 'lrt-interior-1626389.jpg',
          media_file: 'Video1whatisnews.mp4'
        },
        {
          content_type: 'photo',
          user_id: 2,
          name: 'Broadcasting news',
          description: 'Broadcasting news',
          price: '55',
          category: 'broadcast',
          thumb_img: 'cow-1380252.jpg',
          media_file: 'VIDEO5broadcastingnews.mp4'
        },
        {
          content_type: 'photo',
          user_id: 3,
          name: 'Ohana Background',
          description: 'Ohana Background',
          price: '55',
          category: 'broadcast',
          thumb_img: 'ohanadaily2.jpg',
          media_file: 'VIDEO5broadcastingnews.mp4'
        }
      ]);
    });
};
