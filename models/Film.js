const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
    {
        _id: { 
            type: Number
        },
        title: { 
            type: String
        },
        episode_id: { 
            type: Number
        },
        opening_crawl: { 
            type: String
        },
        director: { 
            type: String
        },
        producer: { 
            type: String
        },
        release_date: { 
            type: String
        },
        characters: [{ 
            type: Number,
            ref: "People"
        }],
        planets: [{ 
            type: Number,
            ref: "Planet"
        }],
        starships: [{ 
            type: Number,
            ref: "Starship"
        }],
        vehicles: [{ 
            type: Number,
            ref: "Vehicle"
        }],
        species: [{ 
            type: Number,
            ref: "Specie"
        }],
        created: { 
            type: String
        },
        edited: { 
            type: String
        }
    }
);

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;