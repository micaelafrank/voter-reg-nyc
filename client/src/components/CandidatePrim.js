import React, { useState, useEffect } from "react";


function CandidatePrim({ firstName, lastName, headshot }) {
    return (
        <div style={{ alignItems: "center", flexShrink: "0", marginLeft: "30px", marginRight: "30px", display: "flex", flexDirection: "column", justifyContent: "center", height: "310px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "22px", lineHeight: "1", fontWeight: "bold" }}>{firstName} {lastName}</p>
            <img src={headshot} style={{ flexShrink: "0", borderRadius: "75%", objectFit: "cover", height: "200px", width: "200px" }} />
        </div>
    )
}

export default CandidatePrim;