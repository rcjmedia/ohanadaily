const bookshelf = require('./bookshelf');
const UserModel = require('../models/UserModels');

const ContentModels = bookshelf.Model.extend({
  tableName: 'content',
  user_id: function() {
    return this.belongsTo(UserModel, 'user_id');
  },
  idAttribute: 'id',
  hasTimestamps: true
});

module.exports = ContentModels;
