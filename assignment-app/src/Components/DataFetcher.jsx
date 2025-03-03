


import React from 'react'
import { useState, useEffect, useContext, memo } from 'react';
import SearchForm from './SearchForm';
import Dropdown from './Dropdown'; 
import Search from './Search';
import DataStats from './DataStats';
import { useSearchParams } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Tabulated from "./Tabulated"
import DataStatsTwo from "./Old/DataStatsTwo"
import SearchContextProvider, { SearchContext } from './Context'


const DataFetcher = function DataFetcher({ keyword, searched, filterTypeOptions }) {
        const {searchContext, setSearchContext, dataContext, setDataContext, filterTypeOptionsContext} = useContext(SearchContext)      
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        //console.log("from datafetcher.jsx search context" ,searchContext)
        
        
        
        useEffect(() => {
          const fetchData = async () => {
            setLoading(true)
            try{
                //console.log(keyword)
                //console.log(filterTypeOptions)
                const params = new URLSearchParams({
                    'filterType': filterTypeOptionsContext,
                    'keyword': searchContext
                });
                const url = `/api/data/search/?${params.toString()}`
                console.log("the url is ", url)

            const response = await fetch(url)
           // console.log(params.toString())
          //  console.log(params.get('filterType'))
          //  console.log(params.get('keyword'))
            
            const json = await response.json();
            
            setData(json);
            setDataContext(json);
            if(!response.ok){
              throw new Error("network response not ok")
            }
            } catch(error){
                setError(error.message)
            }
            setLoading(false)
            
          };
          if(searchContext != null) fetchData();  
        }, [searchContext]);
        

        if (loading) return <div>Loading Record...</div>;
        if (error) return <div>{error}</div>;
        if (!searched) return null;
        if (!data) return null;

       //console.log(data)

       
         
        return(
            <div> 
             <DataStats  keyword={keyword}/>
             </div>
        )
        
    }
  


export default DataFetcher
    

   