const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend({
    tableName: 'preferred',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Preferred;