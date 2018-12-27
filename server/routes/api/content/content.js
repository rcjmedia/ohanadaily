const express = require('express');
const router = express.Router();
const bp = require('body-parser');
const ContentModels = require('../../../models/ContentModels');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  ContentModels.fetchAll({ withRelated: ['user_id'] })
    .then(contentList => {
      res.json(contentList.serialize());
      console.log('\ncontentList: \n', contentList); })
    .catch(err => { console.log('err', err);
      res.json('err'); });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  ContentModels
    .where('id', id)
    .fetchAll({ withRelated: ['user_id'] })
    .then(contentId => { console.log('\ncontentId\n');
      res.json(contentId); })
    .catch(err => { console.log('err', err);
      res.json('err'); });
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
    media_file: req.body.media_file };
  return new ContentModels()
      .save(contentInput)
      .then(response => { return response.refresh(); })
      .then(newData => { return res.json(newData); })
      .catch(err => { console.log(err.message);
        return res.status(400).json({ error: err.message }); });
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
    media_file: req.body.media_file }
  ContentModels
  .where('id', id)
  .fetch()
  .then(storyUpdate => { console.log('storyUpdate', storyUpdate);
    storyUpdate.save(updatedStory);
    res.json(updatedStory);
    return null;})
  .catch(err => { console.log("err", err);
    res.json('err', err) })
});

router.delete('/deletestory', (req, res) => {
  const id = req.body.id
  ContentModels
  .where({ id })
  .destroy()
  .then(contentDetails => {
    res.json(contentDetails.serialize()) })
  .catch(err => { console.log('err', err)
    res.json('err', err) })
})

module.exports = router;
