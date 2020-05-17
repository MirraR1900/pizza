const {Router} = require("express");
const Prod = require("../models/pizzaList");
const Drinks = require("../models/drinksList");
const Order = require("../models/order");
const Couriers = require("../models/couriers");
const router = Router();
const getDateTimeOrder = require("../responseData/getDateTimeOrder");
const validationInfoClient = require("../validationClientBackEnd/validationInfoClient");
const courierChoice = require("../serviceSimulation/courierChoice");

const distanceCalculation = require("../serviceSimulation/distanceCalculation");

router.get("/", async (req, res) => {
    const pizza = await Prod.find({});
    const drink = await Drinks.find({});

    res.render("pages/index.pug",  {title: "Pizza", pizza, drink});
    // console.log(pizza);
});

router.get("/contact", (req, res) => {
    res.render("pages/contact",  {title: "Contact"});
});

router.get("/delivery", (req, res) => {
    res.render("pages/delivery",  {title: "Доставка"});
});

router.get("/aboutus", (req, res) => {
    res.render("pages/aboutus",  {title: "О нас"});
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
    // validationInfoClient.phoneClient(req.body.phone);
    // validationInfoClient.addressClient(req.body.address);
    const order = new Order({
        name: req.body.name,
        phone:  req.body.phone,
        address: req.body.address,
        porch: req.body.porch,
        pay: req.body.pay,
        notes: req.body.notes,
        summa: req.body.summa,
        // arrayOrder: req.body.arrayOrder,
        // date: getDateTimeOrder.getDate(),
        // time: getDateTimeOrder.getTime(),
        // numberCafe: 
    });
    await order.save();
    // let time =  getDateTimeOrder.getTime();      
    // distanceCalculation.randomNumber(); 
    // const couriersList = await Couriers.find({"paymentTerminal":"да"});
    // courierChoice.getListCouriers(couriersList);
        // res.end();      
    // res.json("Answer Server");
    res.send(time);
    });

module.exports = router;