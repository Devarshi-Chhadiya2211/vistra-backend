const mongooose = require("mongoose");

const cartSchema = mongooose.Schema({
  img: { type: String, require: true },
  productname : {type : String, require : true},
  productprice: { type: String, require: true },
});

const CartModel = mongooose.model("cart", cartSchema);

module.exports = CartModel;