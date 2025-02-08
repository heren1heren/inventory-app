const { Router } = require('express');

const pokemonTypesController = require('../controllers/pokemonTypesController');
const { upload } = require('../storageEngine');

const pokemonTypesRouter = Router();

pokemonTypesRouter.get('/:id', pokemonTypesController.getWithId);
pokemonTypesRouter.post(
  '/add',
  upload.single('file'),
  pokemonTypesController.post
);
pokemonTypesRouter.get('/update/:id', pokemonTypesController.post);
pokemonTypesRouter.put('/update/:id', pokemonTypesController.post);

module.exports = pokemonTypesRouter;
