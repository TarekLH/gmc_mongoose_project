const mongoose = require('mongoose')

let Schema = mongoose.Schema


//* 1.Create a person with this prototype

let PersonPrototype = new Schema({
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 15,
        max: 65
    },
    favoriteFood: {
        type: [String],
        default: 'Chocolate'
    }
})

// Create our model with the above schema
let Person = mongoose.model("Person", PersonPrototype)

// Exporting model
module.exports = Person