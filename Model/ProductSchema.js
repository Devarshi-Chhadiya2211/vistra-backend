const mongooose = require("mongoose");

const ProductSchema = mongooose.Schema({
  imagelink: { type: String, require: true },
  price: { type: String, require: true },
});

const ProductModel = mongooose.model("users", ProductSchema);

module.exports = ProductModel;

