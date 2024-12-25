const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Model/UserSchema");
const ProductModel = require("../Model/ProductSchema");
const CartModel = require("../Model/CartSchema");

const UserRouter = Router();

UserRouter.post("/register", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, 5, async (err, hash) => {
      if (err) {
        return res.send({ msg: err });
      }
      let obj = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      };
      let data = await UserModel.create(req.body);
      res.status(200).send({ msg: "User registered successfully", data });
    });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({ msg: "User Logged in successfully" });
        } else {
          res.status(501).send({ msg: "Incorrect Passwrod" });
        }
      });
    } else {
      res.status(501).send({ msg: "User not registered" });
    }
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});


UserRouter.post("/addproduct", async (req, res) => {
  try {
      let obj = {
        img: req.body.imagelink,
        productname: req.body.productname,
        productprice: req.body.productprice,
      };
      let data = await ProductModel.create(obj);
      res.status(200).send({ msg: "Product Added successfully", data });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});
UserRouter.post("/cart", async (req, res) => {
  try {
    
      let data = await CartModel.create(obj);
      res.status(200).send({ msg: "Product Added successfully", data });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});
UserRouter.get("/cart", async (req, res) => {
  try {
      let data = await CartModel.find();
      res.status(200).send({ msg: "Product Added successfully", data });
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
});

UserRouter.get('/allproduct',async(req,res)=>{
  try {
    let data=await ProductModel.find()
    res.status(200).send({ msg: "Products",data});
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
})


module.exports = UserRouter;
