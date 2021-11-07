const express = require('express');
const router = express.Router();
const Info = require('./schema')


router.get('/ninjas', async (req,res)=>{
     var find = await Info.find();

     res.json(find)
   
})
router.get('/get/:id', async (req,res)=>{
     var find = await Info.findById(req.params.id);

     res.json(find)
   
})


router.post('/ninjas',async(req,res)=>{
    console.log(req.body);
    var data = new Info({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        city:req.body.city,
        number:req.body.number,
        email:req.body.email,
        college:req.body.college,
        role:req.body.role,
        duration:req.body.duration
    })
await data.save();
    res.json(data);



})

router.put("/ninjas",async(req,res)=>{
    const update = await Info.update({_id:req.body._id},{$set:{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age,
        city:req.body.city,
        number:req.body.number,
        email:req.body.email,
        college:req.body.college,
        role:req.body.role,
        duration:req.body.duration
    }});

    res.json(update)
})

router.delete('/ninjas/:id',async(req,res)=>{
    var delData = await Info.findByIdAndRemove(req.params.id).then(()=>{
        res.json("message deleted successfully")
    })
})

module.exports=router;
