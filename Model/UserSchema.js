const mongooose = require("mongoose");

const UserSchema = mongooose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  username: { type: String, require: true }
});

const UserModel = mongooose.model("users", UserSchema);

module.exports = UserModel;
