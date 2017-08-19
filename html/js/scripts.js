var loopit = function(gameEnd) {
  for(i=1;i<gameEnd;i++){
    feedback =i;
    }
    return feedback;
}



$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = $("#message").val();
    var gameEnd = parseInt(userInput);
    var output = loopit(gameEnd);
    $("#results").prepend("<P>" + output + "</p>");
    for(i=1;i<gameEnd;i++){
      feedback =i;
      output = i;
      $("#results").prepend("<P>" + output + "</p>");
      }




});
});
