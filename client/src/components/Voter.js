import React, { useState, useEffect } from "react";
import ModalSignIn from "./ModalSignIn";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import EditVoterInfo from "./EditVoterInfo";
// import Popup from 'reactjs-popup';

function Voter({ isActive, id, handleSearchSubmit, address1, address2, isFiltering, age, search, firstName, isSearching, lastName, party, postalCode, password, deleteVoter }) {
    const [validated, setValidated] = useState(false);
    //  const [formName, setName] = useState("")
    //  const [formPassword, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [editCard, setEditCard] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initial = firstName.charAt(0);

    // const initial = firstName.slice(0, 0);
    const shortName = `${initial}. ${lastName}`;
    const fullName = `${firstName} ${lastName}`;

    function handleValidation() {
        setValidated((validated) => !validated);
        setEditCard(true);
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
            <div className={isFiltering ? `searchItem` : `gridItem`}>
                <div className={isActive ? (isFiltering ? `searchContainerBlack` : `voterContainerBlack`) : (isFiltering ? `searchContainerRed` : `voterContainerRed`)}>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{isFiltering ? fullName : shortName}</p>
                    {isFiltering ? <p style={{ lineHeight: "2" }}>{age} years old</p> : null}
                    {isFiltering ? <p style={{ lineHeight:"2", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p> : null}
                    <p style={{ alignItems: "left", lineHeight:"2" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                    {/* <div className={isFiltering ? `searchMargins` : null}> */}
                    <p style={{ lineHeight:"2", fontSize: "14px", color: isActive ? "black" : "rgb(121, 15, 15)" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    {isFiltering ? <p style={{ lineHeight: "2" }}>RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p> : null}
                    {/* <p>{postalCode}</p> */}
                    {/* {isFiltering ?  */}
                    {isFiltering ? <p style={{ lineHeight: "2" }}><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p> : null}
                    <Button style={{lineHeight:"2"}} variant="primary" onClick={handleShow}>
                        Edit Voter Information
                    </Button>
                    {/* : null} */}
                    {show ? <ModalSignIn id={id} validated={validated} handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
                    {/* {validated ? <EditVoterInfo firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age} /> : null} */}
                    {/* {isFiltering ? <button variant="primary" onClick={handleShow} id="moreInfoButton">Edit Voter Details</button> : null} */}
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
export default Voter;
