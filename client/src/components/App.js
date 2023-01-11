import React, { useEffect, useState } from 'react'
// import RegistrationForm from './RegistrationForm'
import VoterPage from './VoterPage'
// import { Switch, Route } from 'react-router-dom'
// import CandidateList from './CandidateList'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import WithNav from './WithNav'
import NewForm from './NewForm'
// import ModalSignIn from './ModalSignIn'
// import EditVoterCard from './EditVoterCard'
import SearchedVoter from './SearchedVoter';
import SearchVoterList from './SearchVoterList';
import EditVoterInfo from './EditVoterInfo';
import ModalSignIn from './ModalSignIn';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import UserSignUp from './UserSignUp';
import VoterList2 from './VoterList2';

function App() {
  const [voters, setVoters] = useState({});
  const [user, setUser] = useState({});
  const [parties, setParties] = useState([]);
  const [change, setChange] = useState(false);
  const [showVoterInfo, setShowVoterInfo] = useState(false);
  // const [candidates, setCandidates] = useState([])
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetch("/voters")
      .then(res => res.json())
      .then(voters => {setVoters(voters)} )
  }, [])
  console.log(voters)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, [])
  console.log(user);

  useEffect(() => {
    fetch("/parties")
      .then(res => res.json())
      .then(parties => setParties(parties))
  }, [])
  console.log(parties)

  console.log(user)
  // useEffect(() => {
  //   fetch("http://localhost:9292/candidates")
  //   .then(res => res.json())
  //   .then(candidates=> setCandidates(candidates))
  // }, [])
  // console.log(candidates)

  function addNewVoter(newVoter) {
    setVoters(...voters, newVoter);
  }

  const current = new Date();
  const dayDate = ('0' + current.getDate()).slice(-2);
  const monthDate = ('0' + current.getMonth() + 1).slice(-2);
  const yearDate = `${current.getFullYear()}`
  const date = `${dayDate}/${monthDate}/${yearDate}`



  // function deleteVoter(id){
  //   const updatedList = voters.filter((voter) => voter.id !== id);
  //   setVoters(updatedList);
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route element={<WithNav user={user} />}>
          <Route className="hidden" path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn setUser={setUser} user={user} />} />
          {/* <Route path="/voters" element={<VoterList voters={voters} setVoters={setVoters} change={change} setChange={setChange} />} /> */}
          <Route path="/voters" element={<VoterPage date={date} /> } />
          <Route path="/signup" element={<UserSignUp user={user} setUser={setUser} />} />
          {/* <Route path="/candidates" element={<CandidateList />} /> */}
          {/* <Route path="/register" element={<RegistrationForm addNewVoter={addNewVoter} />} /> */}
          <Route path={`myvote/${user.firstname}${user.lastname}`} element={<SearchVoterList user={user} setUser={setUser} voters={voters} setVoters={setVoters} />} />
          {/* showVoterInfo={showVoterInfo} setShowVoterInfo={setShowVoterInfo} voters={voters} setVoters={setVoters}  */}
          <Route path="/register" element={<NewForm user={user} voters={voters} setVoters={setVoters} addNewVoter={addNewVoter} />} />
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