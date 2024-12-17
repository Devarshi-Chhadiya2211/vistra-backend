const { Router } = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Model/UserSchema");

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
      let data = await UserModel.create(obj);
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

module.exports = UserRouter;
