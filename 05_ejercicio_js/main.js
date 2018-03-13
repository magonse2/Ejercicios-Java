
//EXERCICE 5



$("#carrete").ready(function() {
    $("img").hide();
});

$("body").on("click", function() {
    $("img").show();
})

$("img").on("mouseover", function() {
    $(this).css("width", 300);
})

$("img").on("mouseout", function() {
    $(this).css("width", 250);
})