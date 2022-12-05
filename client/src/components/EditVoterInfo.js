
import React, { useState, useEffect } from "react";

function EditVoterInfo({ handleValidation, voters, setVoters, firstName, lastName, address1, address2, id, age, fullName, party,
    isActive, password, postalCode, generate }) {
    
    // const [partyState, setPartyState] = useState(party);
    // const [editPartyState, setEditPartyState] = useState(false);
    // const [initialPartyValue, setInitialPartyValue] = useState(party);

    // const [address1State, setAddress1State] = useState(address1);
    // const [editAddress1State, setEditAddress1State] = useState(false);
    // const [initialAddress1Value, setInitialAddress1Value] = useState(address1);


    function generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

        if (n > max) {
            return generate(max) + generate(n - max);
        }

        max = Math.pow(10, n + add);
        var min = max / 10; // Math.pow(10, n) basically
        var number = Math.floor(Math.random() * (max - min + 1)) + min;

        return ("" + number).substring(add);
    }

    return (
        <>
            <div className="search-item">
                <div className={isActive ? `searchContainerBlack` : `voterContainerBlack`}>
                    <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{fullName}</p>
                    <p style={{ lineHeight: "0" }}>{age} years old</p>
                    <p style={{ textAlign: "center", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p>
                    <p style={{ alignItems: "left" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                    <p style={{ fontSize: "13px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    <p text="password">RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p>
                    <p><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p>
                </div>
            </div>
        </>
    )
}

export default EditVoterInfo;