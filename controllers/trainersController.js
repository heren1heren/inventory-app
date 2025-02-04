const db = require('../db/queries');

async function getAll(req, res) {
  const data = await db.getAllTrainers();

  res.send(`${data}`);
}
async function getWithId(req, res) {
  const data = await db.getATrainerWithId();

  res.send(`${data}`);
}

async function post(req, res) {
  const data = await db.InsertATrainer();

  res.send(`${data}`);
}
async function updateWithId(req, res) {
  const data = await db.updateATrainerWithId();

  res.send(`${data}`);
}
async function deleteWithId(req, res) {
  const data = await db.deleteATrainerWithId();

  res.send(`${data}`);
}

module.exports = { getAll, getWithId, post, updateWithId, deleteWithId };
