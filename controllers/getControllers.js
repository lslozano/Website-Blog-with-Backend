const Post = require('../models/Post');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

exports.getStartingContent = async (req, res) => {
  await Post.find((err, postsFound) => {
    if (err) {
      console.log(`${err}. There was an error on the database. Please verify.`);
    } else if (postsFound.length == 0) {
      res.render("home", {
        startingContent: homeStartingContent,
        postsList: []
        })
      } else {
        res.render("home", {
          startingContent: homeStartingContent,
          postsList: postsFound
        })
      }
    }
  )
};

exports.getAboutContent = (req, res) => {
  res.render("about", {
    aboutContent: aboutContent
  })
};

exports.getContactContent = (req, res) => {
  res.render("contact", {
    contactContent: contactContent
  })
};

exports.getCompose = (req, res) => {
  res.render("compose")
};

exports.getPost = async (req, res) => {
  const requestedPostId = req.params.postId;

  await Post.findById(requestedPostId, (err, post) => {
    const storedPostId = post._id;
    if (err) {
      return `${err}. There was an error. Could not find the id.`;
    } else if (requestedPostId == storedPostId) {
      res.render("post", {
        title: post.title,
        content: post.content
      })
    }
  })
};