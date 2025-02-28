import React from 'react'
import TableRows from "./TableRows"
import { useState, useEffect, useContext } from 'react';
import SearchContextProvider, { SearchContext } from './Context'







export default function Tabulated( { keyword  }  ) {
    //console.log(userId)
        const {searchContext, dataContext, setDataContext} = useContext(SearchContext)
        const [tableRows, setTableRows] = useState([])
        //const [tableHeader, setHeader] = useState([])
        console.log('tabulated.jsx start' , dataContext)
        useEffect(() => {
            console.log('tabulated useeffect hook start')
            const makeRows = () => {
                const rows = dataContext.map((items, index) => (
                    <tr key={index}>
                        {Object.values(items).map((item,idx) => (
                            <td key={idx}>{item}</td>
                        ))}
                    </tr>
                ))
                console.log('tabulated useeffect hook end', dataContext)
                setTableRows(rows)
            
        }
        console.log('tabulated render')
        if(dataContext != null) makeRows();
            
            //console.log('makerows test')
            //console.log(rows)
        }, [dataContext, keyword])
        //console.log(tableRows)
        
    return(
        <body>
        <table name="mytable" class ="table table-striped">
            <th scope="col" >User ID</th>
            <th scope="col" >Device Model</th>
            <th scope="col" >Operating System</th>
            <th scope="col" >App Usage Time (min/day)</th>
            <th scope="col" >Screen On Time (hours/day)</th>
            <th scope="col" >Battery Drain (mAh/day)</th>
            <th scope="col" >Number of Apps Installed</th>
            <th scope="col" >Data usage (MB/day)</th>
            <th scope="col" >Age</th>
            <th scope="col" >Gender</th>
            <th scope="col" >User Behavior Class</th>
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