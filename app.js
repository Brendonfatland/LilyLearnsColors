$(document).ready(function() {

//REALLY COOL! Removes old border. adds new to what ever .tablinks is clicked... EASY and AWESOME!
$(".tablinks").click(function(){
  $(".tablinks").removeClass("important");
  $(this).addClass("important");
  $(".jumbotron").hide();
});



});

//takes all elements with class name color and sets those to display none.
// Then displays the selected color to block.
function openColor(selectedColor) {
    var i, x;

    var x = document.getElementsByClassName("color");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

    document.getElementById(selectedColor).style.display = "block";


}

var audio = new Audio('Orange.mp3'); // define your audio

$('#NOrange').click( function(){

  audio.play();
}); // that will do the trick !!

function playSound() {
    $('#OrangeAudio')[0].volume = "0.2" ;
    $('#OrangeAudio')[0].load();
    $('#OrangeAudio')[0].play();
}
