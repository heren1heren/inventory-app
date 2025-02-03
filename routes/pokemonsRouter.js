const { Router } = require('express');

const pokemonsController = require('../controllers/pokemonsController');

const pokemonsRouter = Router();
pokemonsRouter.get('/all', pokemonsController.getAll);
pokemonsRouter.get('/:id', pokemonsController.getWithId); // how to get the id?

pokemonsRouter.post('/', pokemonsController.post);
pokemonsRouter.put('/:id', pokemonsController.updateWithId);
pokemonsRouter.delete('/:id', pokemonsController.deleteWithId);
module.exports = pokemonsRouter;
