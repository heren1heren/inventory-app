pokemon inventory app.

tables:

pokemons {
id is the primary key
name,
img, // how to store img path inside the database?
pokemonType with foreign key references(pokemonTypeId)

}

trainers {
id,
name,
bias VARCHAR (1000),
// creating a rank field based on how many pokemons that person have
img,
pokemons[] with foreign key references [pokemonsId]

}
pokemonTypes {
id
name,
img,

}
