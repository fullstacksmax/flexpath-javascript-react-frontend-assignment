


import React from 'react'
import { useState, useEffect } from 'react';

export default function DataFetcher() {
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
        return (
            <h2>plz god</h2>
            
        )
    }
