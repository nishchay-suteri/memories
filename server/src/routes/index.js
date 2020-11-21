const express = require("express");
const { indexGetController } = require("../controllers/index");
const router = express.Router();

router.get("/", indexGetController);

module.exports = router;
