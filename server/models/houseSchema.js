const mongoose = require('mongoose');


// User Schema Or Document Structure
const HouseSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true,
    },
    url : {
        type : String,
        required : true
    }
})


// Create Model
const House = mongoose.model("House",HouseSchema);

module.exports = House;