import { useEffect, useState, useContext } from "react"
import SearchContextProvider, { SearchContext } from './Context'
import Cards from "./Cards"



const DataStats = function DataStats({ keyword }) {
    const { searchContext, dataContext, setDataContext } = useContext(SearchContext)
    const [count, setCount] = useState("")

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
    useEffect(() => {
        const age = []
        const installedApps = []
        const screenTime = []
        const appUsage = []
        setCount(dataContext.length)

        const statsPage = () => {
            setAvgAge((ageArr.reduce((acc, v) => acc + v, 0) / ageArr.length).toFixed((0)));
            setAvgInstalledApps((installedAppsArr.reduce((acc, v) => acc + v, 0) / installedAppsArr.length).toFixed((0)))
            setAvgScreenTime((screenTimeArr.reduce((acc, v) => acc + v, 0) / screenTimeArr.length).toFixed((0)));
            setAvgAppUsage((appUsageArr.reduce((acc, v) => acc + v, 0) / appUsageArr.length).toFixed((0)));

            setMedAge(((ageArr[count / 2] + ageArr[(count / 2) + 1]) / 2).toFixed(1))
            setMedInstalledApps(((installedAppsArr[count / 2] + installedAppsArr[(count / 2) + 1]) / 2).toFixed(1))
            setMedScreenTime(((screenTimeArr[count / 2] + screenTimeArr[(count / 2) + 1]) / 2).toFixed(1))
            setMedAppUsage(((appUsageArr[count / 2] + appUsageArr[(count / 2) + 1]) / 2).toFixed(1))


            if (count % 2 != 0) {


                setMedAge((ageArr[(count / 2) - 0.5]).toFixed(1))
                setMedInstalledApps((installedAppsArr[(count / 2) - 0.5]).toFixed(1))
                setMedScreenTime((screenTimeArr[(count / 2) - 0.5]).toFixed(1))
                setMedAppUsage((appUsageArr[(count / 2) - 0.5]).toFixed(1))
            }
            if (dataContext != null) createArrays();
        }
        const createArrays = () => {
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
            setScreenTimeArr(screenTime)
            setAppUsageArr(appUsage)
            setInstalledAppsArr(installedApps)
            setAgeArr(age)
        }


        createArrays();
        statsPage();






    }, [dataContext, count, keyword])







}


export default DataStats

