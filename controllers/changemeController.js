const db = require('../db/queries');

async function getUsers(req, res) {
  const data = await db.getAllMessages();

  res.render('changeme');
}
// async function getForm(req, res) {
//   res.render('form', { title: 'message Form' });
// }
// async function postForm(req, res) {
//   console.log(req.body);

//   const { username, text } = req.body;
//   await db.insertMessage(text, username);
//   res.redirect('/');
// }

module.exports = {
  getUsers,
  getForm,
  postForm,
};
