var dbConn = require('./dbconn');
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
var User = new dbConn.Schema({
  name: { type: String, default: 'Anand' },
  phone: { type: Number, match: /[0-9]/ },
  description: { type: String, match: /[a-z]/ },
  latitude:{ type: Number, match: /[0-9]/ },
  longitude:{ type: Number, match: /[0-9]/ },
  loc:{type: 'Point'
  ,index:'2dsphere'}

});
var UserModel = mongoose.model('Users', User);
module.exports = UserModel;
