const multer = require('multer');
const path = require('path');
// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir;
    if (req.originalUrl === '/pokemons/add') {
      dir = path.join(__dirname, 'public', 'img', 'pokemons'); // Adjust the path as needed
    }
    if (req.originalUrl === '/trainers/add') {
      dir = path.join(__dirname, 'public', 'img', 'trainers'); // Adjust the path as needed
    }
    if (req.originalUrl === '/pokemonTypes/add') {
      dir = path.join(__dirname, 'public', 'img', 'pokemonTypes'); // Adjust the path as needed
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

// Initialize upload variable
const upload = multer({ storage: storage });

module.exports = { upload };
