const express = require('express');
const { loginUser } = require('../controller/users');
const loginRoutes = express.Router();

loginRoutes.post('/', loginUser)

module.exports = loginRoutes;
