$(function() {
    
    $(".shoppingBasket").on("click", function(event){
        let target = event.target;
        let id = target.id;
        let count = counterProducts();
        if(id == "basket" && count == true) {
            $(".modalWindow ").show();
        } 
    });

    $(".shoppingBasket").on("mouseover", function() {
        let count = counterProducts();
        if(count == false) {
            $(".content").show();
        }
    });

    $(".shoppingBasket").on("mouseout", function() {
        $(".content").hide();
    });

    $("#closeButton").on("click", function() {
        $(".modalWindow ").hide();
    });

    function counterProducts(){
        let children = $(".order").children();
        if(children.length == 0){
           return false;
        } else {
            return true;
        }
    }
});