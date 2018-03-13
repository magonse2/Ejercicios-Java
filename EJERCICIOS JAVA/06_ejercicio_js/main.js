//EXERCISE 6

//Remove red box 
$("#cerrar").on("click", function(){
    $("#banner").remove()
    
});  

//Replace image 1 by a click 
$("#imagen1").on("click", function(){
    $("#imagen1").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Replace image 2 by a click 
$("#imagen2").on("click", function(){
    $("#imagen2").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Replace image 3 by a click 
$("#imagen3").on("click", function(){
    $("#imagen3").replaceWith("<div class='texto'> Agregado al carro </div>")
});  

//Replace image 4 by a click 
$("#imagen4").on("click", function(){
    $("#imagen4").replaceWith("<div class='texto'> Agregado al carro </div>")
});  
