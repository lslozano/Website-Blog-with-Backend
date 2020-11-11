
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
app.use("/compose", require('./routes/index'));

app.listen(port, () => console.log(`Server started on port ${port}`));
