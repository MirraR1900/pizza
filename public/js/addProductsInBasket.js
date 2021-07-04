$(function () {
    const arrayElement = [];

    $('.btnAddBasket').on("click", function () {

        const parent = $(this).parent().parent().parent();
        const id = parent.attr("data-id");
        let flag = addUniqueItem(id);

        if (flag) {
            arrayElement.push(id);
            getAttributesBlock(parent);
            counterProducts();
        }
    });

    function addUniqueItem(id) {
        let length = arrayElement.length;
        if (length == 0) {
            return true;
        } else {
            for (let i = 0; i < arrayElement.length; i++) {
                if (arrayElement[i] == id) return;
            }
            return true;
        }

    }

    function getAttributesBlock(parent) {
        let name;
        let price;
        let linkImg;
        let idData = parent.attr("data-id");
        const children = parent.children();

        for (let item of children) {

            switch (item.className) {
                case "boxImg":
                    name = item.children;
                    linkImg = name[0].getAttribute("src");
                    break;
                case "nameDish":
                    name = item.getAttribute("value");
                    break;
                case "priceDish":
                    price = item.getAttribute("value");
                    break;
            }
        }

        blockProduct(linkImg, name, price, idData);
    }

    function blockProduct(linkImg, name, price, idData) {  // отрисовывыет в корзине блок выбраного товара
        return $(".order").append(
            `<div class="cardOrder" data-id=${idData}>
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
                 <button class="deleteOrder">&#10006</button>   
               </div>
               </div>`
        );
    }

    $(".order").on("click", function (event) {
        let target = event.target;
        let btnID = event.target.id;
        let btnClass = event.target.className;

        switch (btnID) {

            case "plus":
                let valuePlus = buttonsCounter(target);
                getSummaProduct(target, valuePlus);
                break;

            case "minus":
                buttonsCounter(target);
                getSummaProduct(target);
                break;
        }

        if (btnClass == "deleteOrder") {
            parent = $(target).parent().parent();
            let getAttParent = parent.attr("data-id");    // исправить на класс, без использования Id и вынести в отдельный метод и передавать не id, а data-attribute, что бы сравнивать и удалять из массива удаленные товары
            deleteIdData(getAttParent);
            deleteblockProduct();
            parent.remove();
            orderPrice();

        }
    });

    function deleteIdData(idData) {
        for (let i = 0; i < arrayElement.length; i++) {
            if (arrayElement[i] === idData) {
                arrayElement.splice(i, 1);
            }
        }
    }

    function getSummaProduct(target, value) {   // подсчитывает стоимость заказа в корзине
        let parent = $(target).parent();
        let praparent = parent.parent();

        let price = praparent.siblings(".price");
        let summaProduct = praparent.siblings(".summa");
        let idBtn = target.id;
        let priceValue = price.text();
        let summaValue = summaProduct.text();

        if (idBtn == "plus") {
            let summa = value * priceValue;
            if (summa > 0) {
                summaProduct.text(summa);
                orderPrice();
            }

        } else if (idBtn == "minus") {
            let summa = summaValue - priceValue;
            if (summa > 0) {
                summaProduct.text(summa);
                orderPrice();
            }
        }

    }

    function buttonsCounter(target) {      // Отвечает за отображение количества каждой единицы товара и правильное количество на странице и в подсчете
        const parent = $(target).parent();
        const praparent = parent.parent();
        const children = praparent.children();
        let newText;

        for (let item of children) {
            let itemClass = item.className;

            if (itemClass == "quantity") {
                let text = item.textContent;
                let count = Number(text);

                if (target.id == "plus" & +text >= 1 & +text != 10) {
                    count + 1;
                    newText = +text + 1;
                    item.innerHTML = newText;
                    return (+text + 1);

                } else if (target.id == "minus" & +text > 1) {
                    count - 1;
                    newText = +text - 1;
                    item.innerHTML = newText;
                    return (+text - 1);
                }
            }
        }
    }

    function counterProducts() {  // считает количество товара одной позиции
        let count = 0;
        let children = $(".order").children();

        for (let item of children) {
            count++;
            let text = $("#counter").children();
            let countBasket = text[0];
            countBasket.innerHTML = count;
        }
        orderPrice();
    }

    function deleteblockProduct() {  // удаляет продукт из корзины

        let children = $(".order").children();

        for (let item of children) {
            let text = $("#counter").children();
            let countBasket = text[0];

            if (countBasket.id == "count") {
                let countCurrent = countBasket.innerHTML;
                let countNew = countCurrent - 1;
                countBasket.innerHTML = countNew;
                if (children.length - 1 == 0) {
                    $(".modalWindow ").hide();
                }
                break;
            }
        }
    }

    function orderPrice() {   // подсчитывает итоговую сумму заказа

        let sum = 0;
        let arr = [];
        let children = $(".order").children();
        for (let item of children) {

            let itemChildren = $(item).children();

            for (let child of itemChildren) {
                if (child.className == "summa") {
                    let text = child.textContent;
                    arr.push(text);
                }
            }
        }

        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        $(".summaElement").text(sum);
    }


    $(".list").on("click", function (event) {
        let target = event.target;
        if (target.className == "radio") {
            $(target).attr("checked", "checked");
            $(target).val();
        }
        deleteAttribute(target);

    });

    function deleteAttribute(target) {
        let radioButtons = $(".radio");
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i] != target)
                $(radioButtons[i]).removeAttr("checked");
        }
    }

});