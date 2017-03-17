var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Joke = mongoose.model("Joke");


router.get('/jokes', (req, res, next)=> {
  Joke.find({}, function(err, data){
      if(err) throw err;
      res.send(data);
  });
});

router.get('/jokes/:id', (req, res, next)=> {
  var id = req.params.id;
  Joke.findById({_id : id}, function(err,data){
    if(err) throw err;
    var json = JSON.stringify(data);
    console.log(json)
    res.send(json);
  })
});

router.post('/jokes', (req, res, next)=> {
  var newJoke = req.body;
  Joke.create(newJoke, function(err,data){
    if(err) throw err;
    res.send(data);
  });

});

router.put('/jokes/:id', (req, res, next)=> {
  var id = req.params.id
  var jokeToBeEdited = req.body;
  Joke.findById({_id: id}, function(err,joke){
    // finds the joke
    if(err) throw err;
    // Sets the Joke to the New Joke
    joke.joke = jokeToBeEdited.joke;

        joke.save(function(err,data){
          // Saves the new joke and sends it back as a response
        if(err) throw err;
        res.send(data);
                                  });
    })
});

router.delete('/jokes/:id', (req, res, next)=> {
  var id = req.params.id;
  Joke.findByIdAndRemove({_id: id},function(err,data){
    if(err) throw err;
    console.log(JSON.stringify(data));
    res.statusCode = 204;
    res.send();
  });

});


module.exports = router;