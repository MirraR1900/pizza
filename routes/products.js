const {Router} = require("express");
const Prod = require("../models/productsList");
const Drinks = require("../models/drinksList");
const router = Router();

router.get("/", async (req, res) => {
    const pizza = await Prod.find({});

    res.render("pages/index.pug",  {title: "Pizza", pizza});
});

router.get("/contact", (req, res) => {
    res.render("pages/contact",  {title: "Contact"});
});

router.get("/drinks", async (req, res) => {
    const drink = await Drinks.find({});
    res.render("pages/drinks",  {title: "Напитки", drink});
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

    res.redirect("/drinks");
});


module.exports = router;