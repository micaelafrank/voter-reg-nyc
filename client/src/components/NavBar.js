import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navBarContainer">
            <h2 className="navHeading" style={{
                paddingLeft: "20px", fontSize: "2.9rem", float: "left", alignItems: "center",
                textAlign: "center", fontFamily: "monospace", color: "black"
            }}><a id="navTitleGoHome" href="/">BIG APPLE BALLOTS</a></h2>
            <nav className="navBarList">
                <NavLink id="nav2" to="voters">View Registered Voters</NavLink>
                <NavLink id="nav3" to="register">Register Now</NavLink>
                <NavLink id="nav4" to="candidates">On The Ballot</NavLink>
            </nav>
        </div>
    )
}

export default NavBar; 