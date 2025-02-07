const { Router } = require('express');

const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getMainPage);
indexRouter.get('/form', indexController.getFormPage);
// get main page
module.exports = indexRouter;
