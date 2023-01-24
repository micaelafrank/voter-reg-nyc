import React, { useState, useEffect } from "react";


function Candidate({ firstName, lastName, headshot, position, party }) {
    return(
        <div style={{ alignItems: "center", flexShrink: "0", marginLeft:"30px", marginRight:"30px", display:"flex", flexDirection:"column", justifyContent:"center", height:"400px"}}>
            <p style={{fontFamily:"monospace", fontSize:"22px", lineHeight:"1", marginTop:"0", marginBottom:"0", fontWeight:"bold"}}>{firstName} {lastName}</p>
            <p style={{fontFamily:"monospace", fontSize:"15px"}}>{party}</p>
            <img src={headshot} style={{flexShrink: "0", borderRadius:"75%", objectFit:"cover", height: "200px", width: "200px"}} />
            <p style={{ fontFamily: "monospace", fontSize: "15px" }}>RUNNING FOR: {position}</p>
        </div>
    )
}

export default Candidate;