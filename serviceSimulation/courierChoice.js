const distanceCalculation = require("../serviceSimulation/distanceCalculation");
const Couriers = require("../models/couriers");
let distance = distanceCalculation.randomNumber();

let onFoot = 5;
let onBike = 20;
let onCar = 40;

function deliveryChoice(distance) {
    if(distance < 5) {
        courierDeliveryTime(onFoot, distance);
        return "пеший";
        
    } else if(distance > 5 & distance < 10) {
        courierDeliveryTime(onBike, distance)
        return "велосипед";
    } else {
        courierDeliveryTime(onCar, distance)
         return "автомобиль";
    }
}

function courierDeliveryTime (courier, distance) {
    let time = (distance/courier);
    if(time < 1) {
        time *= 60;
    }
}

module.exports.getCourier = async function(pay) {

    let value = "";
    if(pay == "Картой"){
        value = "да";
    } else {
        value = "нет";
    }
    let getdeliveryChoice = deliveryChoice(distance);
    const couriersList = await Couriers.find({"paymentTerminal": value, "deliveryMethod" : getdeliveryChoice});
    let idCourier = couriersList[0]._id;
    console.log(idCourier);
    return idCourier;    
}