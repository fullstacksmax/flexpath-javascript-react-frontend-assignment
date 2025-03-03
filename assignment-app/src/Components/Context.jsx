
import { createContext, useState } from "react";


export const SearchContext = createContext("");


export default function SearchContextProvider({ children }) {
    const [searchContext, setSearchContext] = useState(null)
    const [dataContext, setDataContext] = useState(null)
    const [avgAge, setAvgAge] = useState("")
    const [avgInstalledApps, setAvgInstalledApps] = useState("")
    const [avgScreenTime, setAvgScreenTime] = useState("")
    const [avgAppUsage, setAvgAppUsage] = useState("")
    const [medAge, setMedAge] = useState("")
    const [medInstalledApps, setMedInstalledApps ] = useState("")
    const [medScreenTime, setMedScreenTime ] = useState("")
    const [medAppUsage, setMedAppUsage ] = useState("")
    

    return(
        <SearchContext.Provider value={{searchContext, setSearchContext, dataContext, setDataContext, avgAge, setAvgAge, avgInstalledApps, setAvgInstalledApps, avgScreenTime, setAvgScreenTime, avgAppUsage, setAvgAppUsage
            , medAge, setMedAge, medInstalledApps, setMedInstalledApps, medScreenTime, setMedScreenTime, medAppUsage, setMedAppUsage}}>
            {children}
            </SearchContext.Provider>
    );
}