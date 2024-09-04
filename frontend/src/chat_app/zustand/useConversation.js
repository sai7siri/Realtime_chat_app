import { create } from "zustand";

const useConversation= create((set)=>({

      // selected users from total users

   selectedUser : null,
   setSelectedUser : (user)=> set({ selectedUser : user }),

   //messagees
   messages : [],
   setMessages : (messages)=> set({ messages}),

   // onlineUsers
   onlineUser : [],
   setOnlineUser : (user)=> set({ onlineUser : user })

}));

export default useConversation;