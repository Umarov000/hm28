const Orders = require("../schemas/Orders");


async function findAll(req, res) {
  try {
    const orders = await Orders.find({})
    res.send({ orders });
  } catch (error) {
    console.log(error);
  }
}
async function findOne(req, res) {
  try {
    const {id} = req.params
    const order = await Orders.findById(id);
    res.send(order);
  } catch (error) {
    console.log(error);
  }
}
async function create(req, res) {
  try {
    const body = req.body
    await Orders.create(body);
    res.status(201).send(`Order successfully added`);
  } catch (error) {
    console.log(error);
  }
}
async function update(req, res) {
  try {
    const {id}= req.params
    const body = req.body
    await Orders.findByIdAndUpdate(id, body);
    res.send(`Order successfully updated`);
  } catch (error) {
    console.log(error);
  }
}
async function remove(req, res) {
  try {
    const {id}= req.params
    await Orders.findByIdAndDelete(id);
    res.send(`Order successfully deleted`);
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}


