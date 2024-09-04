import {createContext, useState , useContext} from "react";

export const AuthContext=createContext();

export const useAuthContext=()=>{
   return useContext(AuthContext);  // here direct used auth use context created hook
}


export const AuthContextProvider=({ children })=>{
      const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem("authuser") || null ));


      return (
         <AuthContext.Provider value={{ authUser , setAuthUser }}>
            {children}
         </AuthContext.Provider>
      )

}