const express = require("express");
const itemModel = require("../models/item");

const router = express.Router();

//DATABASES
// Defining an in-memory database and a unique ID counter

let database = [];
let id = 100;

// REST API routes
// Route to retrieve shopping items for the current user

router.get("/shopping",function(req,res) {
	
	// Constructing a query to find items for the current user
	let query = {"user":req.session.user}
	itemModel.find(query).then(function(items) {
		
		// Responding with a 200 status and JSON array of items
		return res.status(200).json(items);
	}).catch(function(error) {
		
        // Logging an error message and respond with a 500 status on failure
		console.log("Failed to find items. Reason",error);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
})

// Route to add a new shopping item for the current user
router.post("/shopping", function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad Request"})
	}

	// Creating a new item based on the request body and the current user
	let item = new itemModel({
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"user":req.session.user
	})

    // Saving the item to the database, and respond with a 201 status and the created item
	item.save().then(function(item) {
		return res.status(201).json(item);
	}).catch(function(error) {
		console.log("Failed to add new item. Reason",error);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
	
})

// Route to delete a shopping item by its ID for the current user
router.delete("/shopping/:id",function(req,res) {
	itemModel.deleteOne({"_id":req.params.id,"user":req.session.user}).then(function() {
		return res.status(200).json({"Message":"Success"});
	}).catch(function(error) {
		console.log("Failed to remove item. Reason",error);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
})

// Route to update a shopping item by its ID for the current user
router.put("/shopping/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad Request"})
	}

	// Define the updated item based on the request body and the current user
	let item = {
		"type":req.body.type,
		"count":req.body.count,
		"price":req.body.price,
		"user":req.session.user
	}
    // Replace the item matching the provided ID and current user with the updated item
	itemModel.replaceOne({"_id":req.params.id,"user":req.session.user},item).then(function() {
		return res.status(204).json({"Message":"Success"})
	}).catch(function(error) {
		console.log("Failed to edit item. Reason",error);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
})

module.exports = router;