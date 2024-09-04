
   import { useEffect } from "react";
import { useSocketContext } from "../Context/socket";
import useConversation from "../zustand/useConversation";
import notification from "../../assets/notification.wav"

const useListenMessages=()=>{
   const { socket } = useSocketContext();
   const { setMessages , messages } = useConversation();

   useEffect(()=>{
      socket?.on("newMessage" , (newMessage)=>{

         const sound = new Audio(notification);
         sound.play();
         const formattedMsg = messages && messages?.length > 0 ? [...messages , newMessage] : [newMessage] ;
         setMessages(formattedMsg)

      });

      return ()=> socket.off("newMessage");
   } , [socket , messages , setMessages])

}

export default useListenMessages;