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
  const data = await db.InsertAPokemon();

  res.send(`${data}`);
}
async function updateWithId(req, res) {
  const data = await db.updateAPokemonWithId();

  res.send(`${data}`);
}
async function deleteWithId(req, res) {
  const data = await db.deleteAPokemonWithId();

  res.send(`${data}`);
}

module.exports = {
  getAll,
  getWithId,
  post,
  updateWithId,
  deleteWithId,
};
