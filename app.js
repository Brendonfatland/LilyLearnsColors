$(document).ready(function() {

// Need to get some Javascript or Jquery working that highlights the current tab. 
  $(".tablinks").click(function(e) {
          //prevents form from submitting.
          e.preventDefault();



          //$(".color").hide();
          //$(".color").css("color: red");
      });


});

function openColor(selectedColor) {
    var i, tabs, x;
    var x = document.getElementsByClassName("color");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

    document.getElementById(selectedColor).style.display = "block";

}
