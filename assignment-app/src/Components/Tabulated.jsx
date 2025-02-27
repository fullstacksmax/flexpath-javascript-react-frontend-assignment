import React from 'react'
import TableRows from "./TableRows"
import { useState, useEffect } from 'react';







export default function Tabulated({ data , keyword  }) {
    //console.log(userId)

        const test = 'test'
        const [tableRows, setRows] = useState([])
        const [tableHeader, setHeader] = useState([])

        useEffect(() => {
            const makeHeader = () => {
                const makeHeader = () => {
                    const header = Object.keys(data[0]).map((item, index) => (
                        <th scope="col" data-field={index}>{item}</th>
                    ))
                    setHeader(header)
                }
                makeHeader()
                    

            }
            const makeRows = () => {
                const rows = data.map((items, index) => (
                    <tr key={index}>
                        {Object.values(items).map((item,idx) => (
                            <td key={idx}>{item}</td>
                        ))}
                    </tr>
                ))
                setRows(rows)
            }
            makeRows();
            makeHeader();
            //console.log('makerows test')
            //console.log(rows)
        }, [data, keyword])
        console.log(tableRows)
        
    return(
        <body>
        <table name="mytable" class ="table table-striped">
            {tableHeader}
            {tableRows}        

        </table>
        
        
        </body>
    )
}


{/*             <tr><td> 1 </td><td> Google Pixel 5 </td><td> Android </td><td> 393 </td><td> 6.4 </td><td> 1872 </td><td> 67 </td><td> 1122 </td><td> 40 </td><td> Male </td><td> 4 </td></tr>
 */}            {/* <TableRows data={data} keyword={keyword} /> */}

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