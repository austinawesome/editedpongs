$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = $("#message").val();
    var gameEnd = parseInt(userInput);
    $("#results").prepend("<P>" + userInput + "</p>");

});
});
