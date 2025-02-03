/** how many types of queries do we have?
 * get query
 * post query
 *
 */
const pool = require('./pool');

async function getAllPokemons() {
  // const { rows } = await pool.query('SELECT * FROM messages');
  return 'get all';
}

async function getAPokemonWithId() {
  return 'get with id';
}

async function insertAPokemon(text, username) {
  // await pool.query(
  //   'INSERT INTO messages(text,username,date) VALUES ($1, $2, NOW())',
  //   [text, username]
  // );
  return 'insert success';
}
async function updateAPokemonWithId(text, username) {
  // await pool.query(
  //   'Delete  From WHere  VALUES ($1, $2, NOW())',
  //   [text, username]
  // );
  return 'update success';
}
async function deleteAPokemonWithId(text, username) {
  // await pool.query(
  //   'Delete  From WHere  VALUES ($1, $2, NOW())',
  //   [text, username]
  // );
  return 'delete success';
}

module.exports = {
  getAllPokemons,
  getAPokemonWithId,
  insertAPokemon,
  updateAPokemonWithId,
  deleteAPokemonWithId,
};
