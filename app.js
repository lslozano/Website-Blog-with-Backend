
require('dotenv').config();

const express     = require('express');
const bodyParser  = require('body-parser');
const lowerCase   = require('lodash');
const mongoose    = require('mongoose');

const port = process.env.PORT || 3000;
const db = process.env.DB;

const app = express();

// CONNECTION
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use("/", require('./routes/index'));
app.use("/about", require('./routes/index'));
app.use("/contact", require('./routes/index'));

app.get("/compose", function(req, res){
  res.render("compose");
});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/");
});

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
