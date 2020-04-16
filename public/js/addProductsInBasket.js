$(function(){
    
    $('.btnAddBasket').on("click", function() {
        let parent = $(this).parent();
        let praparent = parent.parent();
        let grand = praparent.parent();
        let children = grand.children();
              
        getAttributesBlock(children);
        counterProducts();
    });

    function getAttributesBlock(children) {
        let name;
        let price;
        let linkImg

        for(let item of children) {
           
            if(item.className == "boxImg"){
                name = item.children;
                linkImg = name[0].getAttribute("src");
            } else 
                if(item.className == "nameDish") {
                   name = item.getAttribute("value");
            } else 
                if(item.className == "priceDish") {
                   price =  item.getAttribute("value");
            } else{}
        }

        blockProduct(linkImg, name, price);
    };

    function blockProduct(linkImg, name, price) {
        return $(".order").append(
            `<div class="cardOrder">
            <div><img class="orderImg" src=${linkImg} /></div>
               <div class="boxName">${name}</div>
               <div class="price">${price}</div>
               <div class="quantityProduct">
                 <div>
                   <button class="btnAdd" id="plus">+</button>
                 </div>
                 <div id="inpAddId" class="quantity">1</div>
                 <div>
                   <button class="btnAdd" id="minus">-</button>
                 </div>
               </div>
               <div class="summa">${price}</div>
               <div class="delete">
                 <button id="deleteOrder">&#10006</button>
               </div>
               </div>`
        );
    };

    $(".order").on("click",function(event) {
        let target = event.target;
        let btnID = event.target.id;

            switch(btnID) {

                case "plus": 
                    let valuePlus = buttonsCounter(target);
                    getSummaProduct(target, valuePlus);
                break;

                case "minus":
                    buttonsCounter(target);
                    getSummaProduct(target);
                break;

                case "deleteOrder":
                    parent = $(target).parent();
                    praparent = parent.parent();

                    deleteblockProduct(); 
                    praparent.remove();
            }
    });

    function getSummaProduct(target, value) {
        
       let parent = $(target).parent();
       let praparent =  parent.parent();
       
       let price = praparent.siblings(".price");
       let summaProduct = praparent.siblings(".summa");
       let idBtn = target.id;
       let priceValue = price.text();
       let summaValue = summaProduct.text();

       if(idBtn == "plus") {
        let summa = value * priceValue;
        summaProduct.text(summa);

       } else if(idBtn == "minus") {      
        let summa = summaValue - priceValue;
        summaProduct.text(summa);
       } 
    };

    function buttonsCounter(target) {
        let parent = $(target).parent();
        let praparent =  parent.parent();
        let children = praparent.children();
        let newText;            
               
        for(let item of children) {
            let itemClass = item.className;

            if(itemClass == "quantity") {
                let text = item.textContent;

                    if(target.id == "plus" & +text >= 1 & +text != 10) {
                        newText = +text + 1;
                        item.innerHTML = newText;
                        console.log(+text + 1);
                        return (+text + 1);
                                
                    } else if(target.id  == "minus" & +text > 1){
                        newText = +text - 1;
                        item.innerHTML = newText;
                        console.log(+text - 1);
                        return (+text - 1);
                    } else{}
            }
        }
    };
        
    function counterProducts(){
        let count = 0;
        let children = $(".order").children();
        for(let item of children) {
            count++;
            let text = $("#counter").children();
            let countBasket = text[0];
            countBasket.innerHTML = count;
        }
    }

    function deleteblockProduct(){
        let children = $(".order").children();
        for(let item of children) {
            let text = $("#counter").children();
            let countBasket = text[0];
            if(countBasket.id == "count") {
                let countCurrent = countBasket.innerHTML;
                let countNew = countCurrent - 1;
                countBasket.innerHTML = countNew;
                if(children.length-1 == 0) {
                    $(".modalWindow ").hide();
                }
                break;
            }
        }
    };
});