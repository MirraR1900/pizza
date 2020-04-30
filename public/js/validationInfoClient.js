$(function(){
    $("#send").attr("disabled", "disabled");

    let name = $("input[name='name']");
    let phone = $("input[name='phone']");
    let address =  $("input[name='address']");
    let porch = $("input[name='porch']");
    let pay = $("input[name='pay']");
    let borderError = {"border": "1px solid rgb(255, 0, 0)"};
    let fullPhone;
    let fullAddress;
    let fullPay;

    name.on("blur", function(){
        let value = $(this).val();
        let strName = value.match(/[a-zA-zА-Яа-яЁё]/g);
        if(strName == null) {
           $(this).css(borderError);
        } 
    });

    name.on("focus", focusInput);


    phone.mask("+7(999) 999-9999");

    phone.on("blur", function() {
        let value = $("input[name='phone']").val();

        if(value.length == 0) {
            $(this).css(borderError);
        } else {
            fullPhone = true;
            activateButton(fullPhone, fullAddress, fullPay);
        }
    });

    phone.on("focus", focusInput);


    address.on("blur", function(){
        let value = $(this).val();
        let strAddress = value.match(/[0-9А-Яа-я-//]/g);

        if(strAddress == null) {
            $(this).css(borderError);
        } else {
            fullAddress = true;
            activateButton(fullPhone, fullAddress, fullPay);
        }
    });
    address.on("focus", focusInput);


    porch.on("blur", function(){
        let value = $(this).val();
        let strPorch = value.match(/[0-9]/g);

        if(strPorch == null) {
            $(this).css(borderError);
        } 
    });

    porch.on("focus", focusInput);


    pay.on("click", function(){
        fullPay = true;
        activateButton(fullPhone, fullAddress, fullPay);
    });

    function focusInput(){
        $(this).css("border", "2px solid rgb(211, 211, 211)");
    }

    function activateButton(phone, address, pay) {
        if(phone == true & address == true & pay == true) {
            $("#send").removeAttr("disabled", "disabled");
        }
    }
});