var logic = function(i) {
  var score=parseInt(i);
  if ( i  % 3 === 0 ||  i  % 5 === 0) {
    if ( i  % 15 === 0) {
      var feedback = "ping-pong";
    } else if ( i  % 3 === 0) {
      var feedback = "ping";
    } else if ( i  % 5 === 0) {
      var feedback = "pong";
    }
    } else {
     var feedback = parseInt(score);
    }
  return feedback;
  }
 




$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = $("#message").val();
    var gameEnd = parseInt(userInput);

    for(i=1;i<gameEnd;i++){
      var output=logic(i);
      $("#results").prepend("<P>" + output + "</p>");
      }




});
});
