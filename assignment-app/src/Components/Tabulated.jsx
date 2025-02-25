import React from 'react'







export default function Tabulated({userId, deviceModel, operatingSystem, appUsage, screenTime, batteryDrain, installedApps, dataUsage, age, gender, behaviorClass  }) {
    console.log(userId)

    return(
        <body>
        <table class ="table table-striped">
            <th scope="col" data-field={userId}>User ID</th>
            <th scope="col" data-field={deviceModel}>Device Model</th>
            <th scope="col" data-field={operatingSystem}>Operating System</th>
            <th scope="col" data-field={appUsage}>App Usage Time (min/day)</th>
            <th scope="col" data-field={screenTime}>Screen On Time (hours/day)</th>
            <th scope="col" data-field={batteryDrain}>Battery Drain (mAh/day)</th>
            <th scope="col" data-field={installedApps}>Number of Apps Installed</th>
            <th scope="col" data-field={dataUsage}>Data usage (MB/day)</th>
            <th scope="col" data-field={age}>Age</th>
            <th scope="col" data-field={gender}>Gender</th>
            <th scope="col" data-field={behaviorClass}>User Behavior Class</th>

        </table>
        </body>
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