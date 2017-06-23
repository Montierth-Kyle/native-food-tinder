const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Diet = new Schema({
  id: { type : Number, unique : true },
  internalName: { type: String },
  name: { type : String, unique : true, required : true, dropDups: true }
});

Diet.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'Diet', Diet );