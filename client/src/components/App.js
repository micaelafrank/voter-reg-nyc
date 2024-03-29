import React, { useEffect, useState } from 'react'
// import RegistrationForm from './RegistrationForm'
import VoterPage from './VoterPage'
// import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import WithNav from './WithNav'
import CandidatesList from './CandidatesList';
import NewForm from './NewForm'
// import ModalSignIn from './ModalSignIn'
import About from './About'; 
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
  const [parties, setParties] = useState({});
  const [users, setUsers] = useState([])
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
  console.log("voters: ", voters)

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(users => { setUsers(users) })
  }, [])
  console.log("users: ", users)

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
    setVoters([...voters], newVoter);
    console.log("new voters: ", voters)
  }

  const current = new Date();
  const dayDate = ('0' + current.getDate()).slice(-2);
  const monthDate = ('0' + current.getMonth() + 1).slice(-2);
  const yearDate = `${current.getFullYear()}`
  const date = `${dayDate}/${monthDate}/${yearDate}`



  function deleteVoterRecord(user_id){
    console.log("I am code from the App component")
    const newVotersList = voters.filter((voter) => voter.user_id !== user_id);
    setVoters(newVotersList);
  }

  return (
    <div>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home setUser={setUser} user={user} />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<WithNav setUser={setUser} user={user} />}>
          <Route className="hidden" path={`${process.env.PUBLIC_URL}/home`} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/login`} element={<LogIn setUser={setUser} user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/voters`} element={<VoterPage deleteVoterRecord={deleteVoterRecord} date={date} /> } />
          <Route path={`${process.env.PUBLIC_URL}/signup`} element={<UserSignUp user={user} setUser={setUser} />} />
          <Route path={`${process.env.PUBLIC_URL}/candidates`} element={<CandidatesList parties={parties} setParties={setParties} />} />
          {/* <Route path="/register" element={<RegistrationForm addNewVoter={addNewVoter} />} /> */}
          <Route path={`${process.env.PUBLIC_URL}/myvote/${user.firstname}${user.lastname}`} element={<SearchVoterList parties={parties} setParties={setParties} deleteVoterRecord={deleteVoterRecord} user={user} setUser={setUser} voters={voters} setVoters={setVoters} />} />
          {/* showVoterInfo={showVoterInfo} setShowVoterInfo={setShowVoterInfo} voters={voters} setVoters={setVoters}  */}
          <Route path={`${process.env.PUBLIC_URL}/register`} element={<NewForm setUser={setUser} user={user} voters={voters} setVoters={setVoters} addNewVoter={addNewVoter} />} />
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