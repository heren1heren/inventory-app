const db = require('../db/queries');

async function getAll(req, res) {
  const data = await db.getAllPokemons();

  res.render(`${data}`);
}
async function getWithId(req, res) {
  const data = await db.getAPokemonWithId();

  res.render(`${data}`);
}

async function post(req, res) {
  const data = await db.InsertAPokemon();

  res.render(`${data}`);
}
async function updateWithId(req, res) {
  const data = await db.updateAPokemonWithId();

  res.render(`${data}`);
}
async function deleteWithId(req, res) {
  const data = await db.deleteAPokemonWithId();

  res.render(`${data}`);
}

module.exports = { getAll, getWithId, post, updateWithId, deleteWithId };
