

let cocktailURL = "https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_67a71546-a41f-4dd0-9c04-f54fa8f375ef"

    let searchtheapiguy = function(cocktail) {
      let queryURL = "https://the-cocktail-db.p.rapidapi.com/list.php";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      }); console.log(response)
    };

