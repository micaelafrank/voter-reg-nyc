import React, { useState, useEffect } from "react";
import Candidate from "./Candidate";

function CandidatesList({ parties, setParties }) {
    const [candidates, setCandidates] = useState([])
    const [candidatesSenPrim, setCandidatesSenPrim] = useState([])
    const [govCandidates, setGovCandidates] = useState([])

    useEffect(() => {
        fetch("/parties")
            .then(res => res.json())
            .then(parties => { setParties(parties) })
    }, [])
    console.log(parties)

    useEffect(() => {
        fetch("/candidates")
            .then(res => res.json())
            .then(candidates => { setCandidates(candidates) })
    }, [])
    console.log(candidates)

    useEffect(() => {
        fetch("/candidates/SenatorPrimary")
            .then(res => res.json())
            .then(candidatesSenPrim => { setCandidatesSenPrim(candidatesSenPrim) })
    }, [])
    console.log(candidatesSenPrim)

    useEffect(() => {
        fetch("/candidates/GovMidterm")
            .then(res => res.json())
            .then(govCandidates => { setGovCandidates(govCandidates) })
    }, [])
    console.log(govCandidates)

    // const listCanLG = candidatesLG.map((candidateLG) =>(
    //     <Candidate
    //         firstName={candidateLG.firstName}
    //         lastName={candidateLG.lastName}
    //         headshot={candidateLG.headshot}
    //         position={candidateLG.position}
    //         race={candidateLG.raceNameYear}
    //         party={candidateLG.voting_party}
    //     />
    // )) 

    const senateCandidates = candidatesSenPrim.map((senCans) => (
        <Candidate
            firstName={senCans.firstName}
            lastName={senCans.lastName}
            headshot={senCans.headshot}
            position={senCans.position}
            race={senCans.raceNameYear}
            party={senCans.voting_party}
        />
    ))

    const listOfCandidates = candidates.map((candidate) => (
        <Candidate
        firstName={candidate.firstName}
        lastName={candidate.lastName}
        headshot={candidate.headshot}
        position={candidate.position}
        race={candidate.raceNameYear}
        party={candidate.voting_party}
        />
    ))

    return(
        <div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", rowGap:"10px"}}>
                {listOfCandidates}
            </div>
            <h1 style={{textAlign:"center", fontFamily:"monospace", marginBottom:"0", paddingBottom:"0"}}>SENATOR</h1>
            <div style={{ display: "flex", alignItems:"center", justifyContent:"center" ,flexDirection: "row", marginTop:"0", paddingTop:"0" }}>
                {senateCandidates}
            </div>
        </div>
    )
}
export default CandidatesList;
