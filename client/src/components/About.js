import React, { useState, useEffect } from "react";


function About() {

    let image = "https://ibb.co/8Bf9vW9.png"
    return (
        <div>
            <h1 className="aboutTitle" style={{textAlign: "center", marginTop:"40px", marginBottom:"10px", fontFamily:"monospace", fontWeight:"bold", fontSize:"40px"}}>ABOUT BIG APPLE BALLOTS</h1>
            <h3 style={{ color: "black", textShadow: "none", fontSize: "40px", marginBottom:"0", fontFamily: "KGThankYouStamp", textShadow: "1px 1px white" }}>GETTING YOU RIPE FOR THE POLLS</h3>
            <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", fontFamily: "monospace", marginLeft: "20%", marginRight: "20%", marginBottom:"25px", marginTop:"10px" }}> WE'RE ON A MISSION TO MAKE VOTING EASIER AND MORE ACCESSIBLE</div>
            <div className="aboutImage" style={{height:"360px"}}>
            </div>
            <div style={{fontFamily:"monospace", marginTop:"20px", marginBottom:"20px", marginLeft:"20%", marginRight:"20%"}}>
                <p style={{fontSize:"18px", textAlign:"center", lineHeight:"1.4", fontWeight:"bold"}}>Big Apple Ballots is a nonpartisan effort to register, civically engage, and provide resources related to local, statewide, and national elections, in an effort to encourage participation in our democracy.</p>
            </div>
        </div>
)}

export default About;