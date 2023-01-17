const express = require("express");

// init app
const app = express();

// app config
app.use(express.json());

// routes
app.use("/hello", (req, res) => {

    const REGEX = /(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g;

    if(req.query.name){
        const splitName = req.query.name.replace(REGEX, ' ');

        res.status(200)
            .send(`Hello ${ splitName }`);
    }
    else{
        res.status(200)
            .send("Hello Stranger");
    }
});

app.use("/author", (req, res) => {
    res.status(200).send("Reza Norouzzadeh")
});

module.exports = app;