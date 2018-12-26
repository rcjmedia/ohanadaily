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
          title: 'School Report explained',
          description: 'School Report explained',
          location: 'North Shore, Waimea Bay.',
          bid: '50',
          bid_time_duration: '05:00:00',
          status: 'true',
          category: 'school',
          file_size: '845',
          resolution: '1280x720',
          thumb_img: 'maia-2-1436576.jpg',
          download_link: 'newwhatisschoolreport.mp4'
        },
        {
          content_type: 'video',
          user_id: 1,
          title: 'Reporting sport masterclass video ',
          description: 'Reporting sport masterclass video',
          location: 'Central, Mililani Mauka',
          bid: '100',
          bid_time_duration: '05:00:00',
          status: 'true',
          category: 'sports',
          file_size: '2793',
          resolution: '1280x720',
          thumb_img: 'large-pumpkin-1387927.jpg',
          download_link: 'sonalimasterclassfinal_fido.mp4'
        },
        {
          content_type: 'photo',
          user_id: 2,
          title: 'What is news?',
          description: 'What is news?',
          location: 'West Oahu, Ewa Beach',
          bid: '75',
          bid_time_duration: '05:00:00',
          status: 'false',
          category: 'info',
          file_size: '643',
          resolution: '1474x874',
          thumb_img: 'lrt-interior-1626389.jpg',
          download_link: 'Video1whatisnews.mp4'
        },
        {
          content_type: 'photo',
          user_id: 2,
          title: 'Broadcasting news',
          description: 'Broadcasting news',
          location: 'Oahu ft. shafter',
          bid: '55',
          bid_time_duration: '05:00:00',
          status: 'true',
          category: 'broadcast',
          file_size: '587',
          resolution: '1244x766',
          thumb_img: 'cow-1380252.jpg',
          download_link: 'VIDEO5broadcastingnews.mp4'
        },
        {
          content_type: 'photo',
          user_id: 3,
          title: 'Ohana Background',
          description: 'Ohana Background',
          location: 'Oahu ft. shafter',
          bid: '55',
          bid_time_duration: '05:00:00',
          status: 'true',
          category: 'broadcast',
          file_size: '587',
          resolution: '1244x766',
          thumb_img: 'ohanadaily2.jpg',
          download_link: 'VIDEO5broadcastingnews.mp4'
        }
      ]);
    });
};
