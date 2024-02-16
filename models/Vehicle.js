const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        _id: { 
            type: Number
        },
        name: {
            type: String
        },
        model: { 
            type: String
        },
        manufacturer: { 
            type: String
        },
        cost_in_credits: { 
            type: String
        },
        length: { 
            type: String
        },
        max_atmosphering_speed: { 
            type: String
        },
        crew: { 
            type: String
        },
        passengers: { 
            type: String
        },
        cargo_capacity: { 
            type: String
        },
        consumables: { 
            type: String
        },
        vehicle_class: { 
            type: String
        },
        pilots: [{ 
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

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;