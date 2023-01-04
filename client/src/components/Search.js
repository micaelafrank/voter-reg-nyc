import React, { useState } from "react";


function Search({ date, setFirstNameSearch, isFiltering, setIsFiltering, isSearching, setLastNameSearch, setZipSearch, handleSearchClear, handleSearchSubmit }) {
    // const [formData, setFormData] = useState({ firstNameSearch:"", lastNameSearch: "", zipSearch:"" });
    const [fnSearch, setFNSearch] = useState("");
    const [lnSearch, setLNSearch] = useState("");
    const [zcSearch, setZCSearch] = useState("");
    const [colorChange, setColorChange] = useState(false);
    const [birthday, setBirthday] = useState("");
    // const [searchChange, setSearchChange] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setFirstNameSearch(fnSearch);
        setLastNameSearch(lnSearch);
        setZipSearch(zcSearch);
        handleSearchSubmit();
    }

    function handleBirthday(e){
        setColorChange(true);
        setBirthday(e.target.value);
    }

    function handleSearch() {
        setIsFiltering(true);
        console.log(`Filter results: ${isFiltering}`);
    }

    function clearSearch() {
        setFNSearch("");
        setLNSearch("");
        setZCSearch("");
        setBirthday("")
        setColorChange(false);
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
                <h4 style={{ lineHeight: "0", fontSize: "30px", textAlign: "center" }}>CHECK VOTER STATUS</h4>
                <p style={{ fontSize: "15px", lineHeight: "1.2" }}><span style={{ fontSize: "18px", fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
                <div id="row1" style={{ display: "flex", fontFamily: "monospace", flexDirection: "row" }}>
                    <input
                        style={setColorChange ? { color: "black", border: "1px solid black", borderRadius: "2px" } : { color: "gray", border: "1px solid black", borderRadius: "2px" }}
                        width="20%"
                        required
                        type="text"
                        id="firstNameSearch"
                        name="firstNameSearch"
                        placeholder="First name"
                        value={fnSearch}
                        onChange={(e) => {
                            // setColorChange(true);
                            setFNSearch(e.target.value)}
                        }
                    // onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        style={setColorChange ? { color: "black", border: "1px solid black", borderRadius: "2px" } : { color: "gray", border: "1px solid black", borderRadius: "2px" }}
                        required
                        width="20%"
                        type="text"
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
                        style={ colorChange ? { color: "black", border: "1px solid black", borderRadius: "2px" } : { color: "gray", border: "1px solid black", borderRadius: "2px" } }
                        required
                        type="date"
                        value={birthday}
                        name="birthdaySearch"
                        placeholder="mm/yy/dddd"
                        onChange={handleBirthday}
                    />
                    <input
                        style={setColorChange ? { color: "black", border: "1px solid black", borderRadius: "2px" } : { color: "gray", border: "1px solid black", borderRadius: "2px" }}
                        width="20%"
                        required
                        type="text"
                        maxLength="5"
                        minLength="5"
                        id="zipSearch"
                        name="zipSearch"
                        placeholder="ex: 11215"
                        value={zcSearch}
                        onChange={(e) => setZCSearch(e.target.value)}
                    // onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <SubmitButton style={{borderRadius:"2px"}} onClick={handleSearch} />
                    <button style={{ borderRadius:"2px", marginLeft:"25px", fontFamily: "monospace" }} onClick={clearSearch}>Clear Search</button>
                </div>
            </form>
        </div>
    );
}

export default Search;