


import React from 'react'
import { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import Dropdown from './Dropdown'; 
import Search from './Search';

export default function DataFetcher({submittedValue, dropValue }) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
    
        useEffect(() => {
          const fetchData = async () => {
            setLoading(true)
            try{
            const response = await fetch(`/api/data/search`)
            const json = await response.json();
            setData(json);
            if(!response.ok){
              throw new Error("network response not ok")
            }
            } catch(error){
                setError(error.message)
            }
            setLoading(false)
          };
          fetchData();  
        }, []);
        

        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        if (!data) return null;

        console.log(data[0])
         
        return(
            <div>
            datafetcher 
            <h2>submitted value {submittedValue}</h2> 
            <h3>dropvalue is {dropValue}</h3>

            </div>
        )
        
    }



    
/*
1: 
Age
: 
"47"
App Usage Time (min/day)
: 
"268"
Battery Drain (mAh/day)
: 
"1331"
Data Usage (MB/day)
: 
"944"
Device Model
: 
"OnePlus 9"
Gender
: 
"Female"
Number of Apps Installed
: 
"42"
Operating System
: 
"Android"
Screen On Time (hours/day)
: 
"4.7"
User Behavior Class
: 
"3"
User ID
: 
"2"*/
   