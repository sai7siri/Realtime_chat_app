const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],

    messages: [
      {
        type: mongoose.Types.ObjectId,
        ref: "message",
        default : []
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("conversation", conversationSchema);
