const { model } = require('mongoose');

const postSchema = require('../schema/PostSchema');

module.exports = model("Post", postSchema);