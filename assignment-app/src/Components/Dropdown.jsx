
import React from 'react'
import { useState } from 'react'



export default function Dropdown() {
    const [dropValue, setDropValue] = useState("model")
    const handleChange = (e) => {
        setDropValue(e.target.value);
    };
    return(
        <div>
            <br></br>
            <p1>Select data point to filter search by</p1>
        <select className="form-select" aria-label="Default select example" onChange={handleChange}>
        <option value="model">model</option>
        <option value="gender">gender</option>
        <option value="operatingSystem">operatingSystem</option>
        <option value="behaviorClass">behaviorClass</option>
      </select>
      <p2>dropbox value is {dropValue}</p2>
      </div>
      )

}
