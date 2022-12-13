import React, { useState, useEffect } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";
import SearchedVoter from "./SearchedVoter";

function VoterPage() {
    const [firstNameSearch, setFirstNameSearch] = useState(" ")
    const [lastNameSearch, setLastNameSearch] = useState(" ")
    const [zipSearch, setZipSearch] = useState(" ")
    const [isSearching, setIsSearching] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [error, setError] = useState("");
    const [voters, setVoters] = useState([])
    const [change, setChange] = useState(false);
    const [validated, setValidated] = useState(false);

    function handleValidation() {
        setValidated(validated => !validated);
    }

    useEffect(() => {
        fetch("/voters")
            .then(res => res.json())
            .then(voters => { setVoters(voters) })
    }, [change])
    console.log(voters)


    function handleSearchSubmit() {
        setIsSearching(true)
        setIsFiltering(true);
    }

    function handleSearchClear() {
        setIsSearching(false)
        setIsFiltering(false);
        setValidated(false);
    }

    // function editSearchParams() {
    //     setIsFiltering(true);
    //     setIsSearching(true);
    //     console.log(`Filter results: ${isFiltering}`);
    // }

    //     const searchedVoter = voters.map((voter) => (
    //     <SearchedVoter
    //     change={change}
    //     setChange={setChange}
    //     key = { voter.id }
    //     id = { voter.id }
    //     voters = { voters }
    //     voter={voter.voter}
    //     lastName = { voter.last }
    //     firstName = { voter.first }
    //     address1 = { voter.address1 }
    //     address2 = { voter.address2 }
    //     isActive = { voter.isActive }
    //     setVoters = { setVoters }
    //     age = { voter.age }
    //     party = { voter.party }
    //     password = { voter.password }
    //     postalCode = { voter.postalCode }
    //     deleteVoter = { deleteVoter }
    //     setIsFiltering = { setIsFiltering }
    //     setIsSearching = { setIsSearching }
    //     isSearching = { isSearching }
    //     isFiltering = { isFiltering }
    //     validated={validated}
    //     setValidated={setValidated}
    //     handleValidation={handleValidation}
    //         />
    // ))

    const renderMessage = "Not found: Your search did not match any record on file. Please ensure fields are accurate and try again.";
    let count = 0;

    const searchedNames = voters.filter((voter) => {
        if ((voter.first.toLowerCase() === firstNameSearch.toLowerCase()) && (voter.last === lastNameSearch) && (voter.postalCode.toString() === zipSearch)) {
            count = true;
            return true;
        } else if (count === 0) {
            count = false;
            console.log(renderMessage)
        }})
    //         count += 1;
    //     } else {
    //         count = 0;
    //     }
    //     return count;
    // })

    function handleSearchSubmit() {
        setIsSearching(true);
        setIsFiltering(true);
    }

    function handleSearchClear() {
        setIsSearching(false);
        setIsFiltering(false);
        setValidated(false);
    }


    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    return (
        <main className="voterPageContainer" style={{ paddingTop: "35px", paddingBottom: "30px" }}>
            {/* <GridColSizesExample /> */}
            <Search setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} handleSearchClear={handleSearchClear} handleSearchSubmit={handleSearchSubmit} setZipSearch={setZipSearch} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} />
            <VoterList handleValidation={handleValidation} setValidated={setValidated} validated={validated} isFiltering={isFiltering} count={count} setVoters={setVoters} renderMessage={renderMessage} error={error} voters={isSearching ? searchedNames : voters} handleSearchSubmit={handleSearchSubmit} handleSearchClear={handleSearchClear} handleDelete={deleteVoter} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} setZipSearch={setZipSearch} setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} />
        </main>
    )
}

export default VoterPage;