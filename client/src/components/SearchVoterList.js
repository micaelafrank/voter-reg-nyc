import React, { useState, useEffect } from "react";
import VoterList2 from "./VoterList2";
// import Search from "./Search";
// import SearchedVoter from "./SearchedVoter";
import Button from 'react-bootstrap/Button';
import EditSearchedV from "./EditSearchedV";
import EditParty from "./EditParty";
import DeleteModal from "./DeleteModal";

function SearchVoterList({ deleteVoterRecord, parties, setParties, setUser, voters, setVoters, user }) {
    const { firstname, username, lastname, id, voter, password } = user;
    const [editInfo, setEditInfo] = useState(false);
    const [show, setShow] = useState(false);
    // const [editVoterAdd, setEditVoterAdd] = useState(false);
    const [change, setChange] = useState(false);
    const [findVoter, setFindVoter] = useState({})

    const [address1State, setAddress1State] = useState(voter.address1);
    const [editAddress1State, setEditAddress1State] = useState(false);
    const [initialAddress1Value, setInitialAddress1Value] = useState(voter.address1);

    const [address2State, setAddress2State] = useState(voter.address2);
    const [editAddress2State, setEditAddress2State] = useState(false);
    const [initialAddress2Value, setInitialAddress2Value] = useState(voter.address2);

    const [postalCodeState, setPostalCodeState] = useState(voter.postalCode);
    const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(voter.postalCode);

    const [voterPartyState, setVoterPartyState] = useState(voter.party_id);
    const [editVoterPartyState, setEditVoterPartyState] = useState(false);
    const [initialVoterPartyValue, setInitialVoterPartyValue] = useState(voter.party_id);
    const [editPartyInfo, setEditPartyInfo] = useState(false);

    // console.log("party name state: ", voter.party_id, voter.party.party_name)
    const [openDelete, setOpenDelete] = useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    // const handlePartyEdit = () => setOpenParty(true);


    useEffect(() => {
        fetch("/parties")
            .then(res => res.json())
            .then(parties => setParties(parties))
    }, [change])
    console.log("parties: ", parties)

    useEffect(() => {
        fetch(`/myvote/${voter.user_id}`)
            .then(res => res.json())
            .then(findVoter => setFindVoter(findVoter))
    }, [change])
    console.log("found voter: ", findVoter)
    

    const handleCloseEdit = () => {
        // (setChange(!change))
        setEditInfo(false);
    }

    const handleExitPartyEdit = () => {
        setEditPartyInfo(editPartyInfo => !editPartyInfo); }

    const address1 = voter.address1;
    const address2 = voter.address2;
    const postalCode = voter.postalCode;
    const voterPartyObj = voter.party;
    const partyId = voter.party_id;
    let myVoter = user.voter;
    let myVoterFN = user.firstname;
    const upperFN = `${myVoterFN}`.toUpperCase(); 
    let myVoterLN = user.lastname;
    const upperLN = `${myVoterLN}`.toUpperCase();
    console.log(user.lastname);

    function handleOpenEdit(){
        setEditInfo(true)
        // setEditAddress1State(true)
        // setEditAddress2State(true)
        // setEditPostalCodeState(true)
    }

    function handlePartyEdit() {
        setEditPartyInfo(true);
        // setEditPartyNameState(true);
    }

    console.log(myVoter)

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

    function handleDelete() {
        console.log("I want to delete")
    }

    return (
    <>
        {/* {show ? <EditSearchedV voters={voters} setVoters={setVoters} change={change} setChange={setChange} address1={user.address1} handleShow={handleShow} show={show} handleCloseEdit={handleCloseEdit} user={user} /> : null} */}
        <div className="search-item" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "2rem", alignItems: "center", justifyContent: "center" }}>
            <div className="searchItemInnerDiv" style={{ fontFamily: "monospace", marginTop: "1rem", marginBottom: "2rem", alignItems: "left", textAlign: "left", justifyContent: "center" }}>
                {/* <p id="editFullName" style={{ fontWeight: "bold", fontWeight: "bold" }}>{upperFN} {upperLN}</p> */}
                <div style={{display:"flex", flexDirection:"row", lineHeight:"2", alignItems:"center", justifyContent:"center" ,fontSize:"13px"}}>
                    <div style={{ width: "1090px", flexDirection:"column"}}>
                        <p id="editFullName">{upperFN} {upperLN}</p>
                        <p style={{ alignItems: "center", fontSize: "16px", lineHeight: "1.6", color: voter.isActive ? "green" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{voter.isActive ? "ACTIVE" : "INACTIVE"}</p>
                    </div>
                    <div style={{width:"500px", display:"flex", flexDirection:"column", justifyContent:"right", alignItems:"center"}}>
                        <p style={{ color: "navy", letterSpacing: "1.5px" }}><a style={{ cursor: "pointer", borderBottom: "2px solid navy", paddingLeft: "15px", justifyContent: "center", paddingRight:"15px", textDecoration: "none", }} href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=" target="_blank">FIND MY POLLSITE</a></p>
                        <p onClick={handleOpenDelete} style={{ color: "navy", letterSpacing: "1.5px"}}><a style={{ cursor: "pointer", borderBottom: "2px solid navy", textDecoration: "none", paddingLeft: "15px", paddingRight: "15px", }}>DELETE VOTER RECORD</a></p>
                    </div>
                </div>
                {openDelete ?
                <DeleteModal deleteVoterRecord={deleteVoterRecord} voter={voter} vId={voter.user_id} handleOpenDelete={handleOpenDelete} handleCloseDelete={handleCloseDelete} openDelete={openDelete} setOpenDelete={setOpenDelete} />
                : null}
                <div style={{ marginTop:"0", borderBottom:"2px solid black", width:"350px"}}>&nbsp;</div>
                {/* <p style={{ alignItems: "center", fontSize: "16px", lineHeight:"1.6", color: user.isActive ? "green" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{user.isActive ? "ACTIVE" : "INACTIVE"}</p> */}
                <div style={{marginTop:"30px", display:"flex", fontSize:"16px", alignItems:"center", lineHeight:"1.6", alignItems:"center", flexDirection: "row"}}>
                    <p style={{ width: "370px", fontWeight:"bold" }}>FIRST NAME:</p>
                    <p>{firstname}</p>
                </div>
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width:"370px", fontWeight: "bold" }}>LAST NAME:</p>
                    <p>{lastname}</p>
                </div>
                <div style={{ display: "flex", fontSize: "16px", alignItems: "center", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "370px", fontWeight: "bold" }}>AGE:</p>
                    <p>{voter.age} years old</p>
                </div>
                    {/* <p style={{ lineHeight: "1.6", fontSize: "15px" }}><span style={{ fontWeight: "bold" }}>AGE: </span>{voter.age} YEARS OLD</p> */}
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "370px", fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN):</p>
                    <p>11349{voter.user_id}</p>
                </div>
                {editPartyInfo ? 
                <EditParty partyId={partyId} voterPartyObj={voterPartyObj} change={change} setChange={setChange} upperFN={upperFN} upperLN={upperLN} voter={voter} user={user} handleExitPartyEdit={handleExitPartyEdit} voterPartyState={voterPartyState} setVoterPartyState={setVoterPartyState} initialVoterPartyValue={initialVoterPartyValue} setInitialVoterPartyValue={setInitialVoterPartyValue} editVoterPartyState={editVoterPartyState} setEditVoterPartyState={setEditVoterPartyState} editPartyInfo={editPartyInfo} setEditPartyInfo={setEditPartyInfo} parties={parties} setParties={setParties} /> : null} 
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "370px", fontWeight: "bold" }}>PARTY:</p>
                    <p>{voter.party ? voter.party.party_name : 'Neutral'}</p>
                    {/* <p onClick={handlePartyEdit} className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", borderBottom: "2px solid black", fontSize: "13px", padding: "5px 10px", width: "auto", textAlign: "right", marginLeft: "290px", float: "right", width:"auto" }}>EDIT PARTY AFFILIATION</p> */}
                    {/* <p onClick={handlePartyEdit} className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", borderBottom:"2px solid black", fontSize: "13px", padding: "5px 10px" }}>SWITCH PARTY</p> */}
                </div>
                {editInfo ? <EditSearchedV findVoter={findVoter} setFindVoter={setFindVoter} address1={address1} address2={address2} postalCode={postalCode} editInfo={editInfo} setEditInfo={setEditInfo} show={show} upperFN={upperFN} upperLN={upperLN} editAddress1State={editAddress1State} setEditAddress1State={setEditAddress1State} postalCodeState={postalCodeState} setPostalCodeState={setPostalCodeState} initialPostalCodeValue={initialPostalCodeValue} setInitialPostalCodeValue={setInitialPostalCodeValue} editPostalCodeState={editPostalCodeState} setEditPostalCodeState={setEditPostalCodeState}setEditAddress2State={setEditAddress2State} editAddress2State={editAddress2State} initialAddress2Value={initialAddress2Value} setInitialAddress2Value={setInitialAddress2Value} address2State={address2State} setAddress2State={setAddress2State} change={change} setChange={setChange} handleCloseEdit={handleCloseEdit} user={user} voter={voter} address1State={address1State} setAddress1State={setAddress1State} initialAddress1Value={initialAddress1Value} setInitialAddress1Value={setInitialAddress1Value} /> : null}
                <div style={{ alignItems: "center", display: "flex", fontSize: "16px", lineHeight: "1.6", alignItems: "center", flexDirection: "row" }}>
                    <p style={{ width: "370px", fontWeight: "bold" }}>RESIDENTIAL ADDRESS:</p>
                    <p>{address1State}, {address2State}, {postalCodeState}</p>
                    <p onClick={handleOpenEdit} className="viewVotingInfoBtn" style={{ lineHeight: "2", fontFamily: "monospace", borderBottom: "2px solid black", fontSize: "13px", padding: "5px 10px", width: "auto", textAlign:"right", marginLeft:"150px", float:"right"}}>EDIT ADDRESS</p>
                </div>
            </div>
        </div>
    </>
)
}

export default SearchVoterList;