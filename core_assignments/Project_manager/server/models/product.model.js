const mongoose = require ("mongoose");

// Model changes with project!
// define what my table will look like for ninja. this example (name, numProjects, isVeteran, imgUrl, graduationDate)
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Nme must be at least two characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is needed"],
        min: [0, "0 is the least you can have!"]
    },
    description: {
        type: String,
        required: [true, " description is required!"],
        minlength: [3, "description must be at least 3 characters long. "]
    },

    // // not required added cause i want to
    // graduationDate: {
    //     type: Date
    // },
    // isVeteran: {
    //     type: Boolean
    // }

}, {timestamps: true})


 
const Product = mongoose.model('Product', ProductSchema);
// naming my table                   Schema is from the NinjaSchema up top
 
module.exports = Product;