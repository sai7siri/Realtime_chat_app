import React from "react";
import UserPro from "./UserPro";
import Messages from "./Messages";
import SendMsg from "./SendMsg";
import useConversation from "../zustand/useConversation";
import { useAuthContext } from "../Context/authUser";

function User() {

  const { selectedUser } = useConversation();
  const { authUser } = useAuthContext();

  

  return (
    <> 
        {
          selectedUser && selectedUser !== null ? (
            <div className='min-w-[600px] flex flex-col w-full max-h-screen'>
          <UserPro />
          <div className='flex-1 max-h-[315px] my-1 overflow-auto scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-50'>
          <Messages />
          </div>
    
          <SendMsg />
         </div>
    
          ) : (
            <div className="min-w-[550px] flex flex-col items-center justify-center text-center">
              <p className="text-white font-serif"> Hai 🤗 {authUser?.fullName}</p>
              <p className="text-white font-mono">Let's send message to start conversation 😛</p>
            </div>
          )
        }  
    </>
    
  )
} 
export default User;
