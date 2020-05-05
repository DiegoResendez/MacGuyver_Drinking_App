
  // let htmlImageElement = new Image(width, height);
  // let myImage = new Image(100, 200);
  // myImage.src = 'picture.jpg';
  // document.body.appendChild(myImage)


// Needs to be added to an input field to search cocktails by name.  Search returns all information for searched drink.
  let lookupFullCocktailDetails = function () {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=11007",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(lookupFullCocktailDetails)



//provides a list of 100 ingredients.  Could maybe be used as a drop-down menu???  
let listOfIngredients = function () {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(listOfIngredients)


// provides random cocktail with list of ingredients
let lookupRandomCocktail = function(){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(lookupRandomCocktail)


// Needs to be added to an input field to search cocktails by name.  Search returns all drinks for requested liquor/ingredient.
let searchByIngredient = function(){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(searchByIngredient)


//returns list of 100 drinks objects.  Might need to be connected to an input field.  Drink objects contain "strDrink": NameOfDrink; "strDrinkThumb": ImageOfDrink; "idDrink": DrinkIDNumber
let filterByCategory = function(){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(filterByCategory)



//Image API.  Does not seem necessary as we gave images in filterByCategory, but we do need 2 APIs for this project.
let searchImages = function () {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=Taylor%20Swift&safeSearch=false",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
$("#").click(searchImages)







//Tumblr Image API that did not want to work.
  //   let settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://tumbimg.p.rapidapi.com/tumblr-image-search/?q=manhattan",
    //     "method": "GET",
    //     "headers": {
      //       "x-rapidapi-host": "tumbimg.p.rapidapi.com",
      //       "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
      //     }
      //   }

      //   $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });
        // }
