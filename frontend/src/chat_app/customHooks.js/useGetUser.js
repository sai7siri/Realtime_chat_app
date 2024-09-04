import { useEffect, useState } from "react"
import { startpoint } from "./apiStatrtPoint";
import toast from "react-hot-toast";


export const useGetUsers=()=>{

   const [loading , setLoading] = useState(false);
   const [users , setUsers] = useState([]);

   const getUsers = async()=>{
      setLoading(true);
      
      const url = `${startpoint}/api/v1/auth/users`
      try{
         const res = await fetch(url, {
            method : "GET",
            credentials : "include",
            headers : {
               "Content-Type" : "application/json"
            }
         });

         if(!res.ok) throw new Error("failed to fetch users");
         const result = await res.json();
         setUsers(result.data);

      }catch(err){
       toast.error("something went wrong")
      }finally{
         setLoading(false);
      }
   }

   useEffect(()=>{
      getUsers();
   }, []);

   return {loading , users }
}