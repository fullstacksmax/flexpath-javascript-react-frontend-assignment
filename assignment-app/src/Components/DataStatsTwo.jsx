import { useEffect, useState } from "react"
import Median from "./Median"
import Tabulated from "./Tabulated"




export default function DataStats({data}) {
    const [count, setCount] = useState("")
    const userId = []
    const deviceModel = []
    const operatingSystem = []
    const appUsage = []
    const screenTime = []
    const batteryDrain = []
    const installedApps = []
    const dataUsage = []
    const age = []
    const gender = []
    const behaviorClass = []

    

    data.forEach(e => {
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
    });
    
    let avgAge = age.reduce((acc, v) => acc + v, 0) / age.length;
    let avgInstalledApps = installedApps.reduce((acc, v) => acc + v, 0) / installedApps.length;
    let avgScreenTime = screenTime.reduce((acc, v) => acc + v, 0) / screenTime.length;
    let avgAppUsage = appUsage.reduce((acc, v) => acc + v, 0) / appUsage.length;
    

    useEffect(() => {
        setCount(data.length);
        console.log('data stats useeffect hook')
         
        
        
    },[data])
    
    
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
           {/*  med age {medAge}
            <br></br>
            med installed apps {medInstalledApps}
            <br></br>
            med screentime {medScreenTime}
            <br></br>
            med app usage {medAppUsage} */}
            {/* <Median age={age} installedApps={installedApps} 
            screenTime={screenTime} appUsage={appUsage} /> */}
        <Tabulated userId={userId} deviceModel={deviceModel} operatingSystem={operatingSystem} appUsage={appUsage}
        screenTime={screenTime} batteryDrain={batteryDrain} installedApps={installedApps} dataUsage={dataUsage}
        age={age} gender={gender} behaviorClass={behaviorClass} />
            
   

            
            
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