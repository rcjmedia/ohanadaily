const bookshelf = require('./bookshelf');

const UserModels = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = UserModels;