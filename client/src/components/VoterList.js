import React, { useState } from "react";
import Voter from "./Voter";
import { useParams } from "react-router-dom";

function VoterList({ handleSearchSubmit, firstNameSearch, lastNameSearch, zipSearch, count, handleSearchClear, searchedNames, isFiltering, isSearching, voters, setVoters, deleteVoter }) {
    // const [isSearching, setIsSearching] = useState(false);
    // const [isFiltering, setIsFiltering] = useState(false);
    // const [error, setError] = useState("");
    // const [{ data: voter, error, status }, setVoter] = useState({
    //     data: null,
    //     error: null,
    //     status: "pending",
    // });
    // const { id } = useParams();

    const listOfVoters = voters.map((voter) => (
        <Voter
            key={voter.id}
            id={voter.id}
            lastName={voter.last}
            firstName={voter.first}
            voters={voters}
            isActive={voter.isActive}
            setVoters={setVoters}
            searchedNames={searchedNames}
            count={count}
            party={voter.party}
            password={voter.password}
            postalCode={voter.postalCode}
            // handleSearch={setUserSearch}
            deleteVoter={deleteVoter}
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