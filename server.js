const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to db

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("successfully connected to db");
}).catch(err => {
    console.log("Could not connect to db");
    process.exit();
})

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Vid-talk"});
});

//Require Users routes
require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3008, () => {
    console.log("Server is listening on port 3008");
});