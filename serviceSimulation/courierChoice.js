const distanceCalculation = require("../serviceSimulation/distanceCalculation");
let distance = distanceCalculation.randomNumber();

function deliveryChoice(distance) {
    if(distance < 5) {
        console.log();
        
    } else if(distance > 5 & distance < 10) {
        console.log("Курьер на велосипеде " + distance);
    } else {
        console.log("Курьер на авто " + distance);
    }
}

module.exports.getListCouriers = function(couriers) {
    console.log(couriers);
}

deliveryChoice(distance);