
import { createContext, useState } from "react";


export const SearchContext = createContext("");


export default function SearchContextProvider({ children }) {
    const [searchContext, setSearchContext] = useState(null)
    const [dataContext, setDataContext] = useState([])
    const [avgAge, setAvgAge] = useState("")
    const [avgInstalledApps, setAvgInstalledApps] = useState("")
    const [avgScreenTime, setAvgScreenTime] = useState("")
    const [avgAppUsage, setAvgAppUsage] = useState("")
    const [medAge, setMedAge] = useState("")
    const [medInstalledApps, setMedInstalledApps ] = useState("")
    const [medScreenTime, setMedScreenTime ] = useState("")
    const [medAppUsage, setMedAppUsage ] = useState("")
    const [filterTypeOptionsContext, setfilterTypeOptionsContext] = useState("model")
    const [cardsContext, setCardsContext] = useState("")
    

    return(
        <SearchContext.Provider value={{searchContext, setSearchContext, dataContext, setDataContext, avgAge, setAvgAge, avgInstalledApps, setAvgInstalledApps, avgScreenTime, setAvgScreenTime, avgAppUsage, setAvgAppUsage
            , medAge, setMedAge, medInstalledApps, setMedInstalledApps, medScreenTime, setMedScreenTime, medAppUsage, setMedAppUsage, filterTypeOptionsContext, setfilterTypeOptionsContext, cardsContext, setCardsContext}}>
            {children}
            </SearchContext.Provider>
    );
}