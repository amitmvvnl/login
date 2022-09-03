const mongoose = require("mongoose");
const User = require("./model");
const express = require("express");
const cors= require("cors");
const { request } = require("http");



mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app=express();
const PORT = 8080;
app.use(cors())
app.listen(PORT,()=>{
    console.log("server at $(PORT)");
});

app.get("/",(req,res)=>{
res.status(200).json({msg:"welcome"});

});
app.get("/login",async(req,res)=>{
   const email =req.query.email;
   const user=await User.findOne({email});
   if (user)
   {
      res.status(200).json({user});
   }
   else{
    res.status(400).json({error:"User not found"});
   }

});






app.post("/signup",async(req,res)=>{
    
    const firstname =req.query.firstname;
    const lastname =req.query.lastname;
    const age =req.query.age;
    const email =req.query.email;
    const password =req.query.password;
  
   const user = new User({
   firstName:firstname, 
   lastName:lastname,
   age,
   email,
   password,
 });

user
   .save()
   .then(() => {
     console.log("User saved");
   })
   .catch((err) => {
     console.log(err);
   });
})

