const db = require('../db/queries');

async function getAll(req, res) {
  const data = await db.getAllPokemons();
  res.send(data);
}
async function getWithId(req, res) {
  const data = await db.getAPokemonWithId(1);
  res.send(data);
}

async function post(req, res) {
  // req.body is not accessible
  const { name, imgUrl, pokemonTypeId } = req.body;
  console.log(req.body);
  const result = await db.insertAPokemon(name, imgUrl, pokemonTypeId);
  res.send(`${result}`);
}
async function updateWithId(req, res) {
  const { name, imgUrl, pokemonTypeId } = req.body;
  const { id } = req.params;
  const data = await db.updateAPokemonWithId(id, 'aeou', 'aoeua', 1, 3);
  // const data = await db.updateAPokemonWithId(id, name, imgUrl, pokemonTypeId);

  res.send(`${data}`);
}
async function deleteWithId(req, res) {
  const { id } = req.params;
  const data = await db.deleteAPokemonWithId(id);

  res.send(`${data}`);
}

module.exports = {
  getAll,
  getWithId,
  post,
  updateWithId,
  deleteWithId,
};
