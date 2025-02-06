const { Router } = require('express');

const trainersController = require('../controllers/trainersController');

const trainersRouter = Router();

trainersRouter.get('/:id', trainersController.getWithId); // how to get the id?

trainersRouter.post('/', trainersController.post);
trainersRouter.put('/:id', trainersController.updateWithId);
trainersRouter.delete('/:id', trainersController.deleteWithId);
module.exports = trainersRouter;
