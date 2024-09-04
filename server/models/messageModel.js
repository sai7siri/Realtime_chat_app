const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

   senderId : {
      type : mongoose.Types.ObjectId,
      ref : "user",
      required : true
   },
   receiverId : {
      type : mongoose.Types.ObjectId,
      ref : "user",
      required : true
   },
   message : {
      type : String,
      required : true
   }
},
   {
      timestamps : true
   }
);

module.exports = mongoose.model("message" , messageSchema);