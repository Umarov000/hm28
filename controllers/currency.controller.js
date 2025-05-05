const Currency = require("../schemas/Currency");


async function findAll(req, res) {
  try {
    const currencies = await Currency.find({})
    res.send({ currencies });
  } catch (error) {
    console.log(error);
  }
}
async function findOne(req, res) {
  try {
    const {id} = req.params
    const currency = await Currency.findById(id);
    res.send(currency);
  } catch (error) {
    console.log(error);
  }
}
async function create(req, res) {
  try {
    const body = req.body
    await Currency.create(body);
    res.status(201).send(`Currency successfully added`)
  } catch (error) {
    console.log(error);
  }
}
async function update(req, res) {
  try {
    const {id}= req.params
    const body = req.body
    await Currency.findByIdAndUpdate(id, body);
    res.send(`Currency successfully updated`);
  } catch (error) {
    console.log(error);
  }
}
async function remove(req, res) {
  try {
    const {id}= req.params
    await Currency.findByIdAndDelete(id);
    res.send(`Currency successfully deleted`);
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


