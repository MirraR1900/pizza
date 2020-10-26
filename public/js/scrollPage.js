$(function(){
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
