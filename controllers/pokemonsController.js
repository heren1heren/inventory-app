const db = require('../db/queries');

async function getWithId(req, res) {
  const { id } = req.params;
  const item = await db.getAPokemonWithId(id);

  res.render('pokemonDetail', { item });
}
async function getUpdateForm(req, res) {
  const { id } = req.params;
  const item = await db.getAPokemonWithId(id);
  console.log(item);
  const trainers = await db.getAllTrainers();
  const types = await db.getAllPokemonTypes();
  res.render('pokemon-update-form', { item, trainers, types });
}

async function post(req, res) {
  // req.body is not accessible
  const { name, description, pokemonTypeId, trainerId } = req.body;

  //  compute imgUrl = req.file aoesuthaoseutheoasnuc,;.uwkjq
  const imgUrl = `/img/pokemons/${req.file.originalname}`;
  console.log(req.body);
  const result = await db.insertAPokemon(
    name,
    description,
    imgUrl,
    pokemonTypeId,
    trainerId
  );
  res.redirect('/?category=pokemons');
}
async function updateWithId(req, res) {
  const { name, description, pokemonTypeId, trainerId } = req.body;
  const { id } = req.params;
  console.log(' Pokémon with ID:', req.params.id);
  console.log('Request body:', req.body); // why is my data isn't going through?
  await db.updateAPokemonWithId(
    id,
    name,
    description,
    pokemonTypeId,
    trainerId
  );

  res.redirect('/');
}
async function deleteWithId(req, res) {
  const { id } = req.params;
  const data = await db.deleteAPokemonWithId(id);

  res.redirect('/');
}

module.exports = {
  getWithId,
  getUpdateForm,
  post,
  updateWithId,
  deleteWithId,
};
