const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
    {
        _id: { 
            type: Number
        },
        name: { 
            type: String
        },
        height: { 
            type: String
        },
        mass: { 
            type: String
        },
        hair_color: { 
            type: String
        },
        skin_color: { 
            type: String
        },
        eye_color: { 
            type: String
        },
        birth_year: { 
            type: String
        },
        gender: { 
            type: String
        },
        homeworld: { 
            type: Number,
            ref: "Planet"
        },
        films: [{ 
            type: Number,
            ref: "Film"
        }],
        species: [{ 
            type: Number,
            ref: "Specie"
        }],
        vehicules: [{ 
            type: Number,
            ref: "Vehicle"
        }],
        starships: [{ 
            type: Number,
            ref: "Starship"
        }],
        created: { 
            type: String
        },
        edited: { 
            type: String
        }
    }
);

const People = mongoose.model('People', peopleSchema);
module.exports = People;