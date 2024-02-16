const mongoose = require("mongoose");

const specieSchema = new mongoose.Schema(
    {
        _id: { 
            type: Number
        },
        name: { 
            type: String
        },
        classification: { 
            type: String
        },
        designation: { 
            type: String
        },
        average_height: { 
            type: String
        },
        skin_color: { 
            type: String
        },
        hair_color: { 
            type: String
        },
        eye_color: { 
            type: String
        },
        average_lifespan: { 
            type: String
        },
        homeworld: { 
            type: Number,
            ref: "Planet"
        },
        langage: { 
            type: String
        },
        people: [{ 
            type: Number,
            ref: "People"
        }],
        films: [{ 
            type: Number,
            ref: "Film"
        }],
        created: { 
            type: String
        },
        edited: { 
            type: String
        }
    }
);

const Specie = mongoose.model('Specie', specieSchema);
module.exports = Specie;