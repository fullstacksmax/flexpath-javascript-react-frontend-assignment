import React, { useContext } from 'react'
import Dropdown from './Dropdown'
import SearchForm from './SearchForm'
import DataFetcher from './DataFetcher'
import { useState } from 'react'
import SearchContextProvider, { SearchContext } from './Context'
import Tabulated from "./Tabulated"
import Median from './Median'
import DataStats from './DataStats'





export default function Search() {
    const {setSearchContext} = useContext(SearchContext)
    const [inputValue, setInputValue] = useState("")
    const [keyword, setKeyword] = useState("")
    const [searched, setSearch] = useState(false)
    
    //console.log("from search.jsx search context" ,searchContext)
    //console.log("from search.jsx data context", dataContext)
    //console.log("from search.jsx search context" ,searchContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(inputValue);
        setSearchContext(inputValue);
        setInputValue("");
        setSearch(true);
        
        
    }
    const [filterTypeOptions, setfilterTypeOptions] = useState("model")
    const handleChange = (e) => {
        setfilterTypeOptions(e.target.value);
    };
    
    return (
        <div className='container'>
            <p className="mx-5 fs-5 text" style={{width: "350px"}} >Select data point to filter search by</p>

            {/* change to dropdown??? */}
            <select className="mx-5 dropdown "   style={{width: "150px"}} aria-label="Default select example" onChange={handleChange}>
                <option className="bg-secondary text-white " value="model"  >model</option>
                <option className="bg-secondary text-white" value="gender">gender</option>
                <option className="bg-secondary text-white" value="operatingSystem">operatingSystem</option>
                <option className="bg-secondary text-white " value="behaviorClass">behaviorClass</option>
            </select>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    className="mx-5 rounded border-1 m-2"
                    style={{width: "350px"}}
                
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search by Keyword">
                </input>
                <br></br>
                <button className="mx-5 bg-white rounded border-1 " type='submit' style={{width: "350px"}}>Search</button>
            </form>
            <br></br>
            <DataFetcher filterTypeOptions={filterTypeOptions} keyword={keyword} searched={searched} />
            <Tabulated keyword={keyword} />
        </div>
    )
}




