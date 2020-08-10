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

function getIdCourier(array){
    let random = Math.random() * 10;
    let number = Math.round(random);
    let id;
    console.log("number: " + number);
    if(number > array.length){
        number = Math.round(number / 2);
    }

     for(let i = 0; i < array.length; i++){
        if(i == number){

            id = array[i];
        }
    }
    return id;
}

module.exports.getCourier = async function(pay) {

    let value = "";
    if(pay == "Картой"){
        value = "да";
    } else {
        value = "нет";
    }
    let getdeliveryChoice = deliveryChoice(distance);
    const couriersList = await Couriers.find({"paymentTerminal": value, "deliveryMethod" : getdeliveryChoice}, {"_id": 1});
    let idObj = await getIdCourier(couriersList);
    let id = idObj._id;
    return id;    
}