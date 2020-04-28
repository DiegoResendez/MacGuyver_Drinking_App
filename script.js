

let cocktailURL = "https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_67a71546-a41f-4dd0-9c04-f54fa8f375ef"

    var searchtheapiguy = function(cocktail) {
      var queryURL = "";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      });
    };
