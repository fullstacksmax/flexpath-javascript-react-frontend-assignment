import React, { useContext } from 'react'
import Dropdown from './Dropdown'
import SearchForm from './SearchForm'
import DataFetcher from './DataFetcher'
import Results from './Results'
import { useState } from 'react'
import SearchContextProvider, { SearchContext } from './Context'
import Tabulated from "./Tabulated"





export default function Search() {
    const {searchContext, setSearchContext, dataContext, setDataContext} = useContext(SearchContext)
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="google">

                </input>
                <br></br>
                <button type='submit'>Search</button>
            </form>
            <p> search keyword was {keyword}</p>
            search page

            <br></br>
            <p1>Select data point to filter search by</p1>
            <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                <option value="model">model</option>
                <option value="gender">gender</option>
                <option value="operatingSystem">operatingSystem</option>
                <option value="behaviorClass">behaviorClass</option>
            </select>
            {/* <p2>dropbox value is {filterTypeOptions}</p2> */}
            {/* <Dropdown />
            <SearchForm /> */}
            
            <DataFetcher filterTypeOptions={filterTypeOptions} keyword={keyword} searched={searched}  />
            <Tabulated keyword={keyword}/>
            




        </div>
    )
}