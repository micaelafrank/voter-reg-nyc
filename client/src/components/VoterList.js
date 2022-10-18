import React, { useState } from "react";
import Voter from "./Voter";
import Search from "./Search";


// function VoterList({ handleSearchSubmit, setIsFiltering, setIsSearching, isFiltering, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isSearching, voters, setVoters, deleteVoter }) {
function VoterList({ handleSearchSubmit, firstNameSearch, setIsFiltering, setIsSearching, isFiltering, lastNameSearch, zipSearch, handleSearchClear, isSearching, voters, setVoters, deleteVoter }){
    
    let count = 0;

    const searchedNames = voters.filter((voter) => {
        // return (voter.first == firstNameSearch) && (voter.last == lastNameSearch) && (voter.postalCode.toString() == zipSearch)
        if ((voter.first == firstNameSearch) && (voter.last == lastNameSearch) && (voter.postalCode.toString() == zipSearch)) {
            count = true;
            return true;
        } else if (count === 0) {
            count = false;
        }
    })

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
            party={voter.party}
            password={voter.password}
            postalCode={voter.postalCode}
            // handleSearch={setUserSearch}
            deleteVoter={deleteVoter}
            setIsFiltering={setIsFiltering}
            setIsSearching={setIsSearching}
            isSearching={isSearching}
            isFiltering={isFiltering}
            handleSearchClear={handleSearchClear}
            handleDelete={deleteVoter}
            firstNameSearch={firstNameSearch}
            lastNameSearch={lastNameSearch}
            zipSearch={zipSearch}
        />
    ))

    return (
        <React.Fragment>
            <section className="voterGridContainer">
                {isSearching ? searchedNames : listOfVoters}
            </section>
            {count ? null : <p id="error-message"><span style={{ fontWeight: "bold" }}>Not Found:</span> Your search did not match any record on file. Please ensure fields are accurate and try again.</p>}
        </React.Fragment>
    );
}


export default VoterList;