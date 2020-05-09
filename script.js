
  // let htmlImageElement = new Image(width, height);
  // let myImage = new Image(100, 200);
  // myImage.src = 'picture.jpg';
  // document.body.appendChild(myImage)
  const mixDrinkButton = document.getElementById("mix-button");
  const browseDrinksButton = document.getElementById("browseDrinks");
  const clearButton = document.getElementById("clear-button");
  const ingredientsForm = document.getElementById("ingredientsForm");
  const addListItem = document.getElementById("addListItem");
  const dropdown1 = document.getElementById("dropdown1");
  const cardImage = document.getElementById("cardImage");
  const cardContent = document.getElementById("cardContent");
  const cardAction = document.getElementById("cardAction");
  const drinkCardName = document.getElementById("drinkCardName");
  const drinkCardIngredient = document.getElementById("drinkCardIngredient");
  
  // clearButton.addEventListener("click", resetIngredientsForm);
  // addListItem.addEventListener("click", addListItem);
  mixDrinkButton.addEventListener("click", createDrinkListItems);
  // browseDrinksButton.addEventListener("click", listAllDrinks);
  // .addEventListener("click", );
  // .addEventListener("click", );
  // .addEventListener("click", );
  // .addEventListener("click", );
  // .addEventListener("click", );
  // .addEventListener("click", );



  
  let drinksListItems = ["idDrink", "strDrink", "strCategory", "strIBA", "strAlcoholic", "strGlass", "strInstructions", "strDrinkThumb"]
  
  function createDrinkListItems (){
  let newDrink = {};

  for(i = 0; i < drinksListItems.length; i++){
    let drinkCard = drinksListItems[i];
    let node = document.createElement("li");
    let textnode = document.createTextNode(drinkCard);
    node.appendChild(textnode);
    dropdown1.appendChild(node);
  console.log(drinkCard);
  }
  
}

// localStorage.setItem(drinkValues, JSON.stringify(newDrink));
// let node = document.createElement("LI"); 
// let textnode = document.createTextNode();
// node.appendChild([i]);
// let textnode = document.createTextNode(drinkCard);
// for(i = 0; i < Drinks.length; i++){
  // let newDrink = textnode[i]; --> not sure if this is needed.
// }

// function listAllDrinks(){
// }

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
$("#mix-button").click(lookupFullCocktailDetails)



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
$("#mix-button").click(listOfIngredients)


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
$("#mix-button").click(lookupRandomCocktail)


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
$("#browseDrinks").click(searchByIngredient)


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
$("#browseDrinks").click(filterByCategory)



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
$("#mix-button").click(searchImages)







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
