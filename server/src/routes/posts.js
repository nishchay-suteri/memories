const express = require("express");
const {
    postsGetController,
    postsPostController,
} = require("../controllers/posts");

const router = express.Router();

router.get("/", postsGetController);
router.post("/", postsPostController);

module.exports = router;
