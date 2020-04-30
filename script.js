
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

let cocktailURL = "https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_67a71546-a41f-4dd0-9c04-f54fa8f375ef"

var searchtheapiguy = function (cocktail) {
  var queryURL = "";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    createRow(response);
  });
};



$(document).ready(function(){
  $(".add-row").click(function(){
      let name = $("#name").val();
      let email = $("#email").val();
      let markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
      $("table tbody").append(markup);
  });