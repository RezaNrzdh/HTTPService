const express = require("express");
const router = express.Router();

const { welcomeHome } = require("../controllers/home.controller");

router.route("").get(welcomeHome);

module.exports = router;