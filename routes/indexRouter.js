const { Router } = require('express');

const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getMainPage);
// get main page
module.exports = indexRouter;
