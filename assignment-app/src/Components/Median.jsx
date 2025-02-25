import React, { useEffect, useState } from "react";



export default function Median({installedApps, screenTime, appUsage, age}){
    const [medAge, setMedAge] = useState("N/A")
    const [medInstalledApps, setMedInstalledApps] = useState("N/A")
    const [medScreenTime, setMedScreenTime ] = useState("N/A")
    const [medAppUsage, setMedAppUsage] = useState("N/A")

    useEffect(() => {
    age.sort()
    installedApps.sort()
    screenTime.sort()
    appUsage.sort()
    },[installedApps, screenTime, appUsage, age])

    if(count % 2 === 0){
        setMedAge((age[count/2] + age[(count/2) + 1]) / 2)
        setMedInstalledApps((installedApps[count/2] + installedApps[(count/2) + 1]) / 2)
        setMedScreenTime((screenTime[count/2] + screenTime[(count/2) + 1]) / 2)
        setMedAppUsage((appUsage[count/2] + appUsage[(count/2) + 1]) / 2)
    }

    if(count % 2 === 1) {
        setMedAge(age[(count/2) + 1])
        setMedInstalledApps(installedApps[(count/2) + 1]) 
        setMedScreenTime(screenTime[(count/2) + 1]) 
        setMedAppUsage(appUsage[(count/2) + 1])
    }
    

    return(
        <div>median
            <br></br>
            med age {medAge}
            <br></br>
            med inst {medInstalledApps}
            <br></br>
            med screen {medScreenTime}
            <br></br>
            med app {medAppUsage}
        </div>
    )
}