import React, { useState, useEffect } from "react";


function Candidate({ firstName, lastName, isWinner, headshot, position, isDem, party }) {
    return(
        <div style={{ alignItems: "center", marginRight:"30px", marginLeft:"30px", marginBottom:"0", display:"flex", flexDirection:"column", justifyContent:"space-around", height:"340px"}}>
            <p style={{fontFamily:"monospace", fontSize:"23px", lineHeight:"1", marginTop:"0", marginBottom:"0", paddingBottom:"0", fontWeight:"bold"}}>{firstName} {lastName}</p>
            <p style={{fontFamily:"monospace", fontSize:"16px", marginTop:"0", paddingTop:"0", lineHeight:"1"}}>{party}</p>
            <img style={isDem ? { borderColor: "red" } : { borderColor: "rgb(2, 90, 124)" } }
            className={isWinner ? "candidatePortrait" : "candidatePortraitGray"} 
            src={headshot} />
            {/* <p style={{ fontFamily: "monospace", fontSize: "15px" }}>RUNNING FOR: {position}</p> */}
        </div>
    )
}

export default Candidate;