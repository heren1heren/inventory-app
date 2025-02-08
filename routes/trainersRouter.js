const { Router } = require('express');

const trainersController = require('../controllers/trainersController');

const trainersRouter = Router();

trainersRouter.get('/:id', trainersController.getWithId); // how to get the id?

trainersRouter.post('/add', trainersController.post);
trainersRouter.put('/update/:id', trainersController.updateWithId);
trainersRouter.delete('/delete/:id', trainersController.deleteWithId);
module.exports = trainersRouter;
