
import { createContext, useState } from "react";


export const SearchContext = createContext("asdf");

export default function SearchContextProvider({children}){
    const [searchContext, setSearchContext] = useState("")

    return(
        <SearchContext.Provider value={{searchContext, setSearchContext}}>
            {children}
            </SearchContext.Provider>
    );
}