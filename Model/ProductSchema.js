const mongooose = require("mongoose");

const ProductSchema = mongooose.Schema({
  img: { type: String, require: true },
  productname : {type : String, require : true},
  productprice: { type: String, require: true },
});

const ProductModel = mongooose.model("products", ProductSchema);

module.exports = ProductModel;