import React, { useState, useEffect } from "react";
import ModalSignIn from "./ModalSignIn";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import EditVoterInfo from "./EditVoterInfo";
import SearchedVoter from "./SearchedVoter";
// import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';


function Voter({ canEdit, setCanEdit, isActive, handleModal, change, vsn, setChange, setVoters, voter, validated, handleValidation, id, handleSearchSubmit, address1, address2, isFiltering, age, search, firstName, isSearching, lastName, party, postalCode, password, deleteVoter }) {
    //  const [formName, setName] = useState("")
    //  const [formPassword, setPassword] = useState("")
    const [editCard, setEditCard] = useState(false);
    const navigate = useNavigate();
    // const [fnState, setFnState] = useState(firstName);
    // const [editFnState, setEditFnState] = useState(false);
    // const [initialFnValue, setInitialFnValue] = useState(firstName);
    const [show, setShow] = useState(false);

    const initial = firstName.charAt(0);

    // const voter_id = `${voter.id}`;
    // console.log("voter id is: ", voter_id);
    // const initial = firstName.slice(0, 0);
    const shortName = `${initial}. ${lastName}`;
    const fullName = `${firstName} ${lastName}`;
    // const voterID = `${voter.id}`;

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // function generate(n) {
    //     var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

    //     if (n > max) {
    //         return generate(max) + generate(n - max);
    //     }

    //     max = Math.pow(10, n + add);
    //     var min = max / 10; // Math.pow(10, n) basically
    //     var number = Math.floor(Math.random() * (max - min + 1)) + min;

    //     return ("" + number).substring(add);
    // }

    const capName = party.party_name.toUpperCase();
    let count = 1;

    function resetCount() {
        count = 0;
    }

    return (
        <>
            <div className={isFiltering ? `searchItem` : `gridItem`}>
                <div className={isActive ? (isFiltering ? `searchContainerBlack` : `voterContainerBlack`) : (isFiltering ? `searchContainerRed` : `voterContainerRed`)}>
                    <p style={{ textAlign:"center", fontSize: "20px", fontWeight: "bold" }}>{isFiltering ? fullName : shortName}</p>
                    {/* {isFiltering ? <p style={{ lineHeight: "2" }}>{age} years old</p> : null} */}
                    {/* {isFiltering ? <p style={{ lineHeight: "2", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p> : null} */}
                    {isFiltering ?
                    <div style={{display:"flex", flexDirection:"row", alignItems:"start", justifyContent:"space-around"}}>
                        <div style={{flexDirection:"column"}}>
                            <p style={{ alignItems: "left", lineHeight: "2", fontSize: "16px", }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? capName : 'Neutral'}</p>
                            {/* <div className={isFiltering ? `searchMargins` : null}> */}
                            <p style={{ lineHeight: "2", fontSize: "16px" }}><span style={{ fontWeight: "bold" }}>RESIDENTIAL ADDRESS:</span> {address1}, {address2}</p>
                            <p style={{ lineHeight: "2", fontSize: "16px", }}><span style={{ fontWeight: "bold" }}>REGISTERED IN:</span> {postalCode}</p>
                        </div>
                        <div style={{ flexDirection: "column", marginLeft: "10px" }}>
                            <p style={{ lineHeight: "2", fontSize: "16px" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>11349{vsn}</p>
                            <p style={{ lineHeight: "2", fontSize: "16px", color: isActive ? "black" : "rgb(121, 15, 15)" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "Active" : "Inactive"}</p>
                        </div>
                    </div>
                        : 
                    <div style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                        <p style={{ fontSize: "15px", color: isActive ? "black" : "rgb(121, 15, 15)" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "Active" : "Inactive"}</p>
                    </div>
                    }
                    {/* </div> */}
                    {/* {isFiltering ?  */}
                    {/* {isFiltering ? <p style={{ lineHeight: "2", fontSize: "15px" }}><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p> : null} */}
                    {/* <div className={isFiltering ? "flexVoterButtonsRow" : "flexVoterButtonsCol" }>
                        {/* <Button style={{ lineHeight: "2", padding:"3px 10px" }} variant="primary" onClick={() => navigate()}>
                            View Voter Details
                        </Button> */}
                    {/* {isFiltering ? 
                        <Button className="viewVotingInfoBtn" variant="primary" onClick={handleShowVoterInfo}> */}
                    {/* onClick={handleShow} */}
                        {/* VIEW VOTER INFORMATION */}
                    {/* </Button> : null} */}
                    {/* {show ? <ModalSignIn id={id} voter={voter} validated={validated} handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
                    {validated ? navigate(`/voters/${firstName}${lastName}`) : null} */}
                    {/* : null} */}
                    {/* {show ? 
                        <ModalSignIn id={id} voter={voter} validated={validated} handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> 
                        : null} */}
                    {/* {validated ? <SearchedVoter handleValidation={handleValidation} setVoters={setVoters}
                        voter={voter} firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age}
                    /> : null} */}
                    {/* {validated ? navigate(`/voters/edit/${voter_id}`) : null} */}
                    {/* {validated ? 
                    navigate("/voters/edit") */}
                    {/* // <SearchedVoter firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age} /> */}
                     {/* : null} */}
                    {/* {isFiltering ? <button variant="primary" onClick={handleShow} id="moreInfoButton">Edit Voter Details</button> : null} */}
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
export default Voter;