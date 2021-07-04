$(function(){
    let position = $("#wrapperid").offset().top - (window.scrollY || 
        window.pageYOffset || document.body.scrollTop)
    if(position < 0){
        $(".containerHead").addClass("containerHeadFix");
            $(".nav").addClass("fixedMenu");
            $("#basket").addClass("baskedFix");
            $("#counter").addClass("countFix");
            $(".menu li").addClass("fixLI");
    }
    $(window).scroll(function(){
        if(pageYOffset > 60){
            $(".containerHead").addClass("containerHeadFix");
            $(".nav").addClass("fixedMenu");
            $("#basket").addClass("baskedFix");
            $("#counter").addClass("countFix");
            $(".menu li").addClass("fixLI");
        } else {
            $(".containerHead").removeClass("containerHeadFix");
            $(".nav").removeClass("fixedMenu");
            $("#basket").removeClass("baskedFix");
            $("#counter").removeClass("countFix");
            $(".menu li").removeClass("fixLI");
        }
        
    });
});
