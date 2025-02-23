import React from 'react'
import Dropdown from './Dropdown'
import SearchForm from './SearchForm'
import DataFetcher from './DataFetcher'
import Results from './Results'
import { useState } from 'react'






export default function Search() {
    const [inputValue, setInputValue] = useState("")
    const [submittedValue, setSubmittedValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
    }
    const [dropValue, setDropValue] = useState("model")
    const handleChange = (e) => {
        setDropValue(e.target.value);
    };
    



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search by Keyword">

                </input>
                <br></br>
                <button type='submit'>Search</button>
            </form>
            <p> search keyword was {submittedValue}</p>
            search page

            <br></br>
            <p1>Select data point to filter search by</p1>
            <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                <option value="model">model</option>
                <option value="gender">gender</option>
                <option value="operatingSystem">operatingSystem</option>
                <option value="behaviorClass">behaviorClass</option>
            </select>
            <p2>dropbox value is {dropValue}</p2>
            {/* <Dropdown />
            <SearchForm /> */}
            <DataFetcher dropValue={dropValue} submittedValue={submittedValue} />




        </div>
    )
}