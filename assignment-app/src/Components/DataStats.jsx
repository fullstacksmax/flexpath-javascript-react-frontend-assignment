import { useEffect, useState, useContext, useCallback } from "react"
import SearchContextProvider, { SearchContext } from './Context'
import Cards from "./Cards"



const DataStats = function DataStats({ keyword }) {
    const { searchContext, dataContext, setDataContext } = useContext(SearchContext)
    const [count, setCount] = useState(dataContext.length)

    const { avgAge, setAvgAge } = useContext(SearchContext)
    const { avgInstalledApps, setAvgInstalledApps } = useContext(SearchContext)
    const { avgScreenTime, setAvgScreenTime } = useContext(SearchContext)
    const { avgAppUsage, setAvgAppUsage } = useContext(SearchContext)
    const { medAge, setMedAge } = useContext(SearchContext)
    const { medInstalledApps, setMedInstalledApps } = useContext(SearchContext)
    const { medScreenTime, setMedScreenTime } = useContext(SearchContext)
    const { medAppUsage, setMedAppUsage } = useContext(SearchContext)

    const [appUsageArr, setAppUsageArr] = useState([])
    const [screenTimeArr, setScreenTimeArr] = useState([])
    const [installedAppsArr, setInstalledAppsArr] = useState([])
    const [ageArr, setAgeArr] = useState([])




    if (!dataContext) {
        return null
    }

    const createArrays = useCallback(() => {
        const age = []
        const installedApps = []
        const screenTime = []
        const appUsage = []

        dataContext.forEach(e => {

            age.push(Number(e.Age))
            installedApps.push(Number(e["Number of Apps Installed"]))
            screenTime.push(Number(e["Screen On Time (hours/day)"]))
            appUsage.push(Number(e["App Usage Time (min/day)"]))

        })
        age.sort()
        installedApps.sort()
        screenTime.sort()
        appUsage.sort()
        console.log(appUsage)
        return({
            //its not much fun when .sort() doesnt sort the way you think it does.
            agePass : age.sort((a, b) => a - b),
            installedAppsPass : installedApps.sort((a, b) => a - b),
            screenTimePass: screenTime.sort((a, b) => a - b),
            appUsagePass: appUsage.sort((a, b) => a - b)
        })
    }, [dataContext])

    

    useEffect(() => {
        const { agePass, installedAppsPass,screenTimePass, appUsagePass } = createArrays();
        //console.log(appUsagePass)
        setCount(dataContext.length)

        
            setAvgAge((agePass.reduce((acc, v) => acc + v, 0) / agePass.length).toFixed((0)));
            setAvgInstalledApps((installedAppsPass.reduce((acc, v) => acc + v, 0) / installedAppsPass.length).toFixed((0)))
            setAvgScreenTime((screenTimePass.reduce((acc, v) => acc + v, 0) / screenTimePass.length).toFixed((0)));
            setAvgAppUsage((appUsagePass.reduce((acc, v) => acc + v, 0) / appUsagePass.length).toFixed((0)));

            if(dataContext.length % 2 === 0) {
            setMedAge(((agePass[count / 2] + agePass[(count / 2) + 1]) / 2).toFixed(1))
            setMedInstalledApps(((installedAppsPass[count / 2] + installedAppsPass[(count / 2) + 1]) / 2).toFixed(1))
            setMedScreenTime(((screenTimePass[count / 2] + screenTimePass[(count / 2) + 1]) / 2).toFixed(1))
            setMedAppUsage(((appUsagePass[count / 2] + appUsagePass[(count / 2) + 1]) / 2).toFixed(1))
        }


            if (dataContext.length % 2 != 0) {

                console.log(appUsagePass)
                console.log((dataContext.length / 2) - 0.5)
                setMedAge((agePass[(dataContext.length / 2) - 0.5]).toFixed(1))
                setMedInstalledApps((installedAppsPass[(dataContext.length / 2) - 0.5]).toFixed(1))
                setMedScreenTime((screenTimePass[(dataContext.length / 2) - 0.5]).toFixed(1))
                setMedAppUsage((appUsagePass[(dataContext.length / 2) - 0.5]).toFixed(1))
            }
            
        

    }, [dataContext, createArrays])







}


export default DataStats

