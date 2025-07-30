
const { create } = require('express-handlebars');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Course', Course)