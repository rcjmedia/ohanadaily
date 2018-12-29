const router = require('express').Router();
const users = require('./users/users');
const content = require('./content/content');
const auth = require('./auth/auth');
// const google = require('./google/app')

// router.use('/gcloud', google);
router.use('/auth', auth);
router.use('/users', users);
router.use('/content', content);

module.exports = router;
