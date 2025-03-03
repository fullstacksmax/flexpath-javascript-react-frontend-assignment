import { useEffect, useState, useContext } from "react"
import SearchContextProvider, { SearchContext } from './Context'
import Cards from "./Cards"



const DataStats = function DataStats({keyword}) {
    const {searchContext, dataContext, setDataContext} = useContext(SearchContext)
    const [count, setCount] = useState("")

    const {avgAge, setAvgAge} = useContext(SearchContext)
    const {avgInstalledApps, setAvgInstalledApps} = useContext(SearchContext)
    const {avgScreenTime, setAvgScreenTime} = useContext(SearchContext)
    const {avgAppUsage, setAvgAppUsage} = useContext(SearchContext)
    const {medAge, setMedAge} = useContext(SearchContext)
    const {medInstalledApps, setMedInstalledApps } = useContext(SearchContext)
    const {medScreenTime, setMedScreenTime } = useContext(SearchContext)
    const {medAppUsage, setMedAppUsage } = useContext(SearchContext)

    const [appUsageArr, setAppUsageArr] = useState([])
    const [screenTimeArr, setScreenTimeArr] = useState([])
    const [installedAppsArr, setInstalledAppsArr] = useState([])
    const [ageArr, setAgeArr] = useState([])
    

    
    //console.log('data stats start', data)
    //console.log('data stats start datacontext', dataContext)

    if(!dataContext) {
       return null
    }
    
    
    
    
    

    

    useEffect(() => {
    const age = []
    const installedApps = []
    const screenTime = []
    const appUsage = []
    setCount(dataContext.length)
        /* console.log('useeffect hook count 2', count)
        console.log(count)
        console.log('useeffect hook prior to declaration', data)
        console.log('useeffect hook prior to declaration datacontext', dataContext) */
        const statsPage = () => {
        
            /* console.log('useeffect hook statspage() defined', data)
            console.log('useeffect hook statspage() defined datacontext', dataContext) */
            //console.log(screenTime)
            
            
            
            //console.log(screenTime)
            /* console.log(installedApps)
            console.log(appUsage)
            console.log(age)
            console.log('useeffect hook start', data) */
            
/*             console.log('useeffect hook count 1', count) */
            
            //console.log(screenTime)

            
            //console.log(screenTime)
            
            setAvgAge((ageArr.reduce((acc, v) => acc + v, 0) / ageArr.length).toFixed((0)));
            setAvgInstalledApps((installedAppsArr.reduce((acc, v) => acc + v, 0) / installedAppsArr.length).toFixed((0)))
            setAvgScreenTime((screenTimeArr.reduce((acc, v) => acc + v, 0) / screenTimeArr.length).toFixed((0)));
            setAvgAppUsage((appUsageArr.reduce((acc, v) => acc + v, 0) / appUsageArr.length).toFixed((0)));
            //console.log(screenTime)
            
        
            if(count % 2 === 0){
            //console.log(screenTime)
            /* console.log(installedApps)
            console.log(appUsage)
            console.log(age) */
                 setMedAge(((ageArr[count/2] + ageArr[(count/2) + 1]) / 2).toFixed(1))
                 setMedInstalledApps(((installedAppsArr[count/2] + installedAppsArr[(count/2) + 1]) / 2).toFixed(1))
                 setMedScreenTime(((screenTimeArr[count/2] + screenTimeArr[(count/2) + 1]) / 2).toFixed(1))
                 setMedAppUsage(((appUsageArr[count/2] + appUsageArr[(count/2) + 1]) / 2).toFixed(1))
            }
        
            if (count % 2 != 0) {
            //console.log(screenTime)
            /* console.log(installedApps)
            console.log(appUsage)
            console.log(age) */

                 setMedAge((ageArr[(count/2) - 0.5]).toFixed(1))
                 setMedInstalledApps((installedAppsArr[(count/2) - 0.5]).toFixed(1))
                 setMedScreenTime((screenTimeArr[(count/2) - 0.5]).toFixed(1))
                 setMedAppUsage((appUsageArr[(count/2) - 0.5]).toFixed(1))
            }
            if(dataContext != null)createArrays();
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
        //console.log(screenTime)
        //console.log('useeffect prior to call', data)
        //console.log('useeffect prior to call datacontext', dataContext)
        
        createArrays();
        statsPage();
    

        //console.log('useeffect post call', data)
        //console.log('useeffect post call datacontext', dataContext)
        //console.log(screenTime)
         
        
        
    },[dataContext, count, keyword])
    
    
    /* console.log(`age is `, age)
    console.log(`avgage is `, avgAge)

    console.log(`appusage `, appUsage)
    console.log(`screentime `, screenTime)
    console.log(`installedapps  `, installedApps) */

    if(count === 0) {
        return <div>
            <Cards />
            No Results
        </div>
    }
    
    return (
        <div className="mx-5">
        <Cards count={count} keyword={keyword} />
            <div className="fs-5 text">
            <br></br>
            Displaying {count} Results
            </div>
        </div>
    );
}


export default DataStats

