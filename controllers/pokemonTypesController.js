const db = require('../db/queries');

async function getWithId(req, res) {
  const { id } = req.params;

  const item = await db.getAPokemonTypeWithId(id);

  res.render('pokemonTypeDetail', { item });
}

module.exports = {
  getWithId,
};
