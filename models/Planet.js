const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
    {
        _id: { 
            type: Number
        },
        name: { 
            type: String
        },
        rotation_period: { 
            type: String
        },
        orbital_period: { 
            type: String
        },
        diameter: { 
            type: String
        },
        climate: { 
            type: String
        },
        gravity: { 
            type: String
        },
        terrain: { 
            type: String
        },
        surface_water: { 
            type: String
        },
        population: { 
            type: String
        },
        residents: [{ 
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

const Planet = mongoose.model('Planet', planetSchema);
module.exports = Planet;