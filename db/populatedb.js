// ? why do I need to run this file first?

const { Client } = require('pg');
require('dotenv').config();

// if the sql queries are long, consider extract them into a file to have sql intellision
const SQL = `
CREATE TABLE IF NOT EXISTS PokemonTypes (
  Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  ImgURL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Trainers (
  TrainerId INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  Bias VARCHAR(1000),
  Age INTEGER,
  ImgURL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Pokemons (
  Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  ImgURL VARCHAR(255),
  PokemonTypeID INTEGER,
  TrainerId INTEGER,
  FOREIGN KEY (PokemonTypeID) REFERENCES PokemonTypes(Id),
  FOREIGN KEY (TrainerId) REFERENCES Trainers(TrainerId)
);

INSERT INTO PokemonTypes (Name, ImgURL)
VALUES
  ('fire', '../public/img/pokemonTypes/fire.png'),
  ('water', '../public/img/pokemonTypes/water.jpg'),
  ('plant', '../public/img/pokemonTypes/plant.jpeg'),
  ('ground', '../public/img/pokemonTypes/ground.png');

INSERT INTO Trainers (Name, Bias, Age, ImgURL) 
VALUES
  ('ash', 'He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master. His first Pokémon was a Pikachu that he received from Professor Oak after arriving late at his laboratory.', 18, 'public/img/trainers/ash.webp'),
  ('brendan', 'Brendan (Japanese: ユウキ Yuuki) is the male choice for the player character in Pokémon Ruby, Sapphire, and Emerald and their Generation VI remakes, Omega Ruby and Alpha Sapphire.', 18, 'public/img/trainers/brendan.webp'),
  ('leaf', 'Leaf (Japanese: リーフ Leaf) is the female player character in Pokémon FireRed and LeafGreen. Her male counterpart is Red. As such, she—alongside Red—is known throughout the Pokémon world as the Champion from Pallet Town, as well as a living legend for her defeat of Team Rocket in Kanto during her quest.', 18, 'public/img/trainers/leaf.webp'),
  ('liko', 'Liko (Japanese: リコ Liko) is one of the protagonists of Pokémon Horizons: The Series, as well as the first female protagonist in the Pokémon animated series. She owns a mysterious pendant, which was given to her by her grandmother Diana, which was later revealed to be a hibernating Terapagos.', 18, 'public/img/trainers/liko.webp');

INSERT INTO Pokemons (Name, ImgURL, PokemonTypeID, TrainerId) 
VALUES
  ('charmander', 'public/img/pokemons/Charmander.png', (SELECT Id FROM PokemonTypes WHERE Name = 'fire'), 1),
  ('squirtle', 'public/img/pokemons/Squirtle.png', (SELECT Id FROM PokemonTypes WHERE Name = 'water'), 2),
  ('oddish', 'public/img/pokemons/Oddish.png', (SELECT Id FROM PokemonTypes WHERE Name = 'plant'), 3),
  ('ground-elephant', 'public/img/pokemons/ground-elephant.png', (SELECT Id FROM PokemonTypes WHERE Name = 'ground'), 4);
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
