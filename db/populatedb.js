// ? why do I need to run this file first?

const { Client } = require('pg');
require('dotenv').config();

// if the sql queries are long, consider extract them into a file to have sql intellision
const SQL = `
CREATE TABLE IF NOT EXISTS PokemonTypes (
  Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  Description VARCHAR(1000),
  ImgURL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Trainers (
  Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  Description VARCHAR(1000),
  Age INTEGER,
  ImgURL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Pokemons (
  Id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Name VARCHAR(255),
  Description VARCHAR(1000),
  ImgURL VARCHAR(255),
  PokemonTypeID INTEGER,
  TrainerId INTEGER,
  FOREIGN KEY (PokemonTypeID) REFERENCES PokemonTypes(Id),
  FOREIGN KEY (TrainerId) REFERENCES Trainers(Id)
);

INSERT INTO PokemonTypes (Name,Description, ImgURL)
VALUES
  ('fire', 'Fire is one of the three basic elemental types along with Water and Grass, which constitute the three starter Pokémon. ', '/img/pokemonTypes/fire.png'),
  ('water', 'Water is one of the three basic elemental types along with Fire and Grass, which constitute the three starter Pokémon.', '/img/pokemonTypes/water.jpg'),
  ('plant', 'Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter Pokémon. ', '/img/pokemonTypes/plant.jpeg'),
  ('ground','Ground is one of the strongest types offensively: it is super-effective against five other types (as is Fighting) and Earthquake is one of the strongest moves in the game', '/img/pokemonTypes/ground.png');

INSERT INTO Trainers (Name, Description, Age, ImgURL) 
VALUES
  ('ash', 'He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master. His first Pokémon was a Pikachu that he received from Professor Oak after arriving late at his laboratory.', 18, '/img/trainers/ash.webp'),
  ('brendan', 'Brendan (Japanese: ユウキ Yuuki) is the male choice for the player character in Pokémon Ruby, Sapphire, and Emerald and their Generation VI remakes, Omega Ruby and Alpha Sapphire.', 18, '/img/trainers/brendan.webp'),
  ('leaf', 'Leaf (Japanese: リーフ Leaf) is the female player character in Pokémon FireRed and LeafGreen. Her male counterpart is Red. As such, she—alongside Red—is known throughout the Pokémon world as the Champion from Pallet Town, as well as a living legend for her defeat of Team Rocket in Kanto during her quest.', 18, '/img/trainers/leaf.webp'),
  ('liko', 'Liko (Japanese: リコ Liko) is one of the protagonists of Pokémon Horizons: The Series, as well as the first female protagonist in the Pokémon animated series. She owns a mysterious pendant, which was given to her by her grandmother Diana, which was later revealed to be a hibernating Terapagos.', 18, '/img/trainers/liko.webp');

INSERT INTO Pokemons (Name, Description, ImgURL, PokemonTypeID, TrainerId) 
VALUES
  ('charmander','Charmander is a bipedal, reptilian Pokémon. Most of its body is colored orange, while its underbelly is light yellow and it has blue eyes. It has a flame at the end of its tail, which is said to signify its health.', '/img/pokemons/charmander.png', (SELECT Id FROM PokemonTypes WHERE Name = 'fire'), 1),
  ('pikachu','Pikachu  is the cutest pokemon lol', '/img/pokemons/pikachu.png', (SELECT Id FROM PokemonTypes WHERE Name = 'fire'), 1),
  ('squirtle','Squirtle is a bipedal, reptilian Pokémon. It has a blue body with purple eyes, a light brown belly, and a tough red-brown shell on its back. It has a long tail that curls into a spiral.', '/img/pokemons/squirtle.png', (SELECT Id FROM PokemonTypes WHERE Name = 'water'), 2),
  ('oddish', 'Oddish is a Pokémon that resembles a blue plant bulb or a root vegetable. It has a round body, beady red eyes, a small mouth, and ovoid feet. Five large, green leaves sprout from its head. ' ,'/img/pokemons/oddish.png', (SELECT Id FROM PokemonTypes WHERE Name = 'plant'), 3),
  ('ground-elephant', 'Phanpy is a small, horizon-blue proboscid Pokémon that resembles a baby elephant. It has large, floppy ears, which it uses as fans to cool itself. ', '/img/pokemons/ground-elephant.png', (SELECT Id FROM PokemonTypes WHERE Name = 'ground'), 4);
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
