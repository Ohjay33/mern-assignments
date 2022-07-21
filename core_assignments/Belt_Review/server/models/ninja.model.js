const mongoose = require ("mongoose");

// Model changes with project!
// define what my table will look like for ninja. this example (name, numProjects, isVeteran, imgUrl, graduationDate)
const NinjaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Nme must be at least two characters long!"]
    },
    numProjects: {
        type: Number,
        required: [true, "Num projects is needed"],
        min: [0, "0 is the least you can have!"]
    },
    imgUrl: {
        type: String,
        required: [true, " We need to have an image!"]
    },

    // not required added cause i want to
    graduationDate: {
        type: Date
    },
    isVeteran: {
        type: Boolean
    }

}, {timestamps: true})


 
const Ninja = mongoose.model('Ninja', NinjaSchema);
// naming my table                   Schema is from the NinjaSchema up top
 
module.exports = Ninja;