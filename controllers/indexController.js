const db = require('../db/queries');

async function getMainPage(req, res) {
  console.log(req.query);
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
  console.log(category);
  console.log(items);
  res.render('main-page', { category, items, imgClass });
}
async function getFormPage(req, res) {
  const { category } = req.query;

  let formChoice;
  //base on the category -> go fetch corresponding items
  if (category === 'pokemons') {
    formChoice = 'pokemon';
  }
  if (category === 'trainers') {
    formChoice = 'trainer';
  }
  if (category === 'pokemonTypes') {
    formChoice = 'pokemon-type';
  }

  res.render('form-page', { formChoice });
}
module.exports = { getMainPage, getFormPage };
