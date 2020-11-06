const { model, Schema } = require('mongoose');

const postsSchema = new Schema ({
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
})

module.exports = model("Posts", postsSchema);