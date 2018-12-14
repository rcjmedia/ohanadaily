exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('content')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('content').insert([
        {
          type: 'photo',
          user_id: 2,
          title: 'School Report explained',
          description: 'School Report explained',
          location: 'North Shore, Waimea Bay.',
          bid: '50',
          status: 'true',
          category: 'school',
          file_size: '845',
          resolution: '1280x720',
          thumb_img: '/media/images/newwhatisschoolreport.png',
          download_link: '/media/videos/newwhatisschoolreport.mp4'
        },
        {
          type: 'video',
          user_id: 1,
          title: 'Reporting sport masterclass video ',
          description: 'Reporting sport masterclass video',
          location: 'Central, Mililani Mauka',
          bid: '100',
          status: 'true',
          category: 'sports',
          file_size: '2793',
          resolution: '1280x720',
          thumb_img: '/media/images/sonalimasterclassfinal_fido.png',
          download_link: '/media/videos/sonalimasterclassfinal_fido.mp4'
        },
        {
          type: 'photo',
          user_id: 2,
          title: 'What is news?',
          description: 'What is news?',
          location: 'West Oahu, Ewa Beach',
          bid: '75',
          status: 'false',
          category: 'info',
          file_size: '643',
          resolution: '1474x874',
          thumb_img: '/media/images/Video1whatisnews.png',
          download_link: '/media/videos/Video1whatisnews.mp4'
        },
        {
          type: 'photo',
          user_id: 2,
          title: 'Broadcasting news',
          description: 'Broadcasting news',
          location: 'Oahu ft. shafter',
          bid: '55',
          status: 'true',
          category: 'broadcast',
          file_size: '587',
          resolution: '1244x766',
          thumb_img: '/media/images/VIDEO5broadcastingnews.png',
          download_link: '/media/videos/VIDEO5broadcastingnews.mp4'
        }
      ]);
    });
};
