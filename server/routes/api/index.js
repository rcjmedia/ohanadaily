const router = require('express').Router();
const users = require('./users/users');
const content = require('./content/content');
const transactions = require('./transactions/transactions');
const preferred = require('./preferred/preferred');
const bids = require('./bids/bids');
const auth = require('./auth/auth');

router.use('/auth', auth);
router.use('/users', users);
router.use('/content', content);
router.use('/transactions', transactions);
router.use('/preferred', preferred);
router.use('/bids', bids);

module.exports = router;
