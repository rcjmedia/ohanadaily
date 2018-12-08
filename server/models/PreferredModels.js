const bookshelf = require('./bookshelf');
const UserModel = require('./UserModels');

const Preferred = bookshelf.Model.extend({
  tableName: 'preferred',
  buyer_id: function() {
    return this.belongsTo(UserModel, 'buyer_id');
  },
  seller_id: function() {
    return this.belongsTo(UserModel, 'seller_id');
  },
  idAttribute: 'id',
  hasTimestamps: true
});

module.exports = Preferred;
