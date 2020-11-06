const { model, Schema } = require('mongoose');
const postItem = require('./Post');

const postsSchema = new Schema({
  posts: [postItem]
})

module.exports = model("Posts", postsSchema);