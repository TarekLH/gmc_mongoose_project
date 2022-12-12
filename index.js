//Requirements

let mongoose = require('mongoose');
let Person = require('./models/persons');

//Environement variables

require('dotenv').config();
console.log(process.env);

//Database connection

const MongoUri = process.env.MONGO_URI;
mongoose.connect(MongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected Atalas Database Successfully")
});

//let schema = mongoose.Schema;


//* 1.Create a person with this prototype 

//TODO: look at "./models/persons.js"


//* 2.Create and Save a Record of a Model

//? Create document

// let person = new Person({ 
//     fullName: "Tarek Lh", 
//     age: 23, 
//     favoriteFood: ["Chocolate"]
// })

//? Insert document
// person.save()
// .then(function(dbPerson) {
//     console.log(dbPerson)
// })
// .catch(function(err) {
//     console.log(err)
// })


//* 3.Create Many Records with model.create()

//? Create documents

// let arrayOfPersons = [
//     {fullName: 'Racim Mo', age: 23, favoriteFood: ["beef", "pasta", "burgers"]},
//     {fullName: 'Walid Be', age: 25, favoriteFood: ["cheese", "tacos", "crepes"]},
//     {fullName: 'Celia Nd', age: 22, favoriteFood: ["Nems", "Sushis", "Ramens"]},
// ];

//? Insert documents

// Person.create(arrayOfPersons)
// .then(function(dbPersons) {
//     console.log(dbPersons)
// })
// .catch(function(err) {
//     console.log(err)
// })


//* 4.Use model.find() to Search Your Database

// Person.find({})
// .then(function(dbPersons) {
//     console.log(dbPersons)
// })
// .catch(function(err) {
//     console.log(err)
// })


//* 5.Use model.findOne() to Return a Single Matching Document from Your Database

// Person.findOne({ favoriteFood: "Nems"})
// .then(function(dbPersons) {
//     console.log(dbPersons)
// })
// .catch(function(err) {
//     console.log(err)
// })


//* 6.Use model.findById() to Search Your Database By _id

// Person.findById({_id: '6396e4e0c42729ee0afe2e41'})
// .then(function(dbPersons) {
//     console.log(dbPersons)
// })
// .catch(function(err) {
//     console.log(err)
// })


//* 7.Perform Classic Updates by Running Find, Edit, then Save

// Person.findById({_id: '6396de0313e6d5ff467424c7'}, (err, dbPerson) => {
//     let favFood = 'hamburger'
//     dbPerson.favoriteFood.push(favFood);
//     dbPerson.save();
//     if (err) {console.log(err)};
//     console.log(dbPerson);
// })


//* 8.Perform New Updates on a Document Using model.findOneAndUpdate()

// Person.findOneAndUpdate({ fullName: "Celia Nd"}, { age: 20}, {returnDocument: 'after'})
// .then((dbPerson) => {console.log(dbPerson)})
// .catch((err) => {console.log(err)})


//* 9.Delete One Document Using model.findByIdAndRemove

// Person.findByIdAndRemove('6396e4e0c42729ee0afe2e41')
// .then((dbPerson) => {console.log(dbPerson)})
// .catch((err) => {console.log(err)})


//* 10.MongoDB and Mongoose - Delete Many Documents with model.remove()

// Person.remove({fullName: 'Mary'}, (err, db) => {
//     if (err) {console.log(err)};
//     console.log(db);
// })


//* 11.Chain Search Query Helpers to Narrow Search Results

// Person.find({favoriteFood: "Nems"})
// .sort({name: "asc"})
// .limit(2)
// .select('-age')
// .exec((err, db) => {
//     if (err) {console.log(err)};
//     console.log(db);
// })