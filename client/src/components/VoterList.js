import React, { useState } from "react";
import Voter from "./Voter";
import Search from "./Search";


// function VoterList({ handleSearchSubmit, setIsFiltering, setIsSearching, isFiltering, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter }) {
function VoterList({ renderMessage, handleSearchSubmit, firstNameSearch, searchedNames, count, setIsFiltering, setIsSearching, isFiltering, lastNameSearch, zipSearch, handleSearchClear, isSearching, voters, setVoters, deleteVoter }){
    
    const listOfVoters = voters.map((voter) => (
        <Voter
            key={voter.id}
            id={voter.id}
            voters={voters}
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
            {/* {listOfVoters.length > 0 ? null : renderMessage} */}
            {listOfVoters.length > 0 ? null : <p style={{ lineHeight:"1.8", fontSize: "18px", color: "maroon" }} id="error-message"><span style={{ fontWeight: "bold", fontSize:"22px" }}>VOTER NOT FOUND</span><br></br>Your search did not match any record on file.<br></br>Please ensure all information is accurate and try again.</p> }
        </React.Fragment>
    );
}


export default VoterList;