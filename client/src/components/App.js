import React, { useEffect, useState } from 'react'
// import RegistrationForm from './RegistrationForm'
import VoterPage from './VoterPage'
import VoterList from './VoterList';
// import { Switch, Route } from 'react-router-dom'
// import CandidateList from './CandidateList'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import WithNav from './WithNav'
import NewForm from './NewForm'
// import ModalSignIn from './ModalSignIn'
// import EditVoterCard from './EditVoterCard'
import SearchedVoter from './SearchedVoter';
import EditVoterInfo from './EditVoterInfo';
import ModalSignIn from './ModalSignIn';

function App() {
  const [voters, setVoters] = useState({})
  const [parties, setParties] = useState([]);
  const [change, setChange] = useState(false);
  // const [candidates, setCandidates] = useState([])
  // const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("/voters")
      .then(res => res.json())
      .then(voters => {setVoters(voters)} )
  }, [])
  console.log(voters)


  useEffect(() => {
    fetch("/parties")
      .then(res => res.json())
      .then(parties => setParties(parties))
  }, [])
  console.log(parties)

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  // fetch("https://menoushbackend.netlify.app/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/candidates")
  //   .then(res => res.json())
  //   .then(candidates=> setCandidates(candidates))
  // }, [])
  // console.log(candidates)

  function addNewVoter(newVoter) {
    setVoters(...voters, newVoter);
  }


  // function deleteVoter(id){
  //   const updatedList = voters.filter((voter) => voter.id !== id);
  //   setVoters(updatedList);
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<WithNav />}>
          <Route className="hidden" path="/home" element={<Home />} />
          {/* <Route path="/voters" element={<VoterList voters={voters} setVoters={setVoters} change={change} setChange={setChange} />} /> */}
          <Route path="voters" element={<VoterPage /> } />
          {/* <Route path="/candidates" element={<CandidateList />} /> */}
          {/* <Route path="/register" element={<RegistrationForm addNewVoter={addNewVoter} />} /> */}
          <Route path="/voters/:id" element={<SearchedVoter voters={voters} setVoters={setVoters} />} />
          <Route path="/register" element={<NewForm voters={voters} setVoters={setVoters} addNewVoter={addNewVoter} />} />
          {/* <Route path="/modalsignin" element={<ModalSignIn />} /> */}
          {/* <Route path="*">
            <React.Fragment>404 not found</React.Fragment>
          </Route> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App;