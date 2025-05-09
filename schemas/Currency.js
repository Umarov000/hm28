const { Schema, model } = require("mongoose");

const currencySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

module.exports = model("Currency", currencySchema);
