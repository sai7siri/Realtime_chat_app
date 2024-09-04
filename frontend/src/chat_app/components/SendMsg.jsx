import React, { useState } from "react";
import { IoSendOutline } from "react-icons/io5";
import { useSendMessage } from "../customHooks.js/useSendMessage";
import toast from "react-hot-toast";

function SendMsg() {
  const [data , setData] = useState({
    message : ""
  })

  const { sendMessage } = useSendMessage();

  const handleSend = async (e) => {
    e.preventDefault();
    
    if (!data.message) {
      return toast.error("Please type a message...");
    }
     await sendMessage(data);
    setData({
      message : ""
    });
  };

  return (
    <form onSubmit={handleSend} className="py-3">
      <div className="px-6 relative">
        <input
          name="message"
          value={data.message || ""}
          onChange={(e) => setData({... data, message : e.target.value })}
          type="text"
          className="input bg-gray-200 w-full"
          placeholder="Send message...."
        />
        <button type="submit" className="absolute top-3 right-8">
          <IoSendOutline size={"20px"} />
        </button>
      </div>
    </form>
  );
}

export default SendMsg;
