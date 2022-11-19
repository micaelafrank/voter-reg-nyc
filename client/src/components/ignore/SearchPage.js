// import React, { useState } from "react";
// import SearchedVoter from "./SearchedVoter";


// function SearchPage() {
//     // const [formData, setFormData] = useState({ 
//     //     firstNameSearch: "", 
//     //     lastNameSearch: "", 
//     //     zipSearch: "" 
//     // });
//     const [fnSearch, setFNSearch] = useState("");
//     const [lnSearch, setLNSearch] = useState("");
//     const [zcSearch, setZCSearch] = useState("");
//     const [isFiltering, setIsFiltering] = useState(false);
//     const [errors, setErrors] = useState([]);
//     const [voters, setVoters] = useState([]);
//     // const [q, setQ] = useState("");
//     let firstName; 
//     let lastName;
//     let postalCode;

//     useEffect(() => {
//         fetch("/voters")
//             .then(res => res.json())
//             .then(voters => setVoters(voters))
//     }, [])
//     console.log(voters)

//     const voterInfo = voters.map((voter) => {
//         firstName = voter.first;
//         lastName = voter.last;
//         postalCode = voter.postalCode;
//     })

//     function renderSearch(fnSearch, lnSearch, zcSearch){
//         const filteredSearch = voterInfo.filter((voter) => {
//             if(firstName === fnSearch && lastName === lnSearch && postalCode === zcSearch){
//                 return voter;
//         }})
//         return filteredSearch;
//     }
    
//     console.log(voterInfo)


//     const formData = new FormData();
//     formData.append('fnSearch', fnSearch);
//     formData.append('lnSearch', lnSearch);
//     formData.append('zcSearch', zcSearch);
//     console.log(formData)

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formData)
//         setIsFiltering(true);
//         setErrors([]);
//         fetch("voters/search")
//         .then(res => res.json())
//         .then(data => renderSearch(data));
//     }

//     const searchedNames = voters.filter((voter) => {
//             return searchParam.some((searchedVoter) => {
//                 return (
//                     voter[searchedVoter]
//                         .toString()
//                         .toLowerCase()
//                         .indexOf(q.toLowerCase()) > -1
//                 );
//             })
//         })


//     function clearSearch() {
//         setFNSearch("");
//         setLNSearch("");
//         setZCSearch("");
//         handleSearchClear();
//     }


//     function SubmitButton() {
//         if (fnSearch && lnSearch && (zcSearch.length === 5)) {
//             return <button type="submit">Submit</button>
//         } else {
//             return <button type="submit" disabled>Submit</button>
//         };
//     };

//     return (
//         <>
//         <div className="searchBarContainer">
//             <form id="searchForm" style={{ fontFamily: "monospace" }} className="searchbarForm" onSubmit={handleSubmit}>
//                 <h4 style={{ lineHeight: "0", fontSize: "30px", textAlign: "center" }}>CHECK YOUR VOTER STATUS</h4>
//                 <p style={{ fontSize: "15px", lineHeight: "1.2" }}><span style={{ fontSize: "18px", fontWeight: "bold" }}>Instructions:</span> Fill out the following information to view a voter's record. All fields are required.</p>
//                 <div id="row1" style={{ display: "flex", fontFamily: "monospace", flexDirection: "row" }}>
//                     <input
//                         width="20%"
//                         required
//                         type="search"
//                         id="firstNameSearch"
//                         name="firstNameSearch"
//                         placeholder="First name"
//                         value={fnSearch}
//                         onChange={(e) => setFNSearch(e.target.value)}
//                     // onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <input
//                         required
//                         width="20%"
//                         type="search"
//                         id="lastNameSearch"
//                         name="lastNameSearch"
//                         placeholder="Last name"
//                         value={lnSearch}
//                         onChange={(e) => setLNSearch(e.target.value)}
//                     // onChange={(e) => setLastName(e.target.value)}
//                     />
//                     {/* </div>
//         <div id="row2" style={{ display: "flex", flexDirection: "row" }}> */}
//                     <input
//                         width="20%"
//                         style={{ color: "gray" }}
//                         required
//                         type="date"
//                         name="birthdaySearch"
//                         id="birthdaySearch"
//                         placeholder="Birthday (MM/DD/YYYY)"
//                     />
//                     <input
//                         width="20%"
//                         required
//                         type="text"
//                         maxLength="5"
//                         minLength="5"
//                         id="zipSearch"
//                         name="zipSearch"
//                         placeholder="Postal Code"
//                         value={zcSearch}
//                         onChange={(e) => setZCSearch(e.target.value)}
//                     // onChange={(e) => setPostalCode(e.target.value)}
//                     />
//                     <SubmitButton type="submit" />
//                     <button style={{ fontFamily: "monospace" }} onClick={clearSearch}>Clear Search</button>
//                 </div>
//             </form>
//         </div>
//         <div>
//             <h1 className="formHeading4" style={{ paddingTop: "50px", paddingBottom: "20px", fontFamily: "KGThankYouStamp", textAlign: "center", fontSize: "60px" }}>REGISTERED VOTERS</h1>
//             <section className="searchGridContainer">
//                 {filteredSearch.map((searchedName) => (
//                     <SearchedVoter 
//                     key={searchedName.key}
//                     id={searchedName.id}
//                     firstName={searchedName.firstName}
//                     lastName={searchedName.lastName}
//                     address1={searchedName.address1}
//                     address2={searchedName.address2}
//                     postalCode={searchedName.postalCode}
//                     age={searchedName.age}
//                     party={searchedName.party}
//                     />
//                 ))}
//             </section>
//         </div>
//     </>

//     );
// }

// export default SearchPage;