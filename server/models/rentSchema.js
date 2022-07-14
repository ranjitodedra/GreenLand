const mongoose = require('mongoose');


// User Schema Or Document Structure
const RentSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    title1 : {
        type : String,
        required : true,
    },
    // address : {
    //     type : String,
    //     required : true
    // }
})


// Create Model
const Rent = mongoose.model("Rent",RentSchema);

module.exports = Rent;