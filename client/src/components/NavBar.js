import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

function NavBar({ user, setUser }) {
    const capName = `${user.username}`.toUpperCase();
    const navigate = useNavigate();

    function handleLogout(){
        fetch("/logout", { 
            method: "DELETE" 
        })
        .then((r) => {
            if (r.ok) {
                setUser({});
                navigate('/')
            }
        });
    }

    return (
        <div className="navBarContainer" style={{flexDirection:"column"}}>
            <h2 className="navHeading" 
                style={{
                paddingLeft: "20px", fontSize: "2.9rem", float: "left", alignItems: "center",
                textAlign: "center", fontFamily: "monospace", color: "black"
                }}>
                <a id="navTitleGoHome" href="/">BIG APPLE BALLOTS</a>
            </h2>
            <nav className="navBarList">
                <NavLink id="nav1" to="voters">ABOUT</NavLink>
                <NavLink id="nav2" to="voters">VOTER LIST</NavLink>
                <NavLink id="nav3" to="register">REGISTER</NavLink>
                <NavLink id="nav4" to="candidates">ON THE BALLOT</NavLink>
                {user.username ? <NavLink to={`myvote/${user.firstname}${user.lastname}`} id="nav7">MY VOTING INFO</NavLink> : null}
                {/* <NavLink id="nav2" to="voters">SIGN UP</NavLink>
                <NavLink id="nav2" to="voters">LOG IN</NavLink> */}
                {user.username ? <NavLink onClick={handleLogout} id="nav5">LOG OUT</NavLink> : 
                <NavLink id="nav6" to="login">LOG IN / SIGN UP </NavLink>}
            </nav>
        </div>
    )
}

export default NavBar; 