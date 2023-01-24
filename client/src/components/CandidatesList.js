import React, { useState, useEffect } from "react";
import Candidate from "./Candidate";
import CandidatePrim from "./CandidatePrim";


function CandidatesList({ parties, setParties }) {
    const [candidates, setCandidates] = useState([])
    const [candidatesSenPrim, setCandidatesSenPrim] = useState([])
    const [govCandidatesDem, setGovCandidatesDem] = useState([])
    const [govCandidatesRepub, setGovCandidatesRepub] = useState([])


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
        fetch("/candidates/GovPrimaryDem")
            .then(res => res.json())
            .then(govCandidatesDem => { setGovCandidatesDem(govCandidatesDem) })
    }, [])
    console.log(govCandidatesDem)

    useEffect(() => {
        fetch("/candidates/GovPrimaryRepub")
            .then(res => res.json())
            .then(govCandidatesRepub => { setGovCandidatesRepub(govCandidatesRepub) })
    }, [])
    console.log(govCandidatesRepub)


    const govCandidatesPrimaryDemsList = govCandidatesDem.map((govCanDem) =>(
        <CandidatePrim
            firstName={govCanDem.firstName}
            lastName={govCanDem.lastName}
            headshot={govCanDem.headshot}
            position={govCanDem.position}
            race={govCanDem.raceNameYear}
            party={govCanDem.voting_party}
        />
    )) 

    const govCandidatesPrimaryRepubList = govCandidatesRepub.map((govCanRepub) => (
        <CandidatePrim
            firstName={govCanRepub.firstName}
            lastName={govCanRepub.lastName}
            headshot={govCanRepub.headshot}
            position={govCanRepub.position}
            race={govCanRepub.raceNameYear}
            party={govCanRepub.voting_party}
        />
    )) 

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
            {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", rowGap:"10px"}}>
                {listOfCandidates}
            </div> */}
            <div style={{ marginTop: "50px" }}>
                <h1 style={{ textAlign: "center", fontSize:"30px", fontFamily: "monospace", marginBottom: "40px", paddingBottom: "0" }}>MIDTERM ELECTION 2022</h1>
                <h1 style={{textAlign:"center", fontFamily:"monospace", marginBottom:"50px", paddingBottom:"0"}}>UNITED STATES SENATOR</h1>
                <div style={{ display: "flex", alignItems:"center", justifyContent:"center" ,flexDirection: "row", marginTop:"0", marginBottom:"0", paddingTop:"0" }}>
                    {senateCandidates}
                </div>
            </div>
            <div style={{ marginTop: "50px" }}>
                <h1 style={{ textAlign: "center", fontFamily: "monospace", marginTop:"0", marginBottom: "0", paddingBottom: "0" }}>GOVERNOR</h1>
                <p style={{ textAlign: "center", fontFamily: "monospace", fontSize: "18px", marginTop:"10px", marginBottom: "0", paddingBottom: "0" }}>DEMOCRATIC PRIMARY</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", paddingTop: "0" }}>
                {govCandidatesPrimaryDemsList}
                </div>
            </div>
            <div style={{marginTop:"50px"}}>
                <h1 style={{ textAlign: "center", fontFamily: "monospace", marginTop:"0", marginBottom: "0", paddingBottom: "0" }}>GOVERNOR</h1>
                <p style={{ textAlign: "center", fontSize:"18px", marginTop:"10px", fontFamily: "monospace", marginBottom: "0", paddingBottom: "0" }}>REPUBLICAN PRIMARY</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", paddingTop: "0" }}>
                {govCandidatesPrimaryRepubList}
                </div>
            </div>
        </div>
    )
}
export default CandidatesList;
