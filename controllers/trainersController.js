const db = require('../db/queries');

async function getAll(req, res) {
  const data = await db.getAllTrainers();

  res.send(`${data}`);
}
async function getWithId(req, res) {
  const { id } = req.params;
  const data = await db.getATrainerWithId(id);

  res.send(`${data}`);
}

async function post(req, res) {
  const { name, bias, age, imgUrl } = req.body;
  console.log(req.body);
  const data = await db.insertATrainer(name, bias, age, imgUrl);

  res.send(`${data}`);
}
async function updateWithId(req, res) {
  const { id } = req.params;
  const { name, bias, age, imgUrl } = req.body;
  const data = await db.updateATrainerWithId(id, name, bias, age, imgUrl);

  res.send(`${data}`);
}
async function deleteWithId(req, res) {
  const { id } = req.params;
  const data = await db.deleteATrainerWithId(id);

  res.send(`${data}`);
}

module.exports = { getAll, getWithId, post, updateWithId, deleteWithId };
