const express = require("express");
const morgan = require("morgan");

// import route module
const helloRoute  = require("./route/hello.route");
const authorRoute = require("./route/author.route");
const homeRoute   = require("./route/home.route");
const healthRoute = require("./route/health.route");

// init app
const app = express();

// app config
app.use(express.json());
app.use(morgan(':remote-addr - - [:date[iso]] ":method :url" :status - - :response-time ms'));

// routes
app.use("/healthz/", healthRoute);
app.use("/hello/", helloRoute);
app.use("/author/", authorRoute);
app.use("/", homeRoute);

module.exports = app;