/** how many types of queries do we have?
 * get query
 * post query
 *
 */
const { Result } = require('express-validator');
const pool = require('./pool');

async function getAllPokemons() {
  const { rows } = await pool.query('SELECT * FROM Pokemons');

  return rows;
}
async function getAllTrainers() {
  const { rows } = await pool.query('SELECT * FROM Trainers');
  return rows;
}

async function getAPokemonWithId(id) {
  const { rows } = await pool.query(`SELECT * FROM pokemons WHERE Id = $1`, [
    id,
  ]);
  return rows;
}
async function getATrainerWithId() {
  const { rows } = await pool.query('SELECT * FROM Pokemons');

  return rows;
}

async function insertAPokemon(name, imgUrl, pokemonTypeId) {
  // pokemonTypeId should be determine automatically
  try {
    await pool.query(
      'INSERT INTO Pokemons(name,imgUrl,pokemonTypeId) VALUES ($1, $2, $3)',
      [name, imgUrl, pokemonTypeId]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'inserted';
  }
}
async function insertATrainer(name, bias, age, imgUrl) {
  try {
    await pool.query(
      'INSERT INTO Trainers(name,bias,age,imgUrl,) VALUES ($1, $2, $3, $4)',
      [name, bias, age, imgUrl]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'inserted';
  }
}
async function updateAPokemonWithId(
  id,
  name,
  imgUrl,
  pokemonTypeId,
  trainerId
) {
  console.log(name, imgUrl, pokemonTypeId, trainerId, id);
  try {
    const result = await pool.query(
      `
      UPDATE Pokemons
      SET name = $1,
          imgUrl = $2,
          pokemonTypeId = $3,
          trainerId = $4
      WHERE id = $5
       `,
      [name, imgUrl, pokemonTypeId, trainerId, id]
    );

    console.log(result);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'updated';
  }
}
async function updateATrainerWithId(id, name, bias, age, imgUrl) {
  try {
    await pool.query(
      `
      UPDATE Trainers
      SET name = $1,
          bias = $2,
          age = $3,
          imgUrl = $4
      WHERE id = $5
       `,
      [name, bias, age, imgUrl, id]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'updated';
  }
}
async function deleteAPokemonWithId(id) {
  try {
    await pool.query('Delete  From Pokemons Where id = $1', [id]);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'delete success';
  }
}
async function deleteATrainerWithId(id) {
  try {
    await pool.query('Delete  From Trainers Where id = $1', [id]);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'delete success';
  }
}
module.exports = {
  getAllPokemons,
  getAPokemonWithId,
  insertAPokemon,
  updateAPokemonWithId,
  deleteAPokemonWithId,

  getAllTrainers,
  getATrainerWithId,
  insertATrainer,
  updateATrainerWithId,
  deleteATrainerWithId,
};
