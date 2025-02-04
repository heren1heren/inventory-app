const db = require('../db/queries');

async function getAll(req, res) {
  const data = await db.getAllMessages();

  res.render('get all');
}
async function getWithId(req, res) {
  const data = await db.getAllMessages();

  res.render('get with id');
}

async function post(req, res) {
  const data = await db.getAllMessages();

  res.render('posted');
}
async function updateWithId(req, res) {
  const data = await db.getAllMessages();

  res.render('updated');
}
async function deleteWithId(req, res) {
  const data = await db.getAllMessages();

  res.render('deleted');
}

module.exports = { getAll, getWithId, post, updateWithId, deleteWithId };
