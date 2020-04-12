$(function() {
    $(".shoppingBasket").on("click", function(event){
        let target = event.target;
        let id = target.id;
        if(id == "basket") {
            $(".modalWindow ").show();
        }
    });

    $("#closeButton").on("click", function() {
        $(".modalWindow ").hide();
    })
});