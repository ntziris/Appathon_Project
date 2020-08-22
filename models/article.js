const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  authors: [{
    type: String,
    required: true
  }]
}).index({ title: 'text', abstract: 'text', text: 'text' });

module.exports = mongoose.model('Article', articleSchema);
