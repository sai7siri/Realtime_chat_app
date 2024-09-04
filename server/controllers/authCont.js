const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { fullName, userName, password, profile, gender } = req.body;

    const user = await authModel.findOne({ userName });

    if(user) {
      return res.status(401).json({
        success: false,
        message: "user already existed",
      });
    }

    const hashed = bcrypt.hashSync(password , 10);

    const maleProfile = `https://avatar.iran.liara.run/public/boy?userName=${userName}`;
    const femaleProfile = `https://avatar.iran.liara.run/public/girl?userName=${userName}`;

    const newUser = await authModel({
         fullName,
         userName,
         password : hashed,
         profile : gender === "male" ? maleProfile : femaleProfile ,
         gender 
    });

    await newUser.save();

   res.status(200).json({
      success : true,
      message : "account created successful"
   });


  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal error",
    });
  }
};


const loginUser = async (req, res) => {
   try {
     const { userName, password } = req.body;
 
     const user = await authModel.findOne({ userName });
 
     if(!user) {
       return res.status(401).json({
         success: false,
         message: "user not found",
       });
     }
 
     const hashed = await bcrypt.compare(password , user.password);

     if(!hashed) {
      return res.status(401).json({
        success: false,
        message: "incorrect password",
      });
    }
 
     const token = await jwt.sign({userId : user._id} , process.env.JWT_KEY , { expiresIn : '24h' });

     res.cookie("access_token" , token , {
         httpOnly: true,
         secure: false ,  // if false for http and true for https
         sameSite: 'Strict', 
         maxAge: 24 * 60 * 60 * 1000 
     });

     
     user.password = undefined; 

     res.status(200).json({
      success : true,
      message : "login success",
      data : user
     })
 
 
   } catch (err) {
     res.status(500).json({
       success: false,
       message: "internal error",
     });
   }
 };

 const logout = async (req, res)=>{
  try{

     res.cookie("access_token", "" , {maxAge : 0});
     res.status(200).json({
        success : true,
        message : "logout success"
     })

  }catch(err){
     resstatus(500).json({
        success : false,
        message : "failed to logout"
     })
  }
}
 


 const getUsers = async (req, res) => {
   try {

   const logged = req.user;  //payload userId

   // Find user by ID
   const users = await authModel.find( { _id : {$ne : logged } } ).select('-password');

     if(!users) {
      console.log(users)
       return res.status(403).json({
         success: false,
         message: "user not found",
       });
     }

     res.status(200).json({
      success : true,
      data : users
     })
 
 
   } catch (err) {
      console.log(err)
     res.status(500).json({
       success: false,
       message: "internal error",
     });
   }
 };


module.exports = { createUser , loginUser , getUsers , logout}
