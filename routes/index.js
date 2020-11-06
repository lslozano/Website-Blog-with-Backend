const { Router } = require('express');
const router = Router();

const {
  getStartingContent
} = require('../controllers/getControllers');

router.get("/", getStartingContent);

module.exports = router;