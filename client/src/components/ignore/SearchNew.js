import React, { useState } from "react";
import Voter from "../Voter";
import VoterList from "../VoterList";


function SearchNew({ isFiltering, editSearchParams, listOfVoters, setIsFiltering, isSearching, handleSearchClear, handleSearchSubmit }) {
    // const [formData, setFormData] = useState({ firstNameSearch:"", lastNameSearch: "", zipSearch:"" });
    const [fnSearch, setFNSearch] = useState("");
    const [lnSearch, setLNSearch] = useState("");
    const [zcSearch, setZCSearch] = useState("");
    const [err, setErrors] = useState("");
    const searchedVoter = { fnSearch, lnSearch, zcSearch }


    function handleSubmit(e) {
        e.preventDefault();
        setFNSearch(e.target.value.toLowerCase());
        setLNSearch(e.target.value.toLowerCase());
        setZCSearch(e.target.value);
        console.log(searchedVoter)

        fetch(`/search/=?${searchedVoter}`).then((r) => {
            if (r.ok) {
                r.json().then(editSearchParams)
            } else {
                r.json().then((err) =>
                    setErrors(err)
                );
            }
        });
        clearSearch();
    }

    // const cartItem = item
    //     fetch("/voters/search", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({searchedVoter}),
    //     })
    //         .then(res => res.json())
    //         .then(handleSearch)
    // }

    // function handleSearch(e){
    //     e.preventDefault();
    //     fetch("/voters/search").then((r) => {
    //         if (r.ok) {
    //             r.json().then(editSearchParams)
    //         } else {
    //             r.json().then((err) =>
    //                 setErrors(err)
    //             );
    //         }
    //     });
    // }

    // function handleSearch() {
    //     setIsFiltering(true);
    //     console.log(`Filter results: ${isFiltering}`);
    // }

    function clearSearch() {
        setFNSearch("");
        setLNSearch("");
        setZCSearch("");
        handleSearchClear();
    }
    function SubmitButton() {
        if (fnSearch && lnSearch && (zcSearch.length === 5)) {
            return <button type="submit">Submit</button>
        } else {
            return <button type="submit" disabled>Submit</button>
        };
    };

    return (
        <div className="searchBarContainer">
            <form id="searchForm" style={{ fontFamily: "monospace" }} className="searchbarForm" onSubmit={handleSubmit}>
                <h4 style={{ lineHeight: "0", fontSize: "30px", textAlign: "center" }}>CHECK YOUR VOTER STATUS</h4>
                <p style={{ fontSize: "15px", lineHeight: "1.2" }}><span style={{ fontSize: "18px", fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
                <div id="row1" style={{ display: "flex", fontFamily: "monospace", flexDirection: "row" }}>
                    <input
                        width="20%"
                        required
                        type="search"
                        id="firstNameSearch"
                        name="firstNameSearch"
                        placeholder="First name"
                        value={fnSearch}
                        onChange={(e) => setFNSearch(e.target.value)}
                    // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        required
                        width="20%"
                        type="search"
                        id="lastNameSearch"
                        name="lastNameSearch"
                        placeholder="Last name"
                        value={lnSearch}
                        onChange={(e) => setLNSearch(e.target.value)}
                    // onChange={(e) => setLastName(e.target.value)}
                    />
                    {/* </div>
        <div id="row2" style={{ display: "flex", flexDirection: "row" }}> */}
                    <input
                        width="20%"
                        style={{ color: "gray" }}
                        required
                        type="date"
                        name="birthdaySearch"
                        id="birthdaySearch"
                        placeholder="Birthday (MM/DD/YYYY)"
                    />
                    <input
                        width="20%"
                        required
                        type="text"
                        maxLength="5"
                        minLength="5"
                        id="zipSearch"
                        name="zipSearch"
                        placeholder="Postal Code"
                        value={zcSearch}
                        onChange={(e) => setZCSearch(e.target.value)}
                    // onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <SubmitButton value="search" />
                    {/* onClick={handleSearch}  */}
                    <button style={{ fontFamily: "monospace" }} onClick={clearSearch}>Clear Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchNew;