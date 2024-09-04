import { startpoint } from "./apiStatrtPoint";


export const useLogOut = ()=>{

   const logout = async ()=>{
      const url = `${startpoint}/api/v1/auth/logout`
      try{
         const res = await fetch(url , {
            method : "GET",
            credentials : "include",
            headers : {
               "Content-Type" : "application/json"
            },
         });
            const resp = await res.json();
            return resp;
      }catch(err){
         return err;
      }
   }

   return { logout }
}