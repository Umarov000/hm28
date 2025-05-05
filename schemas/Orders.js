const {Schema, model} = require("mongoose")


const orderSchema = new Schema({
  order_unique_id: {
    type: Number,
    required: true,
  },
  client_id: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  product_link: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  summa: {
    type: Number,
    required: true,
  },
  currency_id: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
  },
  truck:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true
  }
});

module.exports = model("Order", orderSchema);
