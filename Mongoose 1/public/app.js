var app = angular.module('mainApp', []);


app.controller("Ctrl", function($http){
    var self = this;
    self.hej = "Hej";
    self.jokes = [];

    //functions Declarations:
    self.getAll = getAll;
    self.postJoke = postJoke;
    self.deleteJoke = deleteJoke;
    self.editJoke = editJoke;


    //To Do when entered:
    self.getAll();


    //functions
    function getAll(){
        $http({
            method: 'GET',
            url: '/api/jokes'
        }).then(function successCallback(response) {
            var array = response.data;
            self.jokes = array;
        }, function errorCallback(response) {
            alert(response.code);
        });
    };

    function postJoke(){
    var jokeObj = new Object();
    jokeObj.joke = document.getElementById("newJoke").value;
    jokeObj.type = [ 
        "hej", 
        "Nothing", 
        "someone"
    ];
    jokeObj.reference = {"author" : "Me", "link" : "To what?"}
    $http({
            method: 'POST',
            url: '/api/jokes',
            data: jokeObj
        }).then(function successCallback(response) {
            console.log("Succes Post");
            document.getElementById("newJoke").value = "";
            doUpdate();
        }, function errorCallback(response, error) {
            alert(response.code);
        });
    };

    function deleteJoke(id){
        $http({
            method: 'DELETE',
            url: '/api/jokes/' +id
        }).then(function successCallback(response) {
            doUpdate();
        }, function errorCallback(response) {
            alert(response.code);
        });
    };
    

    function editJoke(id){
        console.log("stop");
        var newJoke = document.getElementById(id + "bl").value;
        var joke = new Object();
        joke.joke = newJoke;
        $http({
            method: 'PUT',
            url: '/api/jokes/' +id,
            data: joke
        }).then(function successCallback(response) {
            console.log("Succes at Updating!");
            doUpdate();
        }, function errorCallback(response) {
            alert(response.code);
        });
        };
    

    function doUpdate(){
        setTimeout(function(){
            self.getAll();
        }, 1000);
    }


});