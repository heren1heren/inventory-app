//? why do I need to run this file first?

const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS pokemons (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  img,
pokemonType with foreign key references

);
CREATE TABLE IF NOT EXISTS trainers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

INSERT INTO pokemons (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log('seeding...');
  // connection process
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/top_users`,
  });

  await client.connect();

  // query code
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
