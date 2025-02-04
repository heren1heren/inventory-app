pokemon inventory app.

tables:

pokemons {
id is the primary key
name,
img, // how to store img path inside the database?
pokemonType with foreign key references

}

trainers {
id,
name,
experience,
fame,
img,
pokemons[] with foreign key references,

}
pokemonTypes {
name,
img,
rarity,

}
