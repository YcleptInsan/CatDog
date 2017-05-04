
var number = '';
var result = [];


var pingPong = function(number) {
  result = [];
  if (number > 0) {
    for (var i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        result.push("ping-pong")
      } else if (i % 3 === 0) {
        result.push("ping");
      } else if (i % 5 === 0) {
        result.push("pong");
      } else {
        result.push(i);
      }
    }
  } else if (number === 0) {
    result.push("I need more than ZERO!!");
  } else  if (number < 0){
    result.push("Negative Ping-Pong Makes No Sense, Man!!");
  }
}



$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("#result").empty();
    event.preventDefault();
    ping = parseInt($("input#number").val());
    var result = pingPong(number);

    $("#result").show();
    // for (var i = 0; i <= result.length - 1; i++) {
    //   $("#result").append("<li>" + result[i] + "</li>").slideDown();
    // }
    //
    // $("#blank").trigger("reset");

  });
});
