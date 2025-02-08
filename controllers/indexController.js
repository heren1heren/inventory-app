const db = require('../db/queries');

async function getMainPage(req, res) {
  const { category } = req.query;

  let items = [];
  let imgClass = '';
  //base on the category -> go fetch corresponding items
  if (category === 'pokemons') {
    items = await db.getAllPokemons();
    imgClass = 'pokemon';
  }
  if (category === 'trainers') {
    items = await db.getAllTrainers();
    imgClass = 'trainer';
  }
  if (category === 'pokemonTypes') {
    items = await db.getAllPokemonTypes();
    imgClass = 'pokemon-type';
  }

  res.render('main-page', { category, items, imgClass });
}
async function getFormPage(req, res) {
  const { category } = req.query;
  let trainers = [];
  let types = [];
  let formChoice;

  if (category === 'pokemons') {
    // need to display pokemonType and pokemonTypeId
    trainers = await db.getAllTrainers();
    types = await db.getAllPokemonTypes();
    formChoice = 'pokemon';
  }
  if (category === 'trainers') {
    formChoice = 'trainer';
  }
  if (category === 'pokemonTypes') {
    formChoice = 'pokemon-type';
  }

  res.render('form-page', { formChoice, trainers, types });
}
module.exports = { getMainPage, getFormPage };
