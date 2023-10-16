// Importing the Mongoose library to work with MongoDB
const mongoose = require("mongoose");

// Defining a Mongoose schema for the 'Item' model
let Schema = mongoose.Schema({
	user:{type:String,index:true},
	type:String,
	count:Number,
	price:Number
})

// Creating a virtual property 'id' for the schema
Schema.virtual("id").get(function() {
	return this._id
})

// Exporting the Mongoose model 'Item' by using the defined schema
module.exports = mongoose.model("Item",Schema);