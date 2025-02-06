const { Router } = require('express');

const pokemonTypesController = require('../controllers/pokemonTypesController');

const pokemonTypesRouter = Router();

pokemonTypesRouter.get('/:id', pokemonTypesController.getWithId);

module.exports = pokemonTypesRouter;
