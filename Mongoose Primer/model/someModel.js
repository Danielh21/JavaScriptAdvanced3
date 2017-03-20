
var mongoose = require("mongoose");


// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );