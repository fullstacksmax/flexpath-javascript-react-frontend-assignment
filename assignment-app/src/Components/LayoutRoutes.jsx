import React  from "react";
import {Link, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Search from './Search'




export default function Layout(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a className="navbar-brand ms-4 nav-link">User Behavior Data </a>
        <Link className="navbar-brand ms-4 nav-link" to='/'>Home</Link>
        <Link className="navbar-brand ms-4 nav-link" to='search'>Search</Link>      
        
        
      </nav>
      <hr />
      
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='search' element={<Search />} />
      </Routes>
      </div>
    )
      }
    