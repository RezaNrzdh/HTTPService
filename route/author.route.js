const express = require("express");
const router = express.Router();

const { AuthorFullName } = require("../controllers/author.controller");

router.route("/").get(AuthorFullName);

module.exports = router;