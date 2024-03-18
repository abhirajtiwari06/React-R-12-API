 const user = require("../models/userModel")
 
 
 exports.home = function(req,res,next){
    res.status(200).json({
     sucess:true,message: "This is test route"
    });
 };

//  console.log("hello");
  

 exports.createuser = async function(req,res,next){

    try {
        const newuser = new user(req.body)
         await newuser.save();

        res.status(201).json({sucess:true,user:newuser  });
    } catch (error) {
        res.status(500).json({sucess:false , message:error.message });
        //message:error thn iske baad 
    }


    const newuser = new User(req.body)

    res.status(201).json({sucess:true,user:req.body });
};