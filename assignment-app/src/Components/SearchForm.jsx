
import React from 'react'
import DataFetcher from './DataFetcher'
import { useState } from 'react'





export default function SearchForm() {
    const [inputValue, setInputValue] = useState("")
    const [submittedValue, setSubmittedValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
    }

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
        </div>
        


    )
}