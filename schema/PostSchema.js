const { Schema } = require('mongoose');

const postSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  }
})

module.exports = postSchema;