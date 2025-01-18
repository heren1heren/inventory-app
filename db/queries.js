/** how many types of queries do we have?
 * get query
 * post query
 *
 */
const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(text, username) {
  await pool.query(
    'INSERT INTO messages(text,username,date) VALUES ($1, $2, NOW())',
    [text, username]
  );
}

module.exports = {
  getAllMessages,
  insertMessage,
};
