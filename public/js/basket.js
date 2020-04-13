$(function() {
    $(".shoppingBasket").on("click", function(event){
        let target = event.target;
        let id = target.id;
        let count = counterProducts();
        if(id == "basket" && count == true) {
            $(".modalWindow ").show();
        } else {
            $(".content").show();
        }
    });

    $("#closeButton").on("click", function() {
        $(".modalWindow ").hide();
    });

    $("#btnClose").on("click", function() {
        $(".content").hide();
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