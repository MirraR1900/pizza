const distanceCalculation = require("../serviceSimulation/distanceCalculation");
let distance = distanceCalculation.randomNumber();

let onFoot = 5;
let onBike = 20;
let onCar = 40;

function deliveryChoice(distance) {
    if(distance < 5) {
        courierDeliveryTime(onFoot, distance)
        console.log("Курьер пеший " + distance);
        
    } else if(distance > 5 & distance < 10) {
        courierDeliveryTime(onBike, distance)
        console.log("Курьер на велосипеде " + distance);
    } else {
        courierDeliveryTime(onCar, distance)
        console.log("Курьер на авто " + distance);
    }
}

function courierDeliveryTime (courier, distance) {
    let time = (distance/courier);
    if(time < 1) {
        time *= 60;
    }
    // console.log("time: " + Math.floor(time));
}

module.exports.getListCouriers = function(couriers) {
    // console.log(couriers);
}

// deliveryChoice(distance);