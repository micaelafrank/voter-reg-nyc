import React, { useState, useEffect } from "react";
import VoterList2 from "./VoterList2";
// import Search from "./Search";
// import SearchedVoter from "./SearchedVoter";
import Button from 'react-bootstrap/Button';
import EditSearchedV from "./EditSearchedV";


// function VoterList({ handleSearchSubmit, setIsFiltering, setIsSearching, isFiltering, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter }) {
function SearchVoterList({ setUser, voters, setVoters, user }) {
    const { firstname, username, lastname, id, voter, password, age, address1 } = user;

    const [show, setShow] = useState(false);
    const [editVoterAdd, setEditVoterAdd] = useState(false);
    const [change, setChange] = useState(false);

    let myVoter = user.voter;
    let myVoterFN = user.firstname;
    const upperFN = `${myVoterFN}`.toUpperCase(); 
    let myVoterLN = user.lastname;
    const upperLN = `${myVoterLN}`.toUpperCase();
    console.log(user.lastname);

    // const [address1State, setAddress1State] = useState(myVoter.address1);
    // const [editAddress1State, setEditAddress1State] = useState(false);
    // const [initialAddress1Value, setInitialAddress1Value] = useState(myVoter.address1);

    // const [address2State, setAddress2State] = useState(myVoter.address2);
    // const [editAddress2State, setEditAddress2State] = useState(false);
    // const [initialAddress2Value, setInitialAddress2Value] = useState(myVoter.address2);

    // const [postalCodeState, setPostalCodeState] = useState(myVoter.postalCode);
    // const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    // const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(myVoter.postalCode);

    // let myVoter = user.voter;
    console.log(myVoter)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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

    function allowEditing() {
        setEditVoterAdd(editVoterAdd => !editVoterAdd)
    }


    // let handleEditAddress = () => {
    //     setEditPostalCodeState(true)
    //     if (editVoterAdd && address1State !== "" && address1State !== "" && postalCodeState !== "") {
    //         fetch(`/voters/${user.id}`, {
    //             method: "PATCH",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 address1: address1State,
    //                 address2: address2State,
    //                 postalCode: postalCodeState,
    //                 id: myVoter.user_id,
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => setInitialPostalCodeValue(data.postalCode));
    //         setChange(!change);
    //     }
    // };


    // function resetCount() {
    //     count = 0;
    // }

    return (
    <>
        {show ? <EditSearchedV voters={voters} setVoters={setVoters} change={change} setChange={setChange} address1={user.address1} handleShow={handleShow} show={show} handleClose={handleClose} user={user} /> : null}
        <div className="search-item" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "2rem", alignItems: "center", justifyContent: "center" }}>
            <div className="searchItemInnerDiv" style={{ fontFamily: "monospace", marginTop: "1rem", marginBottom: "2rem", alignItems: "left", textAlign: "left", justifyContent: "center" }}>
                {/* <p id="editFullName" style={{ fontWeight: "bold", fontWeight: "bold" }}>{upperFN} {upperLN}</p> */}
                <div style={{display:"flex", lineHeight:"2", justifyContent:"start" ,fontSize:"16px"}}>
                    <p id="editFullName" style={{ width: "760px"}}>{upperFN} {upperLN}</p>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"right", alignItems:"right"}}>
                        <p style={{ marginLeft:"20px", marginRight: "20px", color: "black", letterSpacing: "1.5px"}}><a style={{ borderBottom: "2px solid black", textDecoration: "none", color: "black" }} href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">FIND MY POLLSITE</a></p>
                        <p 
                        // onClick={deleteVotingInfo} 
                        style={{ color: "black", letterSpacing: "1.5px"}}>
                        <a style={{ borderBottom: "2px solid black", textDecoration: "none", color: "black" }}>DEACTIVATE MY REGISTRATION</a></p>
                    </div>
                </div>
                <p style={{ alignItems: "center", fontSize: "16px", lineHeight:"1.6", color: user.isActive ? "green" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{user.isActive ? "ACTIVE" : "INACTIVE"}</p>
                <div style={{display:"flex", fontSize:"16px", alignItems:"center", lineHeight:"1.6", alignItems:"center", flexDirection: "row"}}>
                    <p style={{ width: "290px", fontWeight:"bold" }}>FIRST NAME:</p>
                    <p>{firstname}</p>
                </div>
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width:"290px", fontWeight: "bold" }}>LAST NAME:</p>
                    <p>{lastname}</p>
                </div>
                <div style={{ display: "flex", fontSize: "16px", alignItems: "center", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "290px", fontWeight: "bold" }}>AGE:</p>
                    <p>{voter.age} years old</p>
                </div>
                    {/* <p style={{ lineHeight: "1.6", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>AGE: </span>{voter.age} YEARS OLD</p> */}
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "290px", fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN):</p>
                    <p>11349{voter.user_id}</p>
                </div>
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "290px", fontWeight: "bold" }}>PARTY:</p>
                    <p style={{ width: "310px", }}>{voter.party ? voter.party.party_name : 'Neutral'}</p>
                    <p className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", borderBottom:"2px solid black", fontSize: "13px", padding: "5px 10px" }}>SWITCH PARTY</p>
                </div>


                {/* <p style={{ lineHeight: "1.6", alignItems: "center", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>11349{voter.user_id}</p> */}
                {/* <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ lineHeight: "1", alignItems: "left", fontSize: "15px", marginRight: "20px" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{user.party ? user.party.party_name : 'Neutral'}</p>
                    <Button className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }}>SWITCH PARTY</Button>
                </div> */}

                {/* {editVoterAdd ? (
                    <div style={{ padding: "30px", marginTop: "50px", marginBottom: "60px", paddingTop: "15px", width: "80%", backgroundColor: "white", border: "5px solid navy" }}>
                        <p style={{ fontSize: "20px", borderBottom: ".7px solid black", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>UPDATE ADDRESS INFORMATION</p>
                        <div style={{ paddingBottom: "10px" }}>
                            <label style={{ marginRight: "10px", fontSize: "16px", paddingTop: "20px" }}>Street Address:</label>
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
                            <label style={{ marginRight: "10px", fontSize: "16px", paddingTop: "20px" }}>Suite/Apt/Floor Number:</label>
                            <input
                                defaultValue={initialAddress2Value}
                                // className="editItemInput"
                                id="my-input"
                                aria-describedby='my-helper-text'
                                style={{ padding: "8px" }}
                                onChange={(e) => setInitialAddress2Value(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <div style={{ paddingBottom: "10px" }}>
                            <label style={{ marginRight: "10px", fontSize: "16px", paddingTop: "20px" }}>Postal Code:</label>
                            <input
                                defaultValue={initialPostalCodeValue}
                                // className="editItemInput"
                                id="my-input"
                                style={{ padding: "8px", marginBottom: "20px" }}
                                aria-describedby='my-helper-text'
                                onChange={(e) => setInitialPostalCodeValue(e.target.value)}
                            />
                            <br></br>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Button onClick={handleEditAddress} className="viewVotingInfoBtn2" style={{ marginRight: "30px", lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 15px" }}>UPDATE INFO</Button>
                            <Button onClick={allowEditing} className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 15px" }}>CANCEL</Button>
                        </div>

                    </div> */}
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "290px", fontWeight: "bold" }}>RESIDENTIAL ADDRESS:</p>
                    <p style={{ width: "310px", }}>{voter.address1}, {voter.address2}, {voter.postalCode} </p>
                    <p className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", borderBottom: "2px solid black", fontSize: "13px", padding: "5px 10px" }}>EDIT ADDRESS</p>
                </div>

                    {/* <div style={{ display: "flex", lineHeight: "1", alignItems: "center", marginTop: "0", paddingTop: "0", flexDirection: "row" }}>
                        <p style={{ marginRight: "20px", lineHeight: "1", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>RESIDENTIAL ADDRESS:</span> {voter.address1}, {voter.address2}, {voter.postalCode}</p>
                        <Button className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }} onClick={handleShow}>EDIT ADDRESS</Button>
                    </div> */}
                {/* {editVoterAdd ? null : <Button style={{ marginTop:"15px", marginBottom:"5px", lineHeight: "2", fontFamily: "monospace", fontSize: "13px", padding: "5px 10px" }} onClick={allowEditing}>EDIT ADDRESS</Button>} */}

                {/* <p text="password" style={{ fontSize: "15px" }}>RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p> */}
                {/* <div className="flexVoterButtonsRow" style={{ marginTop:"10px", marginBottom:"2rem", alignItems:"center"}}>
                        <Button style={{ lineHeight: "2", fontFamily:"monospace", fontSize:"13px", padding: "5px 15px" }} variant="primary" onClick={handleShow}>
                            Edit Voter Information
                        </Button> */}
                {/* <Button className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", fontSize: "15px", fontWeight: "bold", padding: "5px 10px", marginTop: "1rem", marginBottom: "1rem" }} variant="primary"
                // onClick={handleDelete}
                >
                    DEACTIVATE MY REGISTRATION
                </Button> */}
                {/* </div> */}
                {/* {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null} */}
            </div>
        </div>
    </>
)
}

export default SearchVoterList;