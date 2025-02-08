const { Router } = require('express');

const pokemonsController = require('../controllers/pokemonsController');
const { upload } = require('../storageEngine');

const pokemonsRouter = Router();

pokemonsRouter.get('/:id', pokemonsController.getWithId);

pokemonsRouter.post('/add', upload.single('file'), pokemonsController.post); // how to
pokemonsRouter.get('/update/:id', pokemonsController.getUpdateForm);
pokemonsRouter.put(
  '/update/:id',

  pokemonsController.updateWithId
);
pokemonsRouter.delete('/delete/:id', pokemonsController.deleteWithId);
module.exports = pokemonsRouter;
