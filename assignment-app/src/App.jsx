import React, {useContext, useEffect} from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Home from "./Components/Home";
import Search from './Components/Search'
import SearchContextProvider , { SearchContext } from "./Components/Context";
import Layout from "./Components/LayoutRoutes";

function App() {
  
  return (
    <div>
      <SearchContextProvider>
      <Layout />
      </SearchContextProvider>
      
      
    </div>
  );
}

export default App;


/* import {Routes, Route, Link} from 'react'
<Link classname="navbar-brand ms-4 nav-link" path='/' >Home</Link>
<Link to='/' >Home </Link>
<Routes>
<Route path='/' element={<Home />} />
</Routes> */



/*
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        { <p> tag is a placeholder, You'll need to change the tag/component type later}
        <p className="navbar-brand ms-4 nav-link">User Behavior Data <Link to='/Search' > Search</Link> </p>
        
        
      </nav>
      <hr />
      
    </div>
  );
}*/