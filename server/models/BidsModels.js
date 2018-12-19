const bookshelf = require('../models/bookshelf');
const ContentModel = require('./ContentModels');
const UserModel = require('./UserModels');

const BidsModels = bookshelf.Model.extend({
  tableName: 'bids',
  bidder: function() {
    return this.belongsTo(UserModel, 'bidder');
  },
  content_id: function() {
    return this.belongsTo(ContentModel, 'content_id');
  },
  idAttribute: 'id',
  hasTimestamps: true
});

module.exports = BidsModels;
