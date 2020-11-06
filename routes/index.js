const { Router } = require('express');
const router = Router();

const {
  getStartingContent,
  getAboutContent,
  getContactContent
} = require('../controllers/getControllers');

router
  .get("/", getStartingContent)
  .get("/about", getAboutContent)
  .get("/contact", getContactContent);

module.exports = router;