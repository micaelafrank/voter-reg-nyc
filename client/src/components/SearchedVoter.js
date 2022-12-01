import React, { useState, useEffect } from "react";
import ModalSignIn from "./ModalSignIn";
import Button from 'react-bootstrap/Button';


function SearchedVoter({ isActive, id, handleSearchSubmit, address1, address2, age, search, firstName, isSearching, lastName, party, postalCode, password, deleteVoter }) {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(firstName)
    // const initial = firstName.substr(0,1);

    // const shortName = `${initial}. ${lastName}`;
    // const fullName = `${firstName} ${lastName}`;

    function handleValidation() {
        setValidated((validated) => !validated);
    }


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
   
    let count = 1;

   

    function resetCount() {
        count = 0;
    }


    return (
        <>
            <div className="search-item">
                <div className="searchContainerBlack">
                    <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{firstName} {lastName}</p>
                    <p style={{ lineHeight: "0" }}>{age} years old</p>
                    <p style={{ textAlign: "center", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p>
                    <p style={{ alignItems: "left" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                    <p style={{ fontSize: "13px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    <p text="password">RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p>
                    <p><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p>
                    {/* <Button variant="primary" onClick={handleShow}>
                        Edit Voter Information
                    </Button> */}
                    {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
                </div>
            </div>
        </>
    );
}
//         <>
//             <div className="search-item">
//                 <div className={isActive ? `searchContainerBlack` : `voterContainerBlack` }>
//                     <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{fullName}</p>
//                     <p style={{ lineHeight: "0" }}>{age} years old</p> 
//                     <p style={{ textAlign: "center", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p> 
//                     <p style={{ alignItems: "left" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
//                     <p style={{ fontSize: "13px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
//                     <p text="password">RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p>
//                     <p><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p>
//                     <Button variant="primary" onClick={handleShow}>
//                         Edit Voter Information
//                     </Button>
//                     {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
//                 </div>
//             </div>
//         </>
//     );
// }
export default SearchedVoter;
