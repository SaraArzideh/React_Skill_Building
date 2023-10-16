// Importing the 'mongoose' library, which is a MongoDB object modeling tool.
const mongoose = require("mongoose");

// Defining a schema for the 'Session' model.
// A schema defines the structure of the data in MongoDB.
// Schema has three fields: 'user', 'ttl', and 'token'.
let Schema = mongoose.Schema({
	user:{type:String,index:true},
	ttl:Number,
	token:String
})

// Creating and exporting a 'Session' model using the defined schema.
module.exports = mongoose.model("Session",Schema);