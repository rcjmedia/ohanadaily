const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const ContentModels = require('../../../models/ContentModels');
const cors = require('cors');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');

router.use(cors());
router.use(
  session({
    store: new Redis({
      url: 'redis://redis-session-store:6379',
      logErrors: true
    }),
    secret: 'pusheenCat',
    resave: false,
    saveUninitialized: true
  })
);

router.use(passport.initialize());
router.use(passport.session());

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  ContentModels.fetchAll({ withRelated: ['user_id'] })
    .then(contentList => {
      res.json(contentList.serialize());
      console.log('\ncontentList: \n', contentList);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  ContentModels.where('id', id)
    .fetchAll({ withRelated: ['user_id'] })
    .then(contentId => {
      console.log('\ncontentId\n');
      res.json(contentId);
    })
    .catch(err => {
      console.log('err', err);
      res.json('err');
    });
});

router.post('/add', (req, res) => {
  console.log('\nreq.body\n', req.body);
  const contentInput = {
    content_type: req.body.content_type,
    user_id: req.body.user_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    thumb_img: req.body.thumb_img,
    media_file: req.body.media_file
  };
  return new ContentModels()
    .save(contentInput)
    .then(response => {
      return response.refresh();
    })
    .then(newData => {
      return res.json(newData);
    })
    .catch(err => {
      console.log(err.message);
      return res.status(400).json({ error: err.message });
    });
});

router.put('/editstory/:id', (req, res) => {
  const { id } = req.params;
  const updatedStory = {
    content_type: req.body.content_type,
    user_id: req.body.user_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    thumb_img: req.body.thumb_img,
    media_file: req.body.media_file
  };
  ContentModels.where('id', id)
    .fetch(err => {
      // Validation: Make sure this is user specific operation
      // Only the owner can update records.
      if (passport.deserializeUser.id !== req.body.user_id) {
        console.log('You are not authorized to update this record! ', err);
        return null;
      } else {
        return true;
      }
    })
    .then(storyUpdate => {
      console.log('storyUpdate', storyUpdate);
      storyUpdate.save(updatedStory);
      res.json(updatedStory);
      return null;
    })
    .catch(err => {
      console.log('err', err);
      res.json('err', err);
    });
});

// delete content by from params
router.delete('/deletestory/:id', (req, res) => {
  const id = req.params.id;
  return ContentModels.where({ id })
    .fetch(err => {
      // Validation: Make sure this is user specific operation
      // Only the owner can update records.
      if (passport.deserializeUser.id !== 'user_id') {
        console.log('You are not authorized to update this record! ', err);
        return null;
      } else {
        return true;
      }
    })
    .then(data => {
      console.log('data message: ', data);
      return ContentModels.where({ id })
        .destroy()
        .then(() => {
          res.json({ success: 'true' });
        })
        .catch(err => {
          console.log('err.message', err.message);
        });
    });
});

// or delete content id from the body
// router.delete('/deletestory', (req, res) => {
//   const id = req.body.id;
//   ContentModels.where({ id })
//     .destroy()
//     .then(contentDetails => {
//       res.json(contentDetails.serialize());
//     })
//     .catch(err => {
//       console.log('err', err);
//       res.json('err', err);
//     });
// });

module.exports = router;
