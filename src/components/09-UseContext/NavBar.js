import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <h2 className="navbar-brand" >UseContext</h2>
            
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                    <NavLink className="nav-item nav-link mx-2" to='./'>
                        Home
                    </NavLink>
                <NavLink className="nav-item mx-2 nav-link" to='./about'>
                    About
                    </NavLink>
                
                <NavLink className="nav-item mx-2 nav-link" to='./login'>
                    Login
                    </NavLink>
                
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar