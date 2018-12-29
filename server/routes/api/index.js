const router = require('express').Router();
const users = require('./users/users');
const content = require('./content/content');
const auth = require('./auth/auth');

router.use('/auth', auth);
router.use('/users', users);
router.use('/content', content);

module.exports = router;
