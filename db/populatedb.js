// specify what type of data does the user table has ?
/*
how many tables does the data base has?
 one table: messages {
    index
    text
    user
    date
 }
*/

const { Client } = require('pg');

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  date DATE
  

);

INSERT INTO messages (text, username, date) 
VALUES
  ('hello there','heren' , NOW()),
  ('hi there','cow' , NOW()),
  ('greeting!', 'chicken' , NOW());

`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: 'postgresql://heren:aoeu&[{}@localhost:5432/top_users',
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
