const express = require('express');
const router = express.Router();
const autenticarUser = require('../controllers/autenticacao-controller');
const addUsers = require('../controllers/add-user-controller');

router.post('/login', autenticarUser);

router.post('/add-user', addUsers);

module.exports = router;