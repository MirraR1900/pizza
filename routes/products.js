const {Router} = require("express");
const Prod = require("../models/pizzaList");
const Drinks = require("../models/drinksList");
const Order = require("../models/order");
const router = Router();
const getDateTimeOrder = require("../responseData/getDateTimeOrder");

router.get("/", async (req, res) => {
    const pizza = await Prod.find({});
    const drink = await Drinks.find({});

    res.render("pages/index.pug",  {title: "Pizza", pizza, drink});
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

    const drink = new Drinks({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        volume: req.body.weight,
        img: req.body.img
    });
    await drink.save();

    res.redirect("/");
});


router.post('/index', async (req, res) => {
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
        time: getDateTimeOrder.getTime()
    });
    await order.save();
    let time =  getDateTimeOrder.getTime();       
        // res.end();      
    // res.json("Answer Server");
    res.send(time);
    });

module.exports = router;