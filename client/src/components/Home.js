import React from "react"
import { Link } from "react-router-dom";

function Home({ user }) {
    return (
        <React.Fragment>
            <section className="homePageContainer">
                {user.username ? 
                <div className="userHomeNav" style={{ height: "40px", display: "flex", justifyContent: "right", alignItems:"center"}}>
                    <p style={{ justifyContent: "right", color: "black", alignItems: "center", fontSize: "15px", textAlign: "right", marginRight: "30px", borderBottom:"2px solid black", fontFamily: "monospace" }}>LOGGED IN AS: <span style={{fontWeight:"bold"}}>{user.username}</span></p>
                </div> : null}
                <h2 className="title" style={{textShadow:"1px 1px white"}}>BIG APPLE BALLOTS</h2>
                <h3 style={{ color: "black", textShadow: "none", fontSize: "40px", fontFamily: "KGThankYouStamp", textShadow:"1px 1px white" }}>GETTING YOU RIPE FOR THE POLLS</h3>
                <h3 style={{ color: "black", textShadow: "none", paddingTop: "28px", marginBottom:"40px", fontSize: "28px", letterSpacing:"1.5px", fontFamily: "monospace" }}>VOTER INFORMATION & ELECTION RESOURCES<br></br>FOR THE CITY THAT NEVER SLEEPS ON VOTING</h3>
                <div id="homeImagesAndButtons">
                    <div style={{ display: "inline-block" }}>
                        <div id="stickerimage">
                        </div>
                    </div>
                    <div className="buttonContainerHome">
                        <Link className="homeNavItem" to="/voters">
                            <button id="button1home" className="homeButton">CHECK VOTER STATUS</button>
                        </Link>
                        <Link className="homeNavItem" to="/register">
                            <button id="button2home" className="homeButton">REGISTER TO VOTE</button>
                        </Link>
                        <Link className="homeNavItem" to="/candidates">
                            <button id="button2home" className="homeButton">ON THE BALLOT</button>
                        </Link>
                        {user.username ? 
                        <Link className="homeNavItem" to="/logout">
                            <button id="button3home" className="homeButton">LOG OUT</button>
                        </Link>
                        : 
                        <Link className="homeNavItem" to="/login">
                            <button id="button2home" className="homeButton">LOG IN / SIGN UP</button>
                        </Link>}
                     </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Home;