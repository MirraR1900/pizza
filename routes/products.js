const {Router} = require("express");
const Pizza = require("../models/pizzaList");
const Drinks = require("../models/drinksList");
const Order = require("../models/order");
const router = Router();
const getDateTimeOrder = require("../responseData/getDateTimeOrder");
const validationInfoClient = require("../validationClientBackEnd/validationInfoClient");
const courierChoice = require("../serviceSimulation/courierChoice");
const getObjectProduct = require("../getProducts/getProduct");
const dataCafe = require("../dataCafe/cafe");
const distanceCalculation = require("../serviceSimulation/distanceCalculation");

router.get("/", async (req, res) => {
    distanceCalculation.randomNumber(); 
    const pizza = await getObjectProduct.getProduct(Pizza);
    const drink = await getObjectProduct.getProduct(Drinks);
    res.render("pages/index.pug",  {title: "Pizza", pizza, drink});
});

router.get("/contact", (req, res) => {
    res.render("pages/contact",  {title: "Contact"});
});

router.post('/index', async (req, res) => {
    
    validationInfoClient.phoneClient(req.body.phone);
    validationInfoClient.addressClient(req.body.address);

    let getIdCafe = await dataCafe.getIdCafe();
    let id = await courierChoice.getCourier(req.body.pay);

    const order = new Order({
        name: req.body.name,
        phone:  req.body.phone,
        address: req.body.address,
        porch: req.body.porch,
        pay: req.body.pay,
        notes: req.body.notes,
        summa: req.body.summa,
        arrayOrder: req.body.arrayOrder,
        date: getDateTimeOrder.getDate(),
        time: getDateTimeOrder.getTime(),
        numberCafe: getIdCafe,
        cashier: "",
        courier: id,
    });
    
    await order.save();
    let time =  getDateTimeOrder.waitTime();  
    res.send(time);
    });

module.exports = router;