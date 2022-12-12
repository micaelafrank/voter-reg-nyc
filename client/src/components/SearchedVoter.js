import React, { useState, useEffect } from "react";
import ModalSignIn from "./ModalSignIn";
import Button from 'react-bootstrap/Button';


function SearchedVoter({ isActive, id, handleSearchSubmit, voter, address1, address2, age, search, firstName, isSearching, lastName, party, postalCode, password, deleteVoter }) {
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const [editVoterAdd, setEditVoterAdd] = useState(false);

    const [address1State, setAddress1State] = useState(address1);
    const [editAddress1State, setEditAddress1State] = useState(false);
    const [initialAddress1Value, setInitialAddress1Value] = useState(address1);

    const [address2State, setAddress2State] = useState(address2);
    const [editAddress2State, setEditAddress2State] = useState(false);
    const [initialAddress2Value, setInitialAddress2Value] = useState(address2);

    const [postalCodeState, setPostalCodeState] = useState(postalCode);
    const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(postalCode);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(firstName)
    // const initial = firstName.substr(0,1);

    // const shortName = `${initial}. ${lastName}`;
    // const fullName = `${firstName} ${lastName}`;

    function handleValidation() {
        setValidated((validated) => !validated);
    }

    function allowEditing(){
        setEditVoterAdd(editVoterAdd => !editVoterAdd)
    } 


    let handleEditAddress = () => {
        setEditAddress1State(true)
        setEditAddress2State(true)
        setEditPostalCodeState(true)
        if (address1State !== "" && address1State !== "" && postalCodeState !== "") {
            fetch(`/api/voters/edit/${voter.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address1State,
                    address2: address2State, 
                    postalCode: postalCodeState, 
                    id: voter.id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setInitialAddress1Value(data.address1)
                    setInitialAddress2Value(data.address2)
                    setInitialPostalCodeValue(data.postalCode)
                });
            // setChange(!change);
        }
    };

    // function handleEditAddress() {
    //     setEditVoterAdd(true)
    //     setEditAddress1State(true)
    //     setEditAddress2State(true)
    //     setEditPostalCodeState(true)
    // }

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
            <div className="search-item" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom:"2rem", alignItems:"center", justifyContent:"center"}}>
                <div className="searchItemInnerDiv" style={{ fontFamily: "monospace", marginTop: "1rem", marginBottom:"2rem", alignItems: "left", textAlign:"left", justifyContent: "center" }}>
                    <p id="editFullName" style={{ fontWeight: "bold", }}>{firstName} {lastName}</p>
                    <p style={{ lineHeight: "2", fontSize:"15px" }}>{age} years old</p>
                    <p style={{ lineHeight: "2", alignItems: "center", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p>
                    <div style={{display:"flex", alignItems:"center", flexDirection: "row"}}>
                        <p style={{ lineHeight: "1", alignItems: "left", fontSize: "15px", marginRight:"20px" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                        <Button style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }}>SWITCH PARTY</Button>
                    </div>
                    <p style={{ lineHeight: "2", fontSize: "15px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    
                    {editVoterAdd ? (
                    <div style={{padding: "30px", paddingTop: "15px", width: "80%", backgroundColor: "rgb(235, 242, 253)", border: "1px solid black" }}>
                        <p style={{ fontSize: "20px", borderBottom:".7px solid black", justifyContent: "center", alignItems:"center", marginBottom: "30px"}}>UPDATE ADDRESS INFORMATION</p>
                        <div style={{paddingBottom:"10px"}}>
                            <label style={{marginRight:"10px", fontSize:"16px", paddingTop:"20px"}}>Street Address:</label>
                            <input
                                defaultValue={initialAddress1Value}
                                // className="editItemInput"
                                id="my-input"
                                style={{ padding: "8px" }}
                                aria-describedby='my-helper-text'
                                onChange={(e) => setInitialAddress1Value(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <div style={{ paddingBottom: "10px" }}>
                            <label style={{ marginRight: "10px", fontSize:"16px", paddingTop:"20px" }}>Suite/Apt/Floor Number:</label>
                            <input
                                defaultValue={initialAddress2Value}
                                // className="editItemInput"
                                id="my-input"
                                aria-describedby='my-helper-text'
                                style={{padding:"8px"}}
                                onChange={(e) => setInitialAddress2Value(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <div style={{ paddingBottom: "10px" }}>
                            <label style={{ marginRight: "10px", fontSize: "16px", paddingTop:"20px" }}>Postal Code:</label>
                            <input
                                defaultValue={initialPostalCodeValue}
                                // className="editItemInput"
                                id="my-input"
                                style={{ padding: "8px", marginBottom:"20px" }}
                                aria-describedby='my-helper-text'
                                onChange={(e) => setInitialPostalCodeValue(e.target.value)}
                            />
                                <br></br>
                        </div>
                        <Button style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 15px" }} onClick={allowEditing}>UPDATE INFO</Button>

                    </div>
                    ) : (
                    <div style={{display:"flex", lineHeight:"1", alignItems:"center", marginTop:"0", paddingTop:"0", flexDirection:"row"}}>
                        <p style={{ marginRight: "20px", lineHeight: "1", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>RESIDENTIAL ADDRESS:</span> {address1}, {address2}, {postalCode}</p>
                        <Button style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }} onClick={allowEditing}>EDIT ADDRESS</Button>
                    </div>
                    )}
                    {/* {editVoterAdd ? null : <Button style={{ marginTop:"15px", marginBottom:"5px", lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }} onClick={allowEditing}>EDIT ADDRESS</Button>} */}

                    {/* <p text="password" style={{ fontSize: "15px" }}>RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p> */}
                    <p style={{ fontSize: "15px", marginTop:"20px"}}><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p>
                    {/* <div className="flexVoterButtonsRow" style={{ marginTop:"10px", marginBottom:"2rem", alignItems:"center"}}>
                        <Button style={{ lineHeight: "2", fontFamily:"monospace", fontSize:"13px", padding: "5px 15px" }} variant="primary" onClick={handleShow}>
                            Edit Voter Information
                        </Button> */}
                    <Button style={{ lineHeight: "2", fontFamily: "monospace", fontSize:"13px", padding: "5px 10px", marginTop:"2rem", marginBottom:"1rem" }} variant="primary" onClick={handleShow}>
                        DEACTIVATE MY REGISTRATION
                    </Button>
                    {/* </div> */}
                    {/* {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null} */}
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
