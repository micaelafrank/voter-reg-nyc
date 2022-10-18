import React, { useState, useEffect } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";

function VoterPage() {
    const [firstNameSearch, setFirstNameSearch] = useState("")
    const [lastNameSearch, setLastNameSearch] = useState("")
    const [zipSearch, setZipSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [error, setError] = useState("");
    const [voters, setVoters] = useState([])

    useEffect(() => {
        fetch("/voters")
            .then(res => res.json())
            .then(voters => { setVoters(voters) })
    }, [])
    console.log(voters)


    function handleSearchSubmit() {
        setIsSearching(true)
        setIsFiltering(true);
    }

    function handleSearchClear() {
        setIsSearching(false)
        setIsFiltering(false);
    }

    // function editSearchParams() {
    //     setIsFiltering(true);
    //     setIsSearching(true);
    //     console.log(`Filter results: ${isFiltering}`);
    // }

    const renderMessage = "Not found: Your search did not match any record on file. Please ensure fields are accurate and try again.";

    let count = 0;

    const searchedNames = voters.filter((voter) => {
        if ((voter.first == firstNameSearch) && (voter.last == lastNameSearch) && (voter.postalCode.toString() == zipSearch)) {
            count = true;
            return true;
        } else if (count === 0) {
            count = false;
            console.log(renderMessage)
        }
    })
        
    function handleSearchSubmit() {
        setIsSearching(true);
        setIsFiltering(true);
    }

    function handleSearchClear() {
        setIsSearching(false);
        setIsFiltering(false);
    }


    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    return (
        <main className="voterPageContainer" style={{ paddingTop: "35px", paddingBottom: "30px" }}>
            {/* <GridColSizesExample /> */}
            <Search setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} handleSearchClear={handleSearchClear} handleSearchSubmit={handleSearchSubmit} setZipSearch={setZipSearch} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList count={count} error={error} voters={isSearching ? searchedNames : voters} handleSearchSubmit={handleSearchSubmit} handleSearchClear={handleSearchClear} handleDelete={deleteVoter} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} setZipSearch={setZipSearch} setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} />
        </main>
    )
}

export default VoterPage;