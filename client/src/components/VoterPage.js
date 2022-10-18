import React, { useState, useEffect } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";


function VoterPage({ voters, setVoters, handleSearchSubmit, handleSearchClear, change, setChange }) {
    const [firstNameSearch, setFirstNameSearch] = useState("")
    const [lastNameSearch, setLastNameSearch] = useState("")
    const [zipSearch, setZipSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     fetch("/voters")
    //         .then(res => res.json())
    //         .then(voters => setVoters(voters) )
    // }, [])
    // console.log(voters)

    function handleSearchClear() {
        setIsSearching(false)
        setIsFiltering(false)
    }

    function handleSearchSubmit() {
        setIsSearching(true);
        setIsFiltering(true);
    }
        
    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    return (
        <main className="voterPageContainer" style={{ paddingTop: "35px", paddingBottom: "30px" }}>
            {/* <GridColSizesExample /> */}
            <Search setIsFiltering={setIsFiltering} setIsSearching={setIsSearching} setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} handleSearchClear={handleSearchClear} handleSearchSubmit={handleSearchSubmit} setZipSearch={setZipSearch} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} />
            (<VoterList error={error} voters={voters} handleSearchSubmit={handleSearchSubmit} handleSearchClear={handleSearchClear} handleDelete={deleteVoter} 
            isSearching={isSearching} isFiltering={isFiltering} 
            firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} setZipSearch={setZipSearch} setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} />)
        </main>
    )
}

export default VoterPage;