$(function(){
    $(".quantityProduct").on("click", function(event) {
        let target = event.target;
        let btnID;

        if(target.tagName == 'BUTTON'){
            btnID = event.target.id;
            
            if(btnID === "plus") {
                let parent = $(target).parent();
                let praparent = parent.parent();
                let children = praparent.children();
                for(let item of children) {
                    let itemClass = item.className;
                    if(itemClass == "quantity") {
                        let text = item.textContent;
                        if(+text >= 1 & +text != 10) {
                            let newText = +text + 1;
                            item.innerHTML = newText;
                        } else {
                            return
                        }
                       
                    }
                   
                }
            } else if(btnID === "minus") {
                let parent = $(target).parent();
                let praparent = parent.parent();
                let children = praparent.children();
                for(let item of children) {
                    let itemClass = item.className;
                    if(itemClass == "quantity") {
                        let text = item.textContent;
                        if(+text > 1) {
                            let newText = text - 1;
                            item.innerHTML = newText;
                        } else {
                            return
                        }
                    }
                   
                }
            } else {
                alert("error");
            }
        }
    });

    $('.btnAddBasket').on("click", function() {
        let parent = $(this).parent();
        console.log(parent);
    });
});