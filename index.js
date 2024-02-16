const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const peopleController = require('./controllers/peopleController');
const filmController = require('./controllers/filmController');
const planetController = require('./controllers/planetController');
const specieController = require('./controllers/specieController');
const starshipController = require('./controllers/starshipController');
const vehicleController = require('./controllers/vehicleController');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connection à la BDD établie"))
    .catch((error) => console.log(error));

app.use(express.json());
app.use('/people', peopleController);
app.use('/film', filmController);
app.use('/planet', planetController);
app.use('/specie', specieController);
app.use('/starship', starshipController);
app.use('/vehicle', vehicleController);

app.listen(port, () => console.log(`Le serveur répond sur le port ${port}`));