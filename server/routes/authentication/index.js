const authentication = require('express').Router();
const login = require('./login.js');
const register = require('./register.js');

authentication.post('/login', login);
authentication.post('/register', register);

module.exports = authentication;
