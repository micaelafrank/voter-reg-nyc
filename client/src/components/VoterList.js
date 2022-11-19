import React, { useState } from "react";
import Voter from "./Voter";
import Search from "./Search";


// function VoterList({ handleSearchSubmit, setIsFiltering, setIsSearching, isFiltering, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter }) {
function VoterList({ renderMessage, handleSearchSubmit, firstNameSearch, searchedNames, count, setIsFiltering, setIsSearching, isFiltering, lastNameSearch, zipSearch, handleSearchClear, isSearching, voters, setVoters, deleteVoter }){
    
    const listOfVoters = voters.map((voter) => (
        <Voter
            key={voter.id}
            id={voter.id}
            lastName={voter.last}
            firstName={voter.first}
            address1={voter.address1}
            address2={voter.address2}
            isActive={voter.isActive}
            setVoters={setVoters}
            count={count}
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
        <React.Fragment>
            <h1 className="formHeading4" style={{ paddingTop: "50px", paddingBottom: "20px", fontFamily: "KGThankYouStamp", textAlign: "center", fontSize: "60px" }}>REGISTERED VOTERS</h1>
            <section className={isFiltering ? "searchGridContainer" : `voterGridContainer`}>
                {listOfVoters}
            </section>
            {count=0 ? <p style={{ fontSize: "18px", color: "maroon" }} id="error-message"><span style={{ fontWeight: "bold" }}>Not Found:</span> Your search did not match any record on file. Please ensure fields are accurate and try again.</p> : null}
        </React.Fragment>
    );
}


export default VoterList;