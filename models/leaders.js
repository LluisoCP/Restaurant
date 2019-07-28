const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

let Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;