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
async function updateWithId(req, res) {
  const { id } = req.params;
  const { name, bias, age, imgUrl } = req.body;
  const data = await db.updateAPokemonTypeWithId(id, name, bias, age, imgUrl);

  res.send(`${data}`);
}

module.exports = {
  getWithId,
  post,
};
