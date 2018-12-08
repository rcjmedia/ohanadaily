const router = require('express').Router();
const users = require('./users/users');
const content = require('./content/content');
const transactions = require('./transactions/transactions');
const preferred = require('./preferred/preferred');

router.use('/users', users);
router.use('/content', content);
router.use('/transactions', transactions);
router.use('/preferred', preferred);

module.exports = router;
