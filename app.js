
require('dotenv').config();

const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const routes      = require('./routes/index');

const port = process.env.PORT || 3000;
const db = process.env.DB;

const app = express();

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

app.use("/", routes);
app.use("/about", routes);
app.use("/contact", routes);
app.use("/compose", routes);
app.use("/posts/:postId", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
