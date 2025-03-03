
import { createContext, useState } from "react";


export const SearchContext = createContext("");


export default function SearchContextProvider({ children }) {
    const [searchContext, setSearchContext] = useState(null)
    const [dataContext, setDataContext] = useState(null)
    

    return(
        <SearchContext.Provider value={{searchContext, setSearchContext, dataContext, setDataContext}}>
            {children}
            </SearchContext.Provider>
    );
}