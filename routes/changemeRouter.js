const { Router } = require('express');

const usersController = require('../controllers/changemeController');

const changemeRouter = Router();
changemeRouter.get('/', usersController.getUsers);

module.exports = changemeRouter;
