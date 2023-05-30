const mongoose = require("mongoose");
const schema = mongoose.Schema({
name:{
type:String
},
price:{
type:Number
},
quantity:{
type :Number
}
});
const usermodel = mongoose.model('user',schema);
module.exports = usermodel;