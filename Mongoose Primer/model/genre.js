var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema({
name: {type: String, min:3, max: 100}
});

GenreSchema.virtual("url")
.get(function(){
return '/genre/' + this._id;
});

mongoose.model("Genre", GenreSchema);