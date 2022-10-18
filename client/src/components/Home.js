import React from "react"
import { Link } from "react-router-dom";

function Home() {
    return (
        <React.Fragment>
            <section className="homePageContainer">
                <h2 className="title">BIG APPLE BALLOTS</h2>
                <h3 style={{ color: "black", textShadow: "none", fontSize: "40px", fontFamily: "KGThankYouStamp" }}>RIPE FOR THE POLLS</h3>
                <h3 style={{ color: "black", textShadow: "none", paddingTop: "30px", fontSize: "26px", fontFamily: "monospace" }}>VOTER INFORMATION & RESOURCES ON UPCOMING ELECTIONS,<br></br>FOR THE CITY THAT NEVER SLEEPS ON VOTING.</h3>
                <div id="homeImagesAndButtons">
                    <div style={{ display: "inline-block" }}>
                        <div id="stickerimage">
                        </div>
                    </div>
                    <div className="buttonContainerHome">
                        <Link className="homeNavItem" to="/register">
                            <button id="button1home" className="homeButton">REGISTER</button>
                        </Link>
                        <Link className="homeNavItem" to="/voters">
                            <button id="button2home" className="homeButton">CHECK REGISTRATION</button>
                        </Link>
                        <Link className="homeNavItem" to="/candidates">
                            <button id="button3home" className="homeButton">ON THE BALLOT</button>
                        </Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Home;