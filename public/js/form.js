$(function() {
    let nameDish;
    let quantity;
    let name;
    let phone;
    let address;
    let porch;
    let pay;
    let notes;
    let summa;
    let orderMap = [];
      
    function Order(name, phone, address, porch, pay, notes, summa, arrayOrder) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.porch = porch;
        this.pay = pay;
        this.notes = notes;
        this.summa = summa;
        this.arrayOrder = arrayOrder;
    };
    
    $("#send").on("click", function(){
        getOrder();
        getInfoClient();
        getPay();
        getNotes();
        getSummaOrder();

        let order = new Order(name, phone, address, porch, pay, notes, summa, orderMap);

        $.ajax({
            type: 'POST',
            url: '/index',
            data: order,
            success: function (resp) {
                getAnswerServer(resp)
            },
            error: function (err, str) {
                console.log('Возникла ошибка: ' + err);
            }
        });

        $(".modalWindow ").hide();
    });

    function getOrder() {
        let children = $(".order").children();
        for(let child of children) {
            getElements(child);
        }  
    }

    function getElements(child) {
        let children = $(child).children();
        for(let child of children) {
            if(child.className == "boxName") {
                nameDish = child.textContent;
            } else if(child.className == "quantityProduct") {
                let children = $(child).children();
                for(let child of children) {
                    if(child.className =="quantity") {
                        quantity = child.textContent;
                    }
                }
                
                let dish = nameDish + ": " + quantity;
                orderMap.push(dish);
            }
        }
    };
    
    function getInfoClient() {
        name = $("input[name='name']").val();
        phone = $("input[name='phone']").val();
        address = $("input[name='address']").val();
        porch = $("input[name='porch']").val();
    };

    function getPay() {
        let radio = $(".radio");
        for(let i = 0; i < radio.length; i++) {
            let a= $(radio[i]).attr("checked");
            if(a == "checked") {
                pay = $(radio[i]).val();
            }  else{ 
                $(".pay").css("border", "1px solid rgb(255, 0, 0)")
            }
        }
    };
    
    function getNotes() {
        notes = $("textarea[name='notes']").val();
    };

    function getSummaOrder() {
        summa = $(".orderPrice").text();
    };

    function getAnswerServer(time) {
        $(".modalWindow ").hide();
        $(".modalWindowOrderStatus").show();
        $(".time").text(time);
    }

    $("#btnOrderStatus").on("click", function() {
        $(".modalWindowOrderStatus").hide();
        window.location.reload();
    });
});
