new WOW().init();
$(".skillList ul").addClass("none");
$(".scroll").mouseenter(function () {    
    $(".scroll span").addClass("spanhover");
});
$(".scroll").mouseleave(function () { 
    $(".scroll span").removeClass("spanhover");
});
$(".skillList .tittle").click(function (e) { 
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).siblings('ul').slideToggle();
    $(this).parent().siblings().find('.down').removeClass("up");
    $(this).find('.down').toggleClass("up");
    
});


$(window).scroll(function () { 
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);
    if(scrollVal >= window.innerHeight){
        $(".menu").addClass("phone_fixed");
        $(".hamburger").addClass("fixed");
        $(".menu_space").removeClass("none");
    }else{
        $(".menu").removeClass("phone_fixed");
        $(".hamburger").removeClass("fixed");
        $(".menu_space").addClass("none");
    }
    if(scrollVal >= $("#resume").offset().top -window.innerHeight){
        $(".myphoto").slideDown(1000);
        $(".introduction").delay(1000).fadeIn(500);
    }
    if(scrollVal >= $("#skill").offset().top -window.innerHeight){
        $(".graph p").show(500);
        $(".skillList .html").delay(1000).slideDown();
        $(".skillList .js").delay(1300).slideDown();
        $(".skillList .git").delay(1600).slideDown();
        $(".skillList .adobe").delay(1900).slideDown();
    }
    if(scrollVal >= $("#portfolo").offset().top -window.innerHeight){
        $(".portfoloAll").slideDown(1000);
    }
    if(scrollVal >= $("#contact").offset().top -window.innerHeight
    ){
        $(".form").removeClass("none");
        $(".form").addClass("slideInLeft");
        $(".info").removeClass("none");
        $(".info").addClass("slideInRight");
    }
});

$(document).ready(function (){

    $(".menu").click(function (e) { 
        e.preventDefault();
        console.log(e);
        if(e.target.nodeName !== "A"){return}
        switch(e.target.className){
            case "menu_resume":
                moveto("#resume");
                break;
            case "menu_home":
                moveto("body");
                break;
            case "menu_skill":
                moveto("#skill");
                break;
            case "menu_portfolo":
                moveto("#portfolo");
                break;
            case "menu_contact":
                moveto("#contact");
                break;
        }
    });


    function moveto(id){ 
        $('html, body').animate({
        scrollTop: $(id).offset().top -70
        }, 500);
        if(window.innerWidth > 767){return};
        $(".menu").attr("style","display: none;");
    }

    $(".scroll").click(function (e) { 
        e.preventDefault();
        moveto("#resume");
    });

    $(".hamburger_btn").click(function (e) { 
        e.preventDefault();
        $(".menu").toggle();
    });

});

//??????html?????? syle = "display: none;"???????????????????????????????????????
window.onresize = function(){
    if($(".menu").attr("style") == "display: none;"){
        $(".menu").attr("style","");
    }
}
