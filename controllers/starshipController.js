const express = require('express');
const Starship = require('../models/Starship');
const router = express.Router();

async function fecthAndStoreData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (const item of data.results) { 
            item._id = item.url.match(/\d+/)[0];
            item.pilots = item.pilots.map(film => film.match(/\d+/)[0]);
            item.films = item.films.map(film => film.match(/\d+/)[0]);

            const newPerson = new Starship(item);
            await newPerson.save();
        }

        if (data.next) {
            await fecthAndStoreData(data.next);
        }
    } catch (error) {
        console.error(error);
    }
}

router.post('/new', async(req, res) => {
    try {
        url = "https://swapi.dev/api/starships/";
        fecthAndStoreData(url);
        return res
            .status(201)
            .json({ status: 201 });
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

module.exports = router;
