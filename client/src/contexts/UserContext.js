import axios from "axios";
import { createContext,useState,useEffect } from "react";


export const UserContext = createContext({})


const UserContextProvider = ({children}) =>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        if(!user){
            axios.get("http://127.0.0.1:4545/profile",{ withCredentials: true }).then(({data}) => {
                setUser(data)
            
            })
            
        }
    },[])
    console.log(user)
    return <UserContext.Provider value={{user,setUser}} >{children}</UserContext.Provider>
}

export default UserContextProvider;
