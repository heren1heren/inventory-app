const db = require('../db/queries');

async function getMainPage(req, res) {
  res.render('main-page');
}
module.exports = { getMainPage };
