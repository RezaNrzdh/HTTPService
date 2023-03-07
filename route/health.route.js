const express = require("express");
const router  = express.Router();

const {Health} = require("../controllers/health.controller");
router.route("/").get(Health);

module.exports = router;
