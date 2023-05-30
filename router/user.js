const express = require("express");
const usermodel = require("../schema/Userschema");
const router  = express.Router();
router.get("/getall",async(req,res)=>{
    try {
        const result = await usermodel.find();
      
        res.send(result);
      } catch (error) {
        res.status(500).send(error);
      }
});
router.post('/create', async(req,res)=>{
    try{
        const newuser = new usermodel(req.body);
        const result = await newuser.save();
        res.send(result)
    }catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
    
})
// router.post('/update', async(req,res)=>{
//     try{
//         const newuser = new usermodel.findOneAndUpdate({_id:req.params.});
//         const result = await newuser.save();
//         res.send(result)
//     }catch (error) {
//         console.log(error);
//         res.status(400).send(error);
//       }
    
// })
router.put('/update/:id', async (req,res,next) => {
    try{
        const _id = req.body.id;
        const updatedResponse = await usermodel.findOneAndUpdate(_id,req.body,{new:true})
        res.send(updatedResponse);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
})

router.delete('/data/:id',async(req,res)=>{
try{
    const deletedResponse = await usermodel.findByIdAndRemove(req.params.id)
    res.send(deletedResponse)
}catch(err){
    console.error(err);
    res.status(500).send(err);
}
})
module.exports = router