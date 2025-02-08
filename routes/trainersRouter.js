const { Router } = require('express');

const trainersController = require('../controllers/trainersController');
const { upload } = require('../storageEngine');

const trainersRouter = Router();

trainersRouter.get('/:id', trainersController.getWithId); // how to get the id?

trainersRouter.post(
  '/add',
  upload.single('trainer-image'),
  trainersController.post
);
trainersRouter.get('/update/:id', trainersController.getUpdateForm);
trainersRouter.put('/update/:id', trainersController.updateWithId);
trainersRouter.delete('/delete/:id', trainersController.deleteWithId);
module.exports = trainersRouter;
