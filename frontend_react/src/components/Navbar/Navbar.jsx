import React from 'react';
import {Login, About} from '../../container';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



const Navbar = () => {
  return (
    <Router>
        <div>
            <Link to = "/Login">Login</Link>
            <Link to = "/About">About</Link>
        </div>

        <Routes>
            <Route exact path = "/Login" element = {<Login/>}/>
            <Route exact path = "/About" element = {<About/>}/>
        </Routes>

    </Router>

  )
}

export default Navbar