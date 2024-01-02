import React, { createContext,useEffect,useState } from 'react'


export const LogInContext = createContext()

const LogInProvider = ({children}) => {
    const [isLogIn , setIsLogIn] = useState(JSON.parse(localStorage.getItem('isLogIn')))
    

  useEffect(()=>{
    localStorage.setItem('isLogIn',JSON.stringify(isLogIn))
  },[isLogIn])


  return <LogInContext.Provider value={{isLogIn,setIsLogIn}}>{children}</LogInContext.Provider>
}


export default LogInProvider;