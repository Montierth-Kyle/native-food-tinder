const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Recipe = new Schema({
  userId: { type : String, required : true },
  recipeId: { type : String },
  recipeName: { type: String },
  recipeImageUrl: { type: String },
  cooked: { type: Boolean, default: false },
  superSave: { type: Boolean, default: false }

});

Recipe.plugin(passportLocalMongoose);

module.exports = mongoose.model( 'Recipe', Recipe );