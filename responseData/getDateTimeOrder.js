let date = new Date();

module.exports.getDate = function () {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + "." + month + "." + year;
}

module.exports.getTime = function() {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if(minutes < 10) {
        return hour + ":" + "0" + minutes;
    } else {
        return hour + ":" + minutes;   
    }
}