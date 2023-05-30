const mongoose = require("mongoose");
const schemaall = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type:String,
  }
});
const Auth = mongoose.model("auth", schemaall);
module.exports = Auth;
