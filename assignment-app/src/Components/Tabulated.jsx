import React from 'react'
import TableRows from "./TableRows"
import { useState, useEffect, useContext } from 'react';
import SearchContextProvider, { SearchContext } from './Context'
import Cards from './Cards';







export default function Tabulated({ keyword, filterTypeOptions }){
        //console.log(userId)
        const {searchContext, dataContext, setDataContext, filterTypeOptionsContext} = useContext(SearchContext)
        const [tableRows, setTableRows] = useState([])
        const [count, setCount] = useState("")
        //const [tableHeader, setHeader] = useState([])
        //console.log('tabulated.jsx start' , dataContext)
        useEffect(() => {
            //console.log('tabulated useeffect hook start')
            const makeRows = () => {
                const rows = dataContext.map((items, index) => (
                    <tr key={index}>
                        {Object.values(items).map((item,idx) => (
                            <td key={idx}>{item}</td>
                        ))}
                    </tr>
                ))
                //console.log('tabulated useeffect hook end', dataContext)
                setTableRows(rows)
                if(dataContext.length === 0) {
                    setCount("No Results")
                }
                else{
                    setCount(`Displaying ${dataContext.length} Results`)
                }
        }
        //console.log('tabulated render')
        if(dataContext != null) makeRows();
            
            //console.log('makerows test')
            //console.log(rows)
        }, [dataContext, keyword, filterTypeOptions])
        //console.log(tableRows)
        
    return(
        <div>
            <Cards />
        
        <div className="container">
        <div className='m-1' >
            <div>{count}</div>
        <table className="table table-striped mx-auto " >
            <thead>
                <tr>
            <th  scope="col" className='w-auto align-bottom' >User ID</th>
            <th  scope="col" className='w-auto align-bottom'>Device Model</th>
            <th  scope="col" className='w-auto align-bottom'>Operating System</th>
            <th  scope="col" className='w-auto align-bottom'>App Usage Time (min/day)</th>
            <th  scope="col" className='w-auto align-bottom'>Screen On Time (hours/day)</th>
            <th  scope="col" className='w-auto align-bottom'>Battery Drain (mAh/day)</th>
            <th  scope="col" className='w-auto align-bottom'>Number of Apps Installed</th>
            <th  scope="col" className='w-auto align-bottom'>Data usage (MB/day)</th>
            <th  scope="col" className='w-auto align-bottom'>Age</th>
            <th  scope="col" className='w-auto align-bottom'>Gender</th>
            <th  scope="col" className='w-auto align-bottom'>User Behavior Class</th>
            </tr>
            </thead>
            <tbody className='text-left' >{tableRows}</tbody>      
        </table>
        </div>
        </div>
        </div>
        
    )
}



 