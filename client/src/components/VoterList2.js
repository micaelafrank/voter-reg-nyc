import React, { useState, useEffect } from "react";
import SearchVoterList from "./SearchVoterList";


function VoterList2({ user, setUser, canEdit, setCanEdit, handleModal, change, setChange, voters, setVoters }) {

    return (
        <div style={{ justifyContent: "center" }}>
            <SearchVoterList 
                key={user.voter.id}
                id={user.voter.id}
                voters={voters}
                voter={user.voter.voter}
                lastName={user.voter.last}
                firstName={user.voter.first}
                address1={user.voter.address1}
                address2={user.voter.address2}
                isActive={user.voter.isActive}
                setVoters={setVoters}
                age={user.voter.age}
                party={user.voter.party}
                password={user.voter.password}
                postalCode={user.voter.postalCode}
            />
        </div>
    );
}


export default VoterList2;