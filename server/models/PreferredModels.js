const bookshelf = require('./bookshelf');
const UserModel = require('./UserModels');

const Preferred = bookshelf.Model.extend({
    tableName: 'transactions',
    user_id: function() {
        return this.belongsTo(UserModel, "user_id");
    },
    idAttribute: 'id',
    hasTimestamps: true
});



module.exports = Preferred;