const { Router } = require('express');

const pokemonTypesController = require('../controllers/pokemonTypesController');

const pokemonTypesRouter = Router();

pokemonTypesRouter.get('/:id', pokemonTypesController.getWithId);
// pokemonTypesRouter.post('/:id', pokemonTypesController.post);

module.exports = pokemonTypesRouter;
