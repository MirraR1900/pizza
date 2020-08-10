$(function(){

    let arrayElement = []; 
       
    $('.btnAddBasket').on("click", function() {
        
        let parent = $(this).parent();
        let praparent = parent.parent();
        let grand = praparent.parent();
        let children = grand.children();
        let id = grand.attr("id");
        let flag = uniqueItem(id);

        if(flag != true) {
            arrayElement.push(id);
            getAttributesBlock(children);
            counterProducts();
        }
    });

    function uniqueItem(id) {
        let length = arrayElement.length;
        
        if(length == 0) {
            arrayElement.push(id);
        } else {
            for(let i = 0; i < arrayElement.length; i++) {
                if(arrayElement[i] == id) { 
                    return true;  
                }
            }
        }
    }

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
            } else{
                console.log("...");
            }
        }

        blockProduct(linkImg, name, price);
    }

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
    }

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
                    orderPrice();
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
        orderPrice();

       } else if(idBtn == "minus") {      
        let summa = summaValue - priceValue;
        summaProduct.text(summa);
        orderPrice();
       } 
    }

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
                        return (+text + 1);
                                
                    } else if(target.id  == "minus" & +text > 1){
                        newText = +text - 1;
                        item.innerHTML = newText;
                        return (+text - 1);
                    } else{
                        console.log("...");
                    }
            }
        }
    }
        
    function counterProducts(){

        let count = 0;
        let children = $(".order").children();
        for(let item of children) {
            count++;
            let text = $("#counter").children();
            let countBasket = text[0];
            countBasket.innerHTML = count;
        }
        orderPrice();
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
    }

    function orderPrice() {

        let sum = 0;
        let arr = [];
        let children = $(".order").children();
        for(let item of children) {
          
            let itemChildren = $(item).children();
            
              for(let child of itemChildren) {
                  if(child.className == "summa") {
                      let text = child.textContent;
                    arr.push(text);
                  }
              }    
        }

        for(let i=0; i < arr.length; i++) {
            sum += +arr[i];
        }
        $(".summaElement").text(sum);
    }


    $(".list").on("click", function(event) {
        let target = event.target;    
        if(target.className == "radio") {
            $(target).attr("checked","checked");
            $(target).val();
        } 
        deleteAttribute(target);

    });

    function deleteAttribute(target) {
        let radioButtons = $(".radio");
        for(let i = 0; i < radioButtons.length; i++) {
            if(radioButtons[i] != target)
                $(radioButtons[i]).removeAttr("checked");            
        }
    }

});