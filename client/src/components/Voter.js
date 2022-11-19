import React, { useState, useEffect } from "react";
import ModalSignIn from "./ModalSignIn";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import EditVoterCard from "./EditVoterCard";
// import Popup from 'reactjs-popup';

function Voter({ isActive, handleSearchSubmit, address1, address2, isFiltering, age, search, firstName, isSearching, lastName, party, postalCode, password, deleteVoter }) {
    const [validated, setValidated] = useState(false);
    //  const [formName, setName] = useState("")
    //  const [formPassword, setPassword] = useState("")
    const [show, setShow] = useState(false);
    //  const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initial = firstName.charAt(0);

    // const initial = firstName.slice(0, 0);
    const shortName = `${initial}. ${lastName}`;
    const fullName = `${firstName} ${lastName}`;

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
            <div className={isFiltering ? `searchItem` : `gridItem`}>
                <div className={isActive ? (isFiltering ? `searchContainerBlack` : `voterContainerBlack`) : (isFiltering ? `searchContainerRed` : `voterContainerRed`)}>
                    {/* <p style={{ fontSize:"18px", fontWeight:"bold" }}>{firstName}</p> */}
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>{isFiltering ? fullName : shortName}</p>
                    {isFiltering ? <p style={{ lineHeight: "0" }}>{age} years old</p> : null}
                    {isFiltering ? <p style={{ textAlign: "center", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p> : null}
                    <p style={{ alignItems: "left" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                    {/* <div className={isFiltering ? `searchMargins` : null}> */}
                    <p style={{ fontSize: "13px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    {isFiltering ? <p>RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p> : null}
                    {/* <p>{postalCode}</p> */}
                    {/* {isFiltering ?  */}
                    {isFiltering ? <p><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p> : null}
                    <Button variant="primary" onClick={handleShow}>
                        Edit Voter Information
                    </Button>
                    {/* : null} */}
                    {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
                    {/* {validated ? <EditVoterCard firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age} /> : null} */}

                    {/* {isFiltering ? <button variant="primary" onClick={handleShow} id="moreInfoButton">Edit Voter Details</button> : null} */}
                    {/* <Popup trigger={<button> Delete Voter Record</button>} position="right center">
                    <form className="popuptext" onSubmit={handleSubmit}>
                        <p>To deactivate your registration, please confirm your full name and login password.</p>
                        <label >Enter first and last name:</label>
                        <input className="deleteInput form-control" placeholder="Name" name="name" type="text" onChange={(e)=> setName(e.target.value)} required></input>
                        <label>Enter password:</label>
                        <input className="deleteInput form-control" placeholder="Password" name="password" type="password" onChange={(e)=> setPassword(e.target.value)} required></input>
                        <button id="submit" type="submit">Delete</button>
                    </form>
                </Popup> */}
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
export default Voter;
