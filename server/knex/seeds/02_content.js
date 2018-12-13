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
          title: 'big wave surfer',
          description: 'Surfer on a giant wave at Waimea Bay.',
          location: 'North Shore, Waimea Bay.',
          bid: '50',
          status: 'true',
          category: 'Sports',
          file_size: '845',
          resolution: '1280x720',
          file_location:
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F556236436_1280x720.jpg&imgrefurl=https%3A%2F%2Fvimeo.com%2F155467649&docid=iBenO8s31m0zdM&tbnid=Hc2_Fb1JG4AFEM%3A&vet=10ahUKEwjAhL3D_P_eAhWoj1QKHTyRCg0QMwhOKAIwAg..i&w=1280&h=720&bih=950&biw=1853&q=waimea%20bay%20surfer&ved=0ahUKEwjAhL3D_P_eAhWoj1QKHTyRCg0QMwhOKAIwAg&iact=mrc&uact=8'
        },
        {
          type: 'video',
          user_id: 1,
          title: 'House fire in Mililani',
          description: 'House engulfed in flames in Mililani',
          location: 'Central, Mililani Mauka',
          bid: '100',
          status: 'true',
          category: 'breaking',
          file_size: '2793',
          resolution: '1280x720',
          file_location:
            'https://www.hawaiinewsnow.com/2018/09/29/crews-battle-large-house-fire-keaau/'
        },
        {
          type: 'photo',
          user_id: 2,
          title: 'Giant shark spotted at Barbers Point',
          description:
            'Beachgoers yesterday spotted a massive great white shark just off the beach at Barbers Point',
          location: 'West Oahu, Ewa Beach',
          bid: '75',
          status: 'false',
          category: 'beach',
          file_size: '643',
          resolution: '1474x874',
          file_location:
            'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcmgpbpspbc.files.wordpress.com%2F2015%2F07%2F030513-sharks-44.jpg&imgrefurl=http%3A%2F%2Fspbc.blog.palmbeachpost.com%2F2015%2F07%2F07%2Fwant-to-know-where-to-see-sharks-or-maybe-where-to-avoid%2F&docid=JtiW4rxN3PnRjM&tbnid=06WIAJeicpK_lM%3A&vet=10ahUKEwjm0Zf8_f_eAhULEHwKHdp_AcQQMwhvKAswCw..i&w=1474&h=825&bih=950&biw=1853&q=shark%20beach&ved=0ahUKEwjm0Zf8_f_eAhULEHwKHdp_AcQQMwhvKAswCw&iact=mrc&uact=8'
        },
        {
          type: 'photo',
          user_id: 2,
          title: 'Accident closes h1',
          description:
            'A massive accident on h1 caused the highway to be shutdown while cruise clean up',
          location: 'Oahu ft. shafter',
          bid: '55',
          status: 'true',
          category: 'traffic',
          file_size: '587',
          resolution: '1244x766',
          file_location:
            'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.dumbcrooks.com%2Fgallery%2Falbums%2Fcar-crashes%2FBig_car_crash.jpg&imgrefurl=http%3A%2F%2Fwww.dumbcrooks.com%2Fgallery%2Fcar-crashes%2FBig_car_crash&docid=7UaAN2YuJmcsOM&tbnid=7oZ8S5Jei1-KzM%3A&vet=10ahUKEwidntbz_v_eAhXhh1QKHWYcDzoQMwiNASglMCU..i&w=458&h=292&bih=950&biw=1853&q=big%20accident&ved=0ahUKEwidntbz_v_eAhXhh1QKHWYcDzoQMwiNASglMCU&iact=mrc&uact=8'
        }
      ]);
    });
};
