import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ user }) {
    return (
        <div className="navBarContainer">
            <h2 className="navHeading" style={{
                paddingLeft: "20px", fontSize: "2.9rem", float: "left", alignItems: "center",
                textAlign: "center", fontFamily: "monospace", color: "black"
            }}><a id="navTitleGoHome" href="/">BIG APPLE BALLOTS</a></h2>
            <nav className="navBarList">
                <NavLink id="nav4" to="voters">ABOUT</NavLink>
                <NavLink id="nav2" to="voters">VOTER LIST</NavLink>
                <NavLink id="nav3" to="register">REGISTER TO VOTE</NavLink>
                <NavLink id="nav2" to="candidates">ON THE BALLOT</NavLink>
                {/* <NavLink id="nav2" to="voters">SIGN UP</NavLink>
                <NavLink id="nav2" to="voters">LOG IN</NavLink> */}
                {user.username ? <NavLink id="nav2" to="voters">LOG OUT</NavLink> : 
                <NavLink id="nav2" to="candidates">LOG IN / SIGN UP </NavLink>}
            </nav>
        </div>
    )
}

export default NavBar; 