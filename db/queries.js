/** how many types of queries do we have?
 * get query
 * post query
 *
 */

const pool = require('./pool');

async function getAllPokemons() {
  const { rows } = await pool.query('SELECT * FROM Pokemons');

  return rows;
}
async function getAllPokemonTypes() {
  const { rows } = await pool.query('SELECT * FROM PokemonTypes');

  return rows;
}
async function getAllTrainers() {
  const { rows } = await pool.query('SELECT * FROM Trainers');
  return rows;
}

const getAPokemonWithId = async (id) => {
  // Validate the id parameter
  if (!id) {
    throw new Error('Invalid ID provided');
  }

  try {
    const { rows } = await pool.query(
      `SELECT 
          p.pokemonTypeId,
          p.trainerId,
          p.imgUrl,
          p.id,
          p.description, 
          p.name AS pokemonName, 
          t.name AS trainerName, 
          pt.name AS type,
          pt.id As typeId
       FROM 
          pokemons AS p 
       INNER JOIN 
          trainers AS t ON p.trainerId = t.id 
       INNER JOIN 
          pokemonTypes AS pt ON p.pokemonTypeId = pt.id 
       WHERE 
          p.id = $1`,
      [id]
    );
    // Check if any rows were returned
    if (rows.length === 0) {
      throw new Error('No Pokémon found with the provided ID');
    }

    return rows[0]; // Return the first row (assuming ID is unique)
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error; // Rethrow the error after logging it
  }
};
async function getATrainerWithId(id) {
  if (!id) {
    throw new Error('Invalid ID provided');
  }
  try {
    const { rows } = await pool.query(
      `SELECT 
      t.name AS trainername,
      t.description,
      t.age,
      t.imgurl,
      t.id,
      ARRAY_AGG(p.name) AS pokemons,  
      ARRAY_AGG(p.id) As pokemonids,
      COUNT(p.id) AS pokemon_count 
  FROM trainers AS t
  LEFT JOIN pokemons AS p ON t.id = p.trainerId 
  WHERE t.id = $1
  GROUP BY t.id`, // without this, the query will break
      [id]
    );
    // Check if any rows were returned
    if (rows.length === 0) {
      throw new Error('No Pokémon found with the provided ID');
    }

    return rows[0];
  } catch (error) {
    console.error('Error fetching Trainer details:', error);
    throw error;
  }
}
const getAPokemonTypeWithId = async (id) => {
  // Validate the id parameter
  if (!id) {
    throw new Error('Invalid ID provided');
  }

  try {
    const { rows } = await pool.query(
      `SELECT 
     *       FROM 
          pokemontypes AS pt
       WHERE 
          pt.id = $1`,
      [id]
    );
    // Check if any rows were returned
    if (rows.length === 0) {
      throw new Error('No Pokémon type found with the provided ID');
    }

    return rows[0]; // Return the first row (assuming ID is unique)
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
    throw error; // Rethrow the error after logging it
  }
};
async function insertAPokemon(
  name,
  description,
  imgUrl,
  pokemonTypeId,
  trainerId
) {
  // pokemonTypeId should be determine automatically
  try {
    await pool.query(
      'INSERT INTO Pokemons(name,description,imgUrl,pokemonTypeId,trainerId) VALUES ($1, $2, $3,$4,$5)',
      [name, description, imgUrl, pokemonTypeId, trainerId]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'inserted';
  }
}
async function insertATrainer(name, description, age, imgUrl) {
  try {
    await pool.query(
      'INSERT INTO Trainers(name,description,age,imgUrl) VALUES ($1, $2, $3, $4)',
      [name, description, age, imgUrl]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    console.log(`inserted  a trainer name: ${name}`);
  }
}
async function insertAPokemonType(name, description, imgUrl) {
  try {
    await pool.query(
      'INSERT INTO pokemonTypes(name,description,imgUrl) VALUES ($1, $2, $3)',
      [name, description, imgUrl]
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
  description,
  pokemonTypeId,
  trainerId
) {
  try {
    await pool.query(
      `
      UPDATE Pokemons
      SET name = $1,
          description = $2,
          pokemonTypeId = $3,
          trainerId = $4
      WHERE id = $5
       `,
      [name, description, pokemonTypeId, trainerId, id]
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    return 'updated';
  }
}
async function updateATrainerWithId(id, name, description, age) {
  try {
    await pool.query(
      `
      UPDATE Trainers
      SET name = $1,
          description = $2,
          age = $3
          
      WHERE id = $4
       `,
      [name, description, age, id]
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

  getAllPokemonTypes,
  getAPokemonTypeWithId,
  insertAPokemonType,
};
