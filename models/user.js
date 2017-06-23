const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: { type : String, unique : true, required : true, dropDups: true },
  password: { type : String },
  firstName: { type : String, unique : false, required : true, dropDups: false },
  lastName: { type : String, unique : false, required : true, dropDups: true },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'User', User );