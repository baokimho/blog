
const { create } = require('express-handlebars');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  videoId: { type: String },
  level: { type: String },
  slug: { type: String, required: true, unique: true },

}, 
  { timestamps: true }
);

module.exports = mongoose.model('Course', Course)