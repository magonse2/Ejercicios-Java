//EXERCISE 1
$("#img1").on("mouseover", function(){
    /*Attribute going to change , img1 identification,function atrr creat or
    fix other image*/
    $("#img1").attr("src", "img/rio.jpg")
    console.log("Cambia la foto si pasas ratón por encima");
    
});

$("#img1").on("mouseout", function(){
    $("#img1").attr("src", "img/arbol.jpg")
})
