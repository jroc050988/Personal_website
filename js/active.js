
$(".skillList .tittle").click(function (e) { 
    e.preventDefault();
    $(".skillList ul").toggleClass("none");
});
$(".skillList ul").addClass("none");