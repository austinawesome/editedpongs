var feedback;
var logic = function(i) {
  var score=parseInt(i);
  if ( i  % 3 === 0 ||  i  % 5 === 0) {
    if ( i  % 15 === 0) {
      feedback = "ping-pong";
      } else if ( i  % 3 === 0) {
      feedback = "ping";
      } else if ( i  % 5 === 0) {
      feedback = "pong";
      }
      } else {
      feedback = parseInt(score);
      }
  return feedback;
}

$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var userInput = $("#message").val();
    var gameEnd = parseInt(userInput);
    $(".pictures img").addClass("hidden");

    for(var i=1;i<=gameEnd;i++){
      var output=logic(i);
      $("#results").prepend("<P>" + output + "<br></p>");
    }
    if (output === 'ping' || output === 'pong' || output === 'ping-pong') {
      $("#" + output).removeClass("hidden");
    }
  });
});
