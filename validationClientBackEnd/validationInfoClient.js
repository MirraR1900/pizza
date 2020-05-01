module.exports.phoneClient = function(phone) {
    let phoneLength = phone.length;
    if(phoneLength == 0 | phoneLength > 16) {
        console.log("Номер телефона введен не правильно");
    }
};

module.exports.addressClient = function(address) {
    let strAddress = address.match(/[А-Яа-яЁе]+,\d+\/\d+|[А-Яа-яЁе]+,\d+/g);
    if(strAddress == null) {
        console.log("Адрес введен не правильно");
    }
}