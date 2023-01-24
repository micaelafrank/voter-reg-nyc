import React, { useState, useEffect } from "react";
import Candidate from "./Candidate";
import CandidatePrim from "./CandidatePrim";


function CandidatesList({ parties, setParties }) {
    const [candidates, setCandidates] = useState([])
    const [candidatesSenPrim, setCandidatesSenPrim] = useState([])
    const [govCandidatesDem, setGovCandidatesDem] = useState([])
    const [govCandidatesRepub, setGovCandidatesRepub] = useState([])
    const [attGen, setAttGen] = useState([])
    const [govMidterms, setGovMidterms] = useState([])
    const [LGprim, setLGPrim] = useState([])
    const [comptrollerCans, setComptrollerCans] = useState([])
    const [winners, setWinners] = useState([])

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
        fetch("/candidates/winners")
            .then(res => res.json())
            .then(winners => { setWinners(winners) })
    }, [])
    console.log(winners)

    useEffect(() => {
        fetch("/candidates/AGMidterm")
            .then(res => res.json())
            .then(attGen => { setAttGen(attGen) })
    }, [])
    console.log(attGen)

    useEffect(() => {
        fetch("/candidates/LGPrimary")
            .then(res => res.json())
            .then(LGprim => { setLGPrim(LGprim) })
    }, [])
    console.log(LGprim)

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

    useEffect(() => {
        fetch("/candidates/comptroller")
            .then(res => res.json())
            .then(comptrollerCans => { setComptrollerCans(comptrollerCans) })
    }, [])
    console.log(comptrollerCans)

    useEffect(() => {
        fetch("/candidates/GovMidterm")
            .then(res => res.json())
            .then(govMidterms => { setGovMidterms(govMidterms) })
    }, [])
    console.log(govMidterms)

    const comptrollerList = comptrollerCans.map((comptrollerCan) => (
        <Candidate
            firstName={comptrollerCan.firstName}
            lastName={comptrollerCan.lastName}
            headshot={comptrollerCan.headshot}
            position={comptrollerCan.position}
            race={comptrollerCan.raceNameYear}
            party={comptrollerCan.voting_party}
            isWinner={comptrollerCan.isWinner}
            party_id={comptrollerCan.party_id}
        />
    ))

    const govMidtermsList = govMidterms.map((govMidCan) => (
        <Candidate
            firstName={govMidCan.firstName}
            lastName={govMidCan.lastName}
            headshot={govMidCan.headshot}
            position={govMidCan.position}
            race={govMidCan.raceNameYear}
            party={govMidCan.voting_party}
            isWinner={govMidCan.isWinner}
            party_id={govMidCan.party_id}
        />
    ))

    const attGenList = attGen.map((attGenCan) => (
        <Candidate
            firstName={attGenCan.firstName}
            lastName={attGenCan.lastName}
            headshot={attGenCan.headshot}
            position={attGenCan.position}
            race={attGenCan.raceNameYear}
            party={attGenCan.voting_party}
            isWinner={attGenCan.isWinner}
            party_id={attGenCan.party_id}
        />
    ))

    const LieutGovList = LGprim.map((LGcan) => (
        <Candidate
            firstName={LGcan.firstName}
            lastName={LGcan.lastName}
            headshot={LGcan.headshot}
            position={LGcan.position}
            race={LGcan.raceNameYear}
            party={LGcan.voting_party}
            isWinner={LGcan.isWinner}
            party_id={LGcan.party_id}
        />
    )) 

    const govCandidatesPrimaryDemsList = govCandidatesDem.map((govCanDem) =>(
        <CandidatePrim
            firstName={govCanDem.firstName}
            lastName={govCanDem.lastName}
            headshot={govCanDem.headshot}
            position={govCanDem.position}
            race={govCanDem.raceNameYear}
            party={govCanDem.voting_party}
            isWinner={govCanDem.isWinner}
            party_id={govCanDem.party_id}
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
            isWinner={govCanRepub.isWinner}
            party_id={govCanRepub.party_id}
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
            isWinner={senCans.isWinner}
            party_id={senCans.party_id}
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
        isWinner={candidate.isWinner}
        party_id={candidate.party_id}
        />
    ))

    return(
        <div style={{marginBottom:"50px"}}>
            {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", rowGap:"10px"}}>
                {listOfCandidates}
            </div> */}
            <h2 className="voterListHeader" style={{ fontSize: "40px", fontFamily: "monospace", alignItems: "center", paddingTop: "20px", textAlign: "center" }}>ON THE BALLOT</h2>
            <p style={{ textAlign: "center", fontSize: "18px", letterSpacing:"1.2px", lineHeight:"1.3", paddingBottom: "13px", marginLeft:"15%", marginRight:"15%", fontFamily: "monospace" }}>THE NEW YORK GENERAL ELECTION TOOK PLACE ON NOVEMBER 8, 2022. YOU CAN VIEW ALL NEW YORK STATE CONGRESS ELECTION RESULTS BY DISTRICT <a href="https://ballotpedia.org/United_States_House_of_Representatives_elections_in_New_York,_2022#Candidates">HERE</a>. RESULTS OF STATEWIDE RACES ARE BELOW.</p>
            <h1 className="formHeading4" style={{ textAlign: "center", fontSize: "44px", fontFamily: "KGThankYouStamp", marginTop:"80px", marginBottom: "30px", paddingBottom: "0" }}>MIDTERM ELECTION RESULTS 2022</h1>
            {/* <h1 style={{ textAlign: "center", fontSize: "30px", fontFamily: "monospace", marginBottom: "40px", paddingBottom: "0" }}>MIDTERM ELECTION 2022</h1> */}
            <div style={{ marginTop: "50px" }}>
                <h1 style={{ fontSize:"30px", textAlign: "center", fontFamily: "monospace", marginBottom: "20px", paddingBottom: "0" }}>GOVERNOR</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", marginBottom: "0", paddingTop: "0" }}>
                    {govMidtermsList}
                </div>
            </div>
            <div style={{ marginTop: "80px" }}>
                <h1 style={{ fontSize: "30px", textAlign:"center", fontFamily:"monospace", marginBottom:"20px", paddingBottom:"0"}}>UNITED STATES SENATOR</h1>
                <div style={{ display: "flex", alignItems:"center", justifyContent:"center" ,flexDirection: "row", marginTop:"0", marginBottom:"0", paddingTop:"0" }}>
                    {senateCandidates}
                </div>
            </div>
            <div style={{ marginTop: "80px" }}>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontFamily: "monospace", marginBottom: "20px", paddingBottom: "0" }}>ATTORNEY GENERAL</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", marginBottom: "0", paddingTop: "0" }}>
                    {attGenList}
                </div>
            </div>
            <div style={{ marginTop: "80px" }}>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontFamily: "monospace", marginBottom: "20px", paddingBottom: "0" }}>STATE COMPTROLLER</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", marginBottom: "0", paddingTop: "0" }}>
                    {comptrollerList}
                </div>
            </div>
            <h1 className="formHeading4" style={{ textAlign: "center", fontSize: "44px", fontFamily: "KGThankYouStamp", marginTop:"110px", marginBottom: "40px", paddingBottom: "0" }}>PRIMARY ELECTION RESULTS 2022</h1>
            <div style={{ marginTop: "60px" }}>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontFamily: "monospace", marginTop:"0", marginBottom: "0", paddingBottom: "0" }}>GOVERNOR</h1>
                <p style={{ textAlign: "center", fontFamily: "monospace", fontSize: "18px", marginTop:"10px", marginBottom: "0", paddingBottom: "0" }}>DEMOCRATIC PRIMARY</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", paddingTop: "0" }}>
                {govCandidatesPrimaryDemsList}
                </div>
            </div>
            <div style={{marginTop:"80px"}}>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontFamily: "monospace", marginTop:"0", marginBottom: "0", paddingBottom: "0" }}>GOVERNOR</h1>
                <p style={{ textAlign: "center", fontSize:"18px", marginTop:"10px", fontFamily: "monospace", marginBottom: "0", paddingBottom: "0" }}>REPUBLICAN PRIMARY</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", paddingTop: "0" }}>
                {govCandidatesPrimaryRepubList}
                </div>
            </div>
            <div style={{ marginTop: "80px" }}>
                <h1 style={{ fontSize: "30px", textAlign: "center", fontFamily: "monospace", marginTop: "0", marginBottom: "35px", paddingBottom: "0" }}>LIEUTENANT GOVERNOR</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", marginTop: "0", paddingTop: "0" }}>
                    {LieutGovList}
                </div>
            </div>
        </div>
    )
}
export default CandidatesList;
