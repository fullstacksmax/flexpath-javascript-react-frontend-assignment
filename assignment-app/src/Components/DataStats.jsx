import { useEffect, useState } from "react"




export default function DataStats({data}) {
    const [count, setCount] = useState("")
    const appUsage = []
    const screenTime = []
    const installedApps = []
    const age = []
    let medAge
    let medInstalledApps
    let medScreenTime
    let medAppUsage
    

    data.forEach(e => {
        age.push(Number(e.Age))
        installedApps.push(Number(e["Number of Apps Installed"]))
        screenTime.push(Number(e["Screen On Time (hours/day)"]))
        appUsage.push(Number(e["App Usage Time (min/day)"]))
    });
    
    let avgAge = age.reduce((acc, v) => acc + v, 0) / age.length;
    let avgInstalledApps = installedApps.reduce((acc, v) => acc + v, 0) / installedApps.length;
    let avgScreenTime = screenTime.reduce((acc, v) => acc + v, 0) / screenTime.length;
    let avgAppUsage = appUsage.reduce((acc, v) => acc + v, 0) / appUsage.length;
    age.sort()
    installedApps.sort()
    screenTime.sort()
    appUsage.sort()

    if(count % 2 === 0){
         medAge = (age[count/2] + age[(count/2) + 1]) / 2
         medInstalledApps = (installedApps[count/2] + installedApps[(count/2) + 1]) / 2
         medScreenTime = (screenTime[count/2] + screenTime[(count/2) + 1]) / 2
         medAppUsage = (appUsage[count/2] + appUsage[(count/2) + 1]) / 2
    }

    if(count % 2 === 1) {
         medAge = age[(count/2) + 1]
         medInstalledApps = installedApps[(count/2) + 1] 
         medScreenTime = screenTime[(count/2) + 1] 
         medAppUsage = appUsage[(count/2) + 1]
    }

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