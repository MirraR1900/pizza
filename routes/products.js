const {Router} = require("express");
const Pizza = require("../models/pizzaList");
const Drinks = require("../models/drinksList");
const Order = require("../models/order");
const Couriers = require("../models/couriers");
const router = Router();
const getDateTimeOrder = require("../responseData/getDateTimeOrder");
const validationInfoClient = require("../validationClientBackEnd/validationInfoClient");
const courierChoice = require("../serviceSimulation/courierChoice");
const getObjectProduct = require("../getProducts/getProduct");
const dataCafe = require("../dataCafe/cafe");
const distanceCalculation = require("../serviceSimulation/distanceCalculation");

router.get("/", async (req, res) => {
    const pizza = await getObjectProduct.getProduct(Pizza);
    const drink = await getObjectProduct.getProduct(Drinks);
    res.render("pages/index.pug",  {title: "Pizza", pizza, drink});
     //dataCafe.getDataCafe();
});

router.get("/contact", (req, res) => {
    res.render("pages/contact",  {title: "Contact"});
});

router.get("/delivery", (req, res) => {
    res.render("pages/delivery",  {title: "Доставка"});
});

router.post('/contact', async (req, res) => {
    // const pizza = new Prod({
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     weight: req.body.weight,
    //     img: req.body.img
    // });
    // await pizza.save();

    // const drink = new Drinks({
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price,
    //     volume: req.body.weight,
    //     img: req.body.img
    // });
    // await drink.save();

    // res.redirect("/");

    const couriers = new Couriers({
        firstname: req.body.firstname,
        surname: req.body.surname,
        deliveryMethod: req.body.deliveryMethod,
        paymentTerminal: req.body.paymentTerminal
    });
    await couriers.save();
    res.redirect("/");
});

router.post('/index', async (req, res) => {
    
    validationInfoClient.phoneClient(req.body.phone);
    validationInfoClient.addressClient(req.body.address);

    let getIdCafe = await dataCafe.getIdCafe();
    let idCafe = getIdCafe.rows[0].cafeid;

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
        numberCafe: idCafe,
    });
    
    await order.save();
    let time =  getDateTimeOrder.getTime();  
    distanceCalculation.randomNumber(); 
    const couriersList = await Couriers.find({"paymentTerminal":"да"});
    courierChoice.getListCouriers(couriersList);
    res.send(time);
    });

module.exports = router;