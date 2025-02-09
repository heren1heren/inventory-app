const db = require('../db/queries');

async function getWithId(req, res) {
  const { id } = req.params;

  const item = await db.getAPokemonTypeWithId(id);

  res.render('pokemonTypeDetail', { item });
}

async function post(req, res) {
  const { name, description } = req.body;
  //  compute imgUrl = req.file aoesuthaoseutheoasnuc,;.uwkjq

  const imgUrl = `/img/pokemonTypes/${req.file.originalname}`;

  await db.insertAPokemonType(name, description, imgUrl);
  res.redirect('/?category=pokemonTypes');
}

module.exports = {
  getWithId,
  post,
};
