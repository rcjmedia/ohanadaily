const bookshelf = require('../models/bookshelf');
const ContentModel = require('./ContentModels');
const UserModel = require('./UserModels');

const Transactions = bookshelf.Model.extend({
  tableName: 'transactions',
  buyer_id: function() {
    return this.belongsTo(UserModel, 'buyer_id');
  },
  seller_id: function() {
    return this.belongsTo(UserModel, 'seller_id');
  },
  content_id: function() {
    return this.belongsTo(ContentModel, 'content_id');
  },

  idAttribute: 'id',
  hasTimestamps: true
});

module.exports = Transactions;
