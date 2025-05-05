const Clients = require("../schemas/Clients");



async function findAll(req, res) {
  try {
    const clients = await Clients.find({})
    res.send({clients})
  } catch (error) {
    console.log(error);
  }
}
async function findOne(req, res) {
  try {
    const {id} = req.params
    const client = await Clients.findById(id)
    res.send(client)
  } catch (error) {
    console.log(error);
  }
}
async function create(req, res) {
  try {
    const body = req.body
    await Clients.create(body)
    res.status(201).send(`Client successfully added`)
  } catch (error) {
    console.log(error);
  }
}
async function update(req, res) {
  try {
    const {id}= req.params
    const body = req.body
    await Clients.findByIdAndUpdate(id,body)
    res.send(`Client successfully updated`)
  } catch (error) {
    console.log(error);
  }
}
async function remove(req, res) {
  try {
    const {id}= req.params
    await Clients.findByIdAndDelete(id)
    res.send(`Client successfully deleted`);
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


