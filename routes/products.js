const {Router} = require("express");
const Prod = require("../models/productsList");
const router = Router();

router.get("/", async (req, res) => {
    const pizza = await Prod.find({});

    res.render("pages/index.pug",  {title: "Pizza", pizza});
    console.log(db.stats());
});

router.get("/contact", (req, res) => {
    res.render("pages/contact",  {title: "Contact"});
});

router.get("/drinks", (req, res) => {
    res.render("pages/drinks",  {title: "Напитки"});
});

router.get("/delivery", (req, res) => {
    res.render("pages/delivery",  {title: "Доставка"});
});

router.get("/aboutus", (req, res) => {
    res.render("pages/aboutus",  {title: "О нас"});
});

router.post('/contact', async (req, res) => {
    const pizza = new Prod({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        weight: req.body.weight,
        img: req.body.img
    });
    await pizza.save();
    res.redirect("/");
});


module.exports = router;