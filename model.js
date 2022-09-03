const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
      firstName: String,
      lastName: String,

      age: {
         type:Number,
         },

      email:{
         type: String,
         require:true,
           }, 

       password:{
        type: String,
        require:true,
        minlength:7,

       },    
  });

  const User = new mongoose.model("User", userSchema);
  module.exports=User;