const mongoose = require("mongoose");

// Create a new Mongoose schema
// A schema defines the structure of documents in a collection
let Schema = mongoose.Schema({
	username:{type:String,unique:true},
	password:String
})

// Exporting a Mongoose model based on the defined schema
// This model will be used to interact with the 'User' collection in the database
module.exports = mongoose.model("User",Schema);