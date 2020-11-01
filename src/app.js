const express = require("express");
const { router } = require("./routes");
const { resolve } = require("path")

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve(__dirname, '..', 'public')));
app.use(express.static(resolve(__dirname, '..', 'temp', 'edited')));

app.use(router);

module.exports = { app };