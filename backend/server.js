const express= require ("express");

// Create an Express application
let app= express();

//DATABASE: Create an empty array to serve as our database
let database= [];
// Initialize an ID counter for items in the database
let id = 100;

//BODYPARSER JSON: Middleware: Parse incoming JSON data
app.use(express.json());
let port = process.env.PORT||3001

//REST API: Define REST API endpoints

// GET request to retrieve the list of shopping items
app.get("/api/shopping" ,function(req,res){
    console.log(req);
    return res.status(200).json(database);
})

// POST request to add a new shopping item
app.post("/api/shopping", function(req,res){
    // Check if the request body is empty or missing 'type' property
    if (!req.body){
        return res.status(400).json({"message":"Bad Request"})
    }
    if (!req.body.type){
        return res.status(400).json({"message":"Bad Request"})
    }
    // Create a new item object using data from the request body and increment the ID
    let item={
        "type":req.body.type,
        "count":req.body.count,
        "price":req.body.price,
        "id":id        
    }
    id++;   // Increment the ID for the next item
    // Add the new item to the database
    database.push(item);
    // Return the newly created item as a JSON response with a status code 201 (Created)
    return res.status(201).json(item);
})

// DELETE request to remove a shopping item by ID
app.delete("api/shopping/:id",function(req,res){
    let tempId=parseInt(req.params.id,10);
    // Iterate through the database to find and remove the item with the matching ID
    for(let i=0;i<database.length;i++){
        if(database[i].id===tempId){
            database.splice(i,1);
            return res.status(200).json({"Message":"succsess"});
        }
    }
    return res.status(404).json({"Message":"Not found"});
})

// PUT request to update a shopping item by ID
app.put("/api/shopping/:id",function(req,res){
    if(!req.body){
        return res.status(400).json({"message":"Bad Request"})
    }
    if(!req.body.type){
        return res.status(400).json({"message":"Bad Request"})
    }
    let tempId=parseInt(req.params.id,10);

    // Create a new item object using data from the request body and the provided ID
    let item={
        "type":req.body.type,
        "count":req.body.count,
        "price":req.body.price,
        "id":tempId
    }
    // Iterate through the database to find and update the item with the matching ID
    for(let i=0;i<database.length;i++){
        if(database[i].id===tempId){
            database.splice(i,1,item);
            return res.status(200).json({"Message":"succsess"});
        }
    }
    return res.status(404).json({"Message":"Not found"});
})
console.log("Running in port",port);
app.listen(port);