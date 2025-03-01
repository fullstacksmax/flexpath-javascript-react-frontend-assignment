import { useEffect, useState, useContext } from "react"
import SearchContextProvider, { SearchContext } from './Context'



export default function DataStats() {
    const {searchContext, dataContext, setDataContext} = useContext(SearchContext)
    const [count, setCount] = useState("")
    const [data, setData] = useState([])
    const [avgAge, setAvgAge] = useState("")
    const [avgInstalledApps, setAvgInstalledApps] = useState("")
    const [avgScreenTime, setAvgScreenTime] = useState("")
    const [avgAppUsage, setAvgAppUsage] = useState("")
    const [medAge, setMedAge] = useState("")
    const [medInstalledApps, setMedInstalledApps ] = useState("")
    const [medScreenTime, setMedScreenTime ] = useState("")
    const [medAppUsage, setMedAppUsage ] = useState("")
    const appUsage = []
    const screenTime = []
    const installedApps = []
    const age = []
    
    console.log('data stats start', data)
    console.log('data stats start datacontext', dataContext)

    if(!dataContext) {
       return null
    }
    
    
    
    
    

    

    useEffect(() => {
        console.log('useeffect hook start', data)
        setData(dataContext)
        setCount(dataContext.length)
        console.log('useeffect hook prior to declaration', data)
        console.log('useeffect hook prior to declaration datacontext', dataContext)
        const statsPage = () => {
            console.log('useeffect hook statspage() defined', data)
            console.log('useeffect hook statspage() defined datacontext', dataContext)
            dataContext.forEach(e => {
                age.push(Number(e.Age))
                installedApps.push(Number(e["Number of Apps Installed"]))
                screenTime.push(Number(e["Screen On Time (hours/day)"]))
                appUsage.push(Number(e["App Usage Time (min/day)"]))
            });
            
            console.log(screenTime)
            console.log(installedApps)
            console.log(appUsage)
            console.log(age)
            setAvgAge(age.reduce((acc, v) => acc + v, 0) / age.length);
            setAvgInstalledApps(installedApps.reduce((acc, v) => acc + v, 0) / installedApps.length)
            setAvgScreenTime(screenTime.reduce((acc, v) => acc + v, 0) / screenTime.length);
            setAvgAppUsage(appUsage.reduce((acc, v) => acc + v, 0) / appUsage.length);
            age.sort()
            installedApps.sort()
            screenTime.sort()
            appUsage.sort()
        
            if(count % 2 === 0){
                 setMedAge((age[count/2] + age[(count/2) + 1]) / 2)
                 setMedInstalledApps((installedApps[count/2] + installedApps[(count/2) + 1]) / 2)
                 setMedScreenTime((screenTime[count/2] + screenTime[(count/2) + 1]) / 2)
                 setMedAppUsage((appUsage[count/2] + appUsage[(count/2) + 1]) / 2)
            }
        
            if(count % 2 === 1) {
                 setMedAge(age[(count/2) + 1])
                setMedInstalledApps(installedApps[(count/2) + 1])
                 setMedScreenTime(screenTime[(count/2) + 1] )
                 setMedAppUsage(appUsage[(count/2) + 1])
            }

        }
        console.log('useeffect prior to call', data)
        console.log('useeffect prior to call datacontext', dataContext)
        if(searchContext != null) statsPage();
        console.log('useeffect post call', data)
        console.log('useeffect post call datacontext', dataContext)
        
         
        
        
    },[searchContext])
    
    
    /* console.log(`age is `, age)
    console.log(`avgage is `, avgAge)

    console.log(`appusage `, appUsage)
    console.log(`screentime `, screenTime)
    console.log(`installedapps  `, installedApps) */

    
    
    return (
        <div>
            data stats
            <br></br>
            count {count}
            <br></br>
            avg age {avgAge}
            <br></br>
            avg installed apps {avgInstalledApps}
            <br></br>
            avg screentime {avgScreenTime}
            <br></br>
            avg app usage {avgAppUsage}
            <br></br>
            med age {medAge}
            <br></br>
            med installed apps {medInstalledApps}
            <br></br>
            med screentime {medScreenTime}
            <br></br>
            med app usage {medAppUsage}

            
            
        </div>
    )
}

/**
 * 0
: 
Age
: 
"40"
App Usage Time (min/day)
: 
"393"
Battery Drain (mAh/day)
: 
"1872"
Data Usage (MB/day)
: 
"1122"
Device Model
: 
"Google Pixel 5"
Gender
: 
"Male"
Number of Apps Installed
: 
"67"
Operating System
: 
"Android"
Screen On Time (hours/day)
: 
"6.4"
User Behavior Class
: 
"4"
User ID
: 
"1"
 */