import React from 'react'
import Message from './Message'
import { useGetMessages } from '../customHooks.js/useGetMessages'
import useConversation from '../zustand/useConversation';
import useListenMessages from '../customHooks.js/useListenMessages';

function Messages() {

    const {loading} = useGetMessages();
    const { messages } = useConversation();
    
    //calling live message
      useListenMessages();
      
  return (
    <div className='p-3'>
      
      {
        loading ? (
<div className="flex w-11/12 flex-col gap-10 items-center justify-between">
  <div className="flex items-center gap-4 w-full">
    <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
    <div className='flex flex-col w-full gap-4'>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  </div>
  <div className="flex items-center gap-4 w-full">
    <div className='flex flex-col w-full gap-4'>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
    <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
  </div>
</div>
        ) 
        
       :(
        <div>
          {
             messages && messages.length > 0 ? (
              messages?.map((list , i)=> (
               <Message key={i} data={list} />
              ) )
            ) : (
              <p className='text-center content-center font-medium text-white '>
                Let's Start Conversation 🤪
              </p>
            )
          }
        </div>
       ) 
      
        
      }


    </div>
  )
}
export default Messages
