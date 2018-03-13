
//Ejercicio 2
//Entry
$(document).ready(function(){
    $("#mensaje_img1").hide()
})

$("#imagen1").hover(function(){

//It will be shown
$("#mensaje_img1").show()
//Exit
}, function(){

//It won't be shown
$("#mensaje_img1").hide()
})