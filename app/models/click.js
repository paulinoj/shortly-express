var db = require('../config');
var Link = require('./link.js');
var User = require('./user.js');


var Click = db.Model.extend({
  tableName: 'clicks',
  hasTimestamps: true,
  // user: function() {
  //   return this.belongsTo(User, 'user_id');
  // },
  link: function() {
    return this.belongsTo(Link, 'link_id');
  }
});

module.exports = Click;
