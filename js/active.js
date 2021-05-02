new WOW().init();


$(".skillList ul").addClass("none");
$(".scroll").mouseenter(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".scroll span").addClass("spanhover");
});
$(".scroll").mouseleave(function (e) { 
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".scroll span").removeClass("spanhover");
});
$(".skillList .tittle").click(function (e) { 
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).siblings('ul').slideToggle();
    
});
$(window).scroll(function () { 
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);
    if(scrollVal >= 600){
        $(".myphoto").slideDown(1000);
        $(".introduction").delay(1000).fadeIn(800);
    }
});