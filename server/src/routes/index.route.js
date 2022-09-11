const express = require("express");
const routes = express.Router();
const auth = require("./auth.route");

routes.use(auth);

module.exports = routes;
