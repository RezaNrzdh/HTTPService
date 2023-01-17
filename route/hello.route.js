const express = require("express");
const router = express.Router();

const {
    HelloStranger,
    HelloWithParamsName
} = require("../controllers/hello.controller");

router.route("").get(HelloStranger);
router.route("/:name").get(HelloWithParamsName);

module.exports = router;