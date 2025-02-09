const db = require('../db/queries');

async function getWithId(req, res) {
  const { id } = req.params;
  const item = await db.getATrainerWithId(id);
  res.render('trainerDetail', { item });
}
async function getUpdateForm(req, res) {
  const { id } = req.params;
  const item = await db.getATrainerWithId(id);
  console.log(item);
  res.render('trainer-update-form', { item });
}

async function post(req, res) {
  const { name, description, age } = req.body;
  const imgUrl = `/img/trainers/${req.file.originalname}`;

  await db.insertATrainer(name, description, age, imgUrl);
  res.redirect('/?category=trainers');
}
async function updateWithId(req, res) {
  const { id } = req.params;
  const { name, description, age } = req.body;
  await db.updateATrainerWithId(id, name, description, age);

  res.redirect('/');
}
async function deleteWithId(req, res) {
  const { id } = req.params;
  await db.deleteATrainerWithId(id);

  res.redirect('/');
}

module.exports = { getWithId, getUpdateForm, post, updateWithId, deleteWithId };
