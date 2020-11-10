const Post = require('../models/Post');
// const Posts = require('../models/Posts');

exports.composePost = async (req, res) => {
  const postTitle = req.body.postTitle
  const postContent = req.body.postBody

  const post = new Post ({
    title: postTitle,
    content: postContent
  });

  await post.save((err) => {
    if (err) return `There was an error saving the post. ${err}`;
    res.redirect("/");
  })
};
