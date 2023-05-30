const express = require('express');
const Auth = require('../schema/auth');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const router = express.Router();
router.get("/get",(req,res)=>{
res.send("hello manish")
})
router.post('/register', async(req,res)=>{
    try{
        const existUser = await Auth.findOne({email: req.body.email});
        if(existUser) return res.status(500).send({msg : "You are already a registered User"})
        const randomString = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, randomString);
        const newuser = new Auth(req.body);
        const result = await newuser.save();
        res.send(result)
    }catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    
})
router.post('/login', async(req,res)=>{
    try{
        const existUser = await Auth.findOne({email: req.body.email});
        if(!existUser) return res.status(500).send({msg : "You are not  registered User"})

        const valid =  await bcrypt.compare(req.body.password ,existUser.password);
        if(!valid)return res.status(500).send({msg:"password did not match"});
        const token = jwt.sign({existUser},
            process.env.SECRET_KEY,
            {
              expiresIn: "2h",
            }
      );
        res.send(token);
    }catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    
})
module.exports = router;