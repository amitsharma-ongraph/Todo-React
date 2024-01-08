import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const  loginController=async (req,res)=>{
    const {email,password}=req.body;
    console.log("email",email);
    console.log("password",password);
    const user=await userModel.findOne({email});
    console.log(user)
    console.log("user:",user)
    if(!user){
        return res.status(500).send({
            success:false,
            message:"User doesn't exists"
        })
    }
    const result=await bcrypt.compare(password,user.password);
    if(result===true){
        const token=Jwt.sign({_Id:user._Id},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).send({
            success:true, 
            message:"Login sucessfull",
            token:token
        })
    }
    else{
        return res.status(500).send({
            success:false,
            message:"Incorrect Password"
        })
    }
}

export const registerController=async (req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
    const existingUser=await userModel.findOne({email})
    if(existingUser){
        res.status(200).send({
            success:true,
            message:"Already Registered"
        })
    }
    if(name==""){
        res.status(500).send({
            success:false,
            message:"Please enter a name"
        })
    }
    else if(password!=confirmPassword){
        res.status(500).send({
            success:false,
            message:"Passwords doesn't match"
        })
    }
    else{
       const hashedPassword=await bcrypt.hash(password,10);
       console.log(hashedPassword);
       try{
         const user=await new userModel({
            name,email,password:hashedPassword
         }).save().then((user)=>{
           const token=Jwt.sign({_Id:user._Id},process.env.JWT_SECRET,{expiresIn:"1d"})
           res.status(201).send({
            success:true,
            message:"Registered Successfully",
            token:token
           })
         })
       }catch(err){
        res.status(500).send({
            success:false,
            message:"error occured"
        })
        console.log(err)
       }
    }
}