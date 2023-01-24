import React, { useState, useEffect } from "react";


function CandidatePrim({ firstName, lastName, isDem, party_id, headshot, isWinner }) {

    return (
        <div style={{ position:"relative", alignItems: "center", flexShrink: "0", marginLeft: "30px", marginRight: "30px", display: "flex", flexDirection: "column", justifyContent: "center", height: "340px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "22px", lineHeight: "1", fontWeight: "bold" }}>{firstName} {lastName}</p>
            {/* <div className="imageHolder"> */}
            <div class="overtint">
                <img style={isWinner && (party_id===1) ? { borderColor: "rgb(2, 90, 124)" } : { borderColor: "red"} }
                className={isWinner ? "candidatePortrait" : "candidatePortraitGray"} src={headshot} />
            </div>
        </div>
    )
}

export default CandidatePrim;