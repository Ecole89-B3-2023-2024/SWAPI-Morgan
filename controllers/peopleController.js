const express = require('express');
const People = require('../models/People');
const router = express.Router();

async function fecthAndStoreData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (const item of data.results) { 
            item._id = item.url.match(/\d+/)[0];
            item.homeworld = item.homeworld.match(/\d+/)[0];
            item.films = item.films.map(film => film.match(/\d+/)[0]);
            item.species = item.species.map(film => film.match(/\d+/)[0]);
            item.vehicles = item.vehicles.map(film => film.match(/\d+/)[0]);
            item.starships = item.starships.map(film => film.match(/\d+/)[0]);

            const newPerson = new People(item);
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
        url = "https://swapi.dev/api/people/";
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

router.get("/:id", async (req, res) => {
    try {
        const peopleWithFilms = await People.findById(req.params.id);

        if (!peopleWithFilms) {
            return res
                .status(404)
                .json({ status: 404, message: "le film recherché n'existe pas)" })
        }
        return res
            .status(200)
            .json({ status: 200, result: peopleWithFilms })
    } catch (err) {
        return res
            .status(500)
            .json({ status: 500, message: err.message })
    }
})

module.exports = router;
