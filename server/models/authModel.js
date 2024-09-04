const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
   
   fullName : {
      type : String,
      required : true
   },

   userName : {
      type : String,
      required : true,
      unique : true
   },

   password : {
      type : String,
      required : true
   },

   profile : {
      type : String,
      default : ""
   },
   
   gender : {
      type : String,
      enum : ["male" , "female"],
      required : true
   }
},

{
   timestamps : true
}

);

module.exports = mongooose.model("user" , userSchema);