const express = require('express');
const path = require('node:path');

const pokemonsRouter = require('./routes/pokemonsRouter');
const trainersRouter = require('./routes/trainersRouter');
const indexRouter = require('./routes/indexRouter');
const pokemonTypesRouter = require('./routes/pokemonTypesRouter');
const { upload } = require('./storageEngine');

const app = express();
const assetsPath = path.join(__dirname, 'public'); // using images on web server here
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use('/', indexRouter);
app.use('/pokemons', pokemonsRouter);
app.use('/trainers', trainersRouter);
app.use('/pokemonTypes', pokemonTypesRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
