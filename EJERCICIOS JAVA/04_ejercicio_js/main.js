//EXERCISE 4

let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]
let color = colores [Math.floor(Math.random()*colores.length)];

//First for execute
$(document).ready(function(){
    $("#anuncio").text("!CLICK!Para cambiar de color")
    .hide()
    .fadeIn(3000)
    $("#anuncio").width(500);
    $("#anuncio").height(500);
    $("#anuncio").on("click",  function(){
        let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"]
        let color = colores [Math.floor(Math.random()*colores.length)];
        $("#anuncio").css("color")
        $('#anuncio').css("background",color);
    })
    
})


