//Exercise 3


//Change the image
//$("#contenedor2").attr("id","batman")


//Add class .destacar
$("#elem1").addClass("destacar")
$("#elem2").addClass("destacar")
$("#elem3").addClass("destacar")
$("#elem4").addClass("destacar")

//Delete class .destacar



//IMAGE 1
//Red color
$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    $("img").attr("src", "img/arbol.jpg")
    $("img").show()
});  

//Delete red
$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar")
    $("img").hide()
});


//IMAGE 2
//Red
$("#elem2").on("mouseover", function(){
    $("#elem2").addClass("destacar")
    $("img").attr("src", "img/lago.jpg")
    $("img").show()
    
});  

//Delete red
$("#elem2").on("mouseout", function(){
    $("#elem2").removeClass("destacar")
    $("img").hide()
});


//IMAGE 3
//Red
$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar")
    $("img").attr("src", "img/rio.jpg")
    $("img").show()
    
});  

//Delete red
$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar")
    $("img").hide()
});
//IMAGE 4
//Red
$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar")
    $("img").attr("src", "img/sol.jpg")
    $("img").show()
    
});  

//Delete red
$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
    $("img").hide()
});
