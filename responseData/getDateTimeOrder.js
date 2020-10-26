let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();

module.exports.getDate = function () {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "." + month + "." + year;
}

module.exports.getTime = function() {
    if(minutes < 10) {
        return hour + ":" + "0" + minutes;
    } else {
        return hour + ":" + minutes;   
    }
}

module.exports.waitTime = function() {
    if(minutes < 10) {
        return hour + 1 + ":" + "0" + minutes;
    } else {
        return hour + 1 + ":" + minutes;   
    }
}