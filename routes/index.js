const router = require("express").Router();
const clientsRoute = require('./clients.route');
const ordersRoute = require("./orders.route");
const currencyRoute = require("./currency.route");




router.use("/clients", clientsRoute);
router.use("/orders", ordersRoute);
router.use("/currency", currencyRoute);



module.exports = router

