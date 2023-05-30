const express = require("express");
const app = express();
const user = require("./router/user.js");
const authall = require("./router/register")
const dbConnect = require("./mongoose");
const dotenv = require('dotenv');
const auth = require('./auth')
const cors = require('cors')
dotenv.config();
dbConnect();
app.use(express.json())
app.use(cors());
app.use("/auth",authall)
app.use("/", auth.authenticateUser);
app.use("/api",user)

app.get("/",(req,res)=>{
res.send("hello manish kumar")
});
app.listen(2000,()=>{
console.log("server on");
});