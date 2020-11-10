const { model, Schema } = require('mongoose');

const postSchema = require('../schema/PostSchema');

const postsSchema = new Schema ({
  posts: [postSchema]
})

module.exports = model("Posts", postsSchema);