import {useState} from "react";
import {startpoint} from "./apiStatrtPoint";

export const useSignUp = ()=>{

   const [loading , setLoading] = useState(false);

   const signup = async (data)=>{
      setLoading(true);
      const url = `${startpoint}/api/v1/auth/create`
      try{
         const res = await fetch(url , {
            method : "POST",
            credentials : "include",
            headers : {
               "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
         });

         const response = await res.json();
         return response;
      }catch(err){
         return err;
      }finally{
         setLoading(false);
      }
   }

   return {loading , signup}

}