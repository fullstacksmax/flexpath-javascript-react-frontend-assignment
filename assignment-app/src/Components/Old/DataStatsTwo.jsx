import { useEffect, useState, useContext } from "react"
import Median from "../Median"
import Tabulated from "../Tabulated"
import SearchContextProvider, { SearchContext } from '../Context'




export default function DataStats() {
    const {searchContext, dataContext, setDataContext} = useContext(SearchContext)
    const [count, setCount] = useState("")
    const appUsage = [] //[0]
    const screenTime = []
    const installedApps = []
    const age = []


    

    /* dataContext.forEach(e => {
        console.log("test")
        age.push(Number(e.Age))
        userId.push(Number(e["User ID"]))
        deviceModel.push(e["Device Model"])
        operatingSystem.push(e["Operating System"])
        batteryDrain.push(e["Battery Drain (mAh/day)"])
        dataUsage.push(e["Data Usage (MB/day)"])
        gender.push(e.Gender)
        behaviorClass.push(e["User Behavior Class"])
        installedApps.push(Number(e["Number of Apps Installed"]))
        screenTime.push(Number(e["Screen On Time (hours/day)"]))
        appUsage.push(Number(e["App Usage Time (min/day)"]))
    }); */
    
    
    
/*     if(dataContext) {
        console.log("avgstats")
        dataContext.map((item, index) => {
            console.log(item)
        })
} */
    
    
    /* console.log(`age is `, age)
    console.log(`avgage is `, avgAge)

    console.log(`appusage `, appUsage)
    console.log(`screentime `, screenTime)
    console.log(`installedapps  `, installedApps) */
    
    
    
    return (
        <div>
 data stats
           {/*  <br></br>
            test
            count {count}
            <br></br>
            avg age {avgAge}
            <br></br>
            avg installed apps {avgInstalledApps}
            <br></br>
            avg screentime {avgScreenTime}
            <br></br>
            avg app usage {avgAppUsage}
            <br></br> */}
           {/*  med age {medAge}
            <br></br>
            med installed apps {medInstalledApps}
            <br></br>
            med screentime {medScreenTime}
            <br></br>
            med app usage {medAppUsage} */}
            {/* <Median age={age} installedApps={installedApps} 
            screenTime={screenTime} appUsage={appUsage} /> */}
        
            
   

            
            
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