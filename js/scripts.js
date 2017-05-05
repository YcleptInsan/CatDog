


var catDog = function(number) {
  var result = [];
  var symbols = ["0"]
  // if (number > 0) {
  //   if ((number % 3 === 0) && (number % 5 === 0)) {
  //     result += ("cat-dog");
  //   } else if (number % 3 === 0) {
  //     result += ("dog");
  //   } else if (number % 5 === 0) {
  //     result += ("cat");
  //   } else {
  //     result += (number);
  //   }

    for (var i = 0; i <= number; i++) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
          result.push("cat-dog");
        } else if (i % 3 === 0) {
          result.push("dog");
        } else if (i % 5 === 0) {
          result.push("cat");
        } else {
          alert("")
        }

        var endVal = result.splice(-1, 1);


      }
      return endVal;
  }
  // } else if (number === !0) {
  //   result.push("Zero does not work!!");
  // } else  if (number < 0){
  //   result.push("Don't be negative!");
  // }
// }


$(document).ready(function() {
  $("form#cat-dog").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#number").val());
    $("#result").append("<p>" + catDog(userNumber) + "</p>");
     $("p").prev().remove();
  });
});
