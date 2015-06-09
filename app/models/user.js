var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Click = require('./click');
var Link = require('./link.js');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  links: function() {
    return this.belongsToMany(Link);
  },
  clicks: function() {
    return this.hasMany(Click);
  },
  initialize: function(){

  }
});

module.exports = User;
