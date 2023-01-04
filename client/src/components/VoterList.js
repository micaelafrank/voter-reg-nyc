import React, { useState, useEffect } from "react";
import Voter from "./Voter";
import Search from "./Search";
import SearchedVoter from "./SearchedVoter";


// function VoterList({ handleSearchSubmit, setIsFiltering, setIsSearching, isFiltering, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter }) {
function VoterList({ canEdit, setCanEdit, handleModal, change, setChange, handleValidation, setValidated, validated, renderMessage, handleSearchSubmit, firstNameSearch, searchedNames, count, setIsFiltering, setIsSearching, isFiltering, lastNameSearch, zipSearch, handleSearchClear, isSearching, voters, setVoters, deleteVoter }){
   
    // useEffect(() => {
    //     fetch("/voters")
    //         .then(res => res.json())
    //         .then(voters => { setVoters(voters) })
    // }, [change])
    // console.log(voters)

    const searchedVoter = voters.map((voter) => (
        <SearchedVoter
        change={change} 
        setChange={setChange}
        key = { voter.id }
        id = { voter.id }
        voters = { voters }
        voter={voter.voter}
        lastName = { voter.last }
        firstName = { voter.first }
        address1 = { voter.address1 }
        address2 = { voter.address2 }
        isActive = { voter.isActive }
        setVoters = { setVoters }
        age = { voter.age }
        count = { count }
        searchedNames = { searchedNames }
        party = { voter.party }
        password = { voter.password }
        postalCode = { voter.postalCode }
        deleteVoter = { deleteVoter }
        setIsFiltering = { setIsFiltering }
        setIsSearching = { setIsSearching }
        isSearching = { isSearching }
        isFiltering = { isFiltering }
        validated={validated}
        handleModal={handleModal}
        setValidated={setValidated}
        handleValidation={handleValidation}
        />
    ))

    const listOfVoters = voters.map((voter) => (
        <Voter
            canEdit={canEdit}
            setCanEdit={setCanEdit}
            // validated={validated}
            handleValidation={handleValidation}
            key={voter.id}
            handleModal={handleModal}
            id={voter.id}
            voter={voter.voter}
            // setValidated={setValidated}
            voters={voters}
            lastName={voter.last}
            firstName={voter.first}
            address1={voter.address1}
            address2={voter.address2}
            isActive={voter.isActive}
            setVoters={setVoters}
            age={voter.age}
            count={count}
            change={change}
            setChange={setChange}
            searchedNames={searchedNames}
            party={voter.party}
            password={voter.password}
            postalCode={voter.postalCode}
            // handleSearch={setUserSearch}
            deleteVoter={deleteVoter}
            setIsFiltering={setIsFiltering}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
            isFiltering={isFiltering}
            // handleSearchClear={handleSearchClear}
            // handleDelete={deleteVoter}
            // firstNameSearch={firstNameSearch}
            // lastNameSearch={lastNameSearch}
            zipSearch={zipSearch}
        />
    ))

    return (
        <div style={{justifyContent:"center"}}>
            {/* {validated ? 
                <h1 className="formHeading4" style={{ paddingTop: "50px", paddingBottom: "20px", fontFamily: "KGThankYouStamp", textAlign: "center", fontSize: "60px" }}>VOTER INFORMATION</h1>
            : */}
            <h2 className="voterListHeader" style={{ fontSize: "40px", fontFamily: "monospace", alignItems: "center", paddingTop: "20px", textAlign: "center" }}>{listOfVoters.length > 0 ? "REGISTERED VOTERS" : null}</h2>
            {isFiltering && listOfVoters.length > 0 ? 
            <p style={{fontFamily:"monospace", fontSize:"14px", textAlign:"center"}}>{listOfVoters.length} RECORDS FOUND</p> : 
            null}
            <section style={{paddingTop:"30px"}} className={isFiltering ? "searchGridContainer" : `voterGridContainer`}>
            {validated ? searchedVoter : listOfVoters}
            {/* {listOfVoters} */}
            </section>
            {/* {listOfVoters.length > 0 ? null : renderMessage} */}
            {listOfVoters.length > 0 ? null : <p style={{ lineHeight:"1.8", fontSize: "18px", color: "maroon" }} id="error-message"><span style={{ fontWeight: "bold", fontSize:"22px" }}>VOTER NOT FOUND</span><br></br>Your search did not match any record on file.<br></br>Please ensure all information is accurate and try again.</p> }
        </div>
    );
}


export default VoterList;