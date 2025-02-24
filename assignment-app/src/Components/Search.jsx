import React from 'react'
import Dropdown from './Dropdown'
import SearchForm from './SearchForm'
import DataFetcher from './DataFetcher'
import Results from './Results'
import { useState } from 'react'






export default function Search() {
    const [inputValue, setInputValue] = useState("")
    const [keyword, setKeyword] = useState("")
    const [searched, setSearch] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(inputValue);
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
            <DataFetcher filterTypeOptions={filterTypeOptions} keyword={keyword} searched={searched} />




        </div>
    )
}