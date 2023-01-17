const express = require("express");

// import route module
const helloRoute  = require("./route/hello.route");
const authorRoute = require("./route/author.route");

// init app
const app = express();

// app config
app.use(express.json());

// routes
app.use("/hello/", helloRoute);
app.use("/author/", authorRoute);

module.exports = app;