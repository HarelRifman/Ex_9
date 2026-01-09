const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', Category);

