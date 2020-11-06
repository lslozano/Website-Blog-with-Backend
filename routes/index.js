const { Router } = require('express');
const router = Router();

const {
  getStartingContent,
  getAboutContent,
  getContactContent,
  getCompose
} = require('../controllers/getControllers');

router
  .get("/", getStartingContent)
  .get("/about", getAboutContent)
  .get("/contact", getContactContent)
  .get("/compose", getCompose);

module.exports = router;