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
        $(".introduction").delay(1000).fadeIn(500);
    }
    if(scrollVal >= 1440){
        $(".graph p").show(500);
        setTimeout(function(){ 
            $(".graph_circle").addClass("part5"); 
        }, 500);
        $(".skillList .html").delay(1000).slideDown();
        $(".skillList .js").delay(1300).slideDown();
        $(".skillList .git").delay(1600).slideDown();
        $(".skillList .adobe").delay(1900).slideDown();
    }
    if(scrollVal >= 2200){
        $(".portfoloAll").slideDown(1000);
    }
    if(scrollVal >= 3300){
        $(".form").removeClass("none");
        $(".form").addClass("slideInLeft");
        $(".info").removeClass("none");
        $(".info").addClass("slideInRight");
    }
});