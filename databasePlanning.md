// what data I want to store?
/\_
pokemon inventory app.

tables:
pokemons {
id is the primary key
name,
img,
pokemonType with foreign key references

<!-- pokemonAttributes, -->

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
