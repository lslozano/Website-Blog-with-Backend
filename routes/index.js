const { Router } = require('express');
const router = Router();

const {
  getStartingContent,
  getAboutContent,
  getContactContent,
  getCompose,
  getPost
} = require('../controllers/getControllers');

const {
  composePost
} = require('../controllers/postControllers');

router
  .get("/", getStartingContent)
  .get("/about", getAboutContent)
  .get("/contact", getContactContent)
  .get("/compose", getCompose)
  .post("/compose", composePost)
  .get("/posts/:postId", getPost);

module.exports = router;