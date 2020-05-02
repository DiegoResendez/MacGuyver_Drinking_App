
  // let htmlImageElement = new Image(width, height);
  // let myImage = new Image(100, 200);
  // myImage.src = 'picture.jpg';
  // document.body.appendChild(myImage)


let searchIngredients = function () {
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
$("#btn-ingredientsList").click(searchIngredients)


let searchCocktailByName = function(){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=vodka",
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
$("#btn-cocktails").click(searchCocktailByName)


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
$("#btn-ingredients").click(searchByIngredient)


let searchImages = function(){
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
$("#btn-images").click(searchImages)





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