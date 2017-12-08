// var colors = document.getElementById(".color_lightbox_2").style.backgroundColor

$(document).ready(function(){

    var color_box = $(".color_lightbox_1").css("background-color");
    $(".color_lightbox_1").append("#"+color_box);
    console.log(color_box);
});