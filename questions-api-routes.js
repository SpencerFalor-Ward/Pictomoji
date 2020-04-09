var db = require("../models");

// ajax query to populate emojiDB from emojidex

var queryURL = `https://www.emojidex.com/api/v1/utf_emoji`;
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var arr = JSON.parse(response);
        emojis.bulkCreate(arr)
              .then(function() {
                  return emojis.findAll();
              });
    });

module.exports = function(app) {

     // GET route for getting a question
    app.get("/api/questions/", function(req, res) {
          db.Question.findOne({
            // parameters for selecting question

     })
        .then(function() {
            // render question to question location
        });
    });  
 

};    