$(function(){
    
    $('.btnAddBasket').on("click", function() {
        let parent = $(this).parent();
        let praparent = parent.parent();
        let grand = praparent.parent();
        let children = grand.children();
        let name;
        let price;
        let linkImg

        for(let item of children) {
           
            if(item.className == "boxImg"){
                let name = item.children;
                linkImg = name[0].getAttribute("src");
            } else 
                if(item.className == "nameDish") {
                   name = item.getAttribute("value");
            } else 
                if(item.className == "priceDish") {
                   price =  item.getAttribute("value");
            } else{}
        }
        addProducts(linkImg, name, price);
        counterProducts();
    });

    function addProducts(linkImg, name, price) {
        return $(".order").append(
            `<div class="cardOrder">
            <div><img class="orderImg" src=${linkImg} /></div>
               <div class="boxName">${name}</div>
               <div>${price}</div>
               <div class="quantityProduct">
                 <div>
                   <button class="btnAdd" id="plus">+</button>
                 </div>
                 <div id="inpAddId" class="quantity">1</div>
                 <div>
                   <button class="btnAdd" id="minus">-</button>
                 </div>
               </div>
               <div class="delete">
                 <button id="deleteOrder">&#10006</button>
               </div>
               </div>`
        );
    };

    $(".order").on("click",function(event) {
        let target = event.target;
        let btnID;
        console.log(target.id);
            btnID = event.target.id;
            let parent;
            let praparent;
            let children;

            switch(btnID) {
                case "plus": 
                parent = $(target).parent();
                praparent = parent.parent();
                children = praparent.children();
                for(let item of children) {
                    let itemClass = item.className;
                    if(itemClass == "quantity") {
                        let text = item.textContent;
                        if(+text >= 1 & +text != 10) {
                            let newText = +text + 1;
                            item.innerHTML = newText;
                        }
                    }
                   
                }
                break;
                case "minus":
                    parent = $(target).parent();
                    praparent = parent.parent();
                    children = praparent.children();
                    for(let item of children) {
                        let itemClass = item.className;
                        if(itemClass == "quantity") {
                            let text = item.textContent;
                            if(+text > 1) {
                                let newText = text - 1;
                                item.innerHTML = newText;
                            } 
                        }
                       
                    }
                    break;

                case "deleteOrder":
                    parent = $(target).parent();
                    praparent = parent.parent();
                    console.log(praparent);
                    praparent.remove();
            }
    });

    function counterProducts(){
        let count = 0;
        let children = $(".order").children();
        for(let child of children) {
            count++;
            let text = $("#counter").children();
            let countBasket = text[0];
            countBasket.innerHTML = count;
        }
    }
});