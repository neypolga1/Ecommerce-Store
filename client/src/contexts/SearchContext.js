import React,{createContext, useState} from "react";


export const SearchContext = createContext()

const SearchProvider = ({children}) =>{
    const [searched,setSearched] = useState('')
    return <SearchContext.Provider value={{searched,setSearched}}>{children}</SearchContext.Provider>
}

export default SearchProvider;