


var catDog = function(number) {
  var result = [];
  var count = [];
  if (count  > 0) {
    for (var i = 1; i <= count; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        result.push("cat-dog")
        console.log(result)
      } else if (i % 3 === 0) {
        result.push("dog");
      } else if (i % 5 === 0) {
        result.push("cat-dog");
      } else {
        result.push(i);
      }
    }
  } else if (count === 0) {
    result.push("Zero does not work!!");
  } else  if (count < 0){
    result.push("Don't be negative!");
  }
}


$(document).ready(function() {
  $("form#cat-dog").submit(function(event) {
    event.preventDefault();
    var number =parseInt($("input#number").val());
    (number);

    for (var i = 0; i <= result.length - 1; i++) {

    }

  });
});
