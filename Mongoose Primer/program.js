require("./model/author");
require("./model/book");
require("./model/bookinstance");
var mongoose = require("mongoose");
var Author = mongoose.model("Author");
var Book = mongoose.model("Book");
var Bookinstance = mongoose.model("BookInstance");

function start(){
console.log("hello from Program");
// Used for own testing!
}

exports.start = start;