import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from "react-icons/fa";


function UserSignUp({ setUser, user }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [revealText, setRevealText] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [inputColor, setInputColor] = useState(false);

    const togglePasswordInput = document.querySelector("#togglePasswordInput");
    const passwordInput = document.querySelector("#passwordInput");


    function handleTextReveal() {
        setRevealText((revealText) => !revealText)
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // toggle the icon
        this.classList.toggle("bi-eye");
    }



    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target)
        setErrorMessages([]);
        // console.log(formData)
        fetch('/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        }).then(res => {
            if (res.ok) {
                res.json().then((user) => setUser(user))
                console.log(user)
                navigate('/register');
            }
            else {
                res.json().then(err => setErrorMessages(err.errorMessages)); //
                }
            })
    }

    return (
        // <>
        // <div>
        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <div style={{ alignContent: "center", justifyContent: "center" }}>

            {/* <h4 className="modal-title3" style={{ justifyContent:"center", color:"black", textAlign:"center", alignItems: "center"}}>Sign Up</h4> */}
            {/* <br></br> */}
            <Form id="signUpForm" onSubmit={handleSubmit}>
                <h3 id="loginHeader" style={{ textAlign: "center", fontFamily: "KGThankYouStamp", fontSize: "65px" }}>Log In</h3>
                {/* <h4 className="modal-title3" style={{ justifyContent: "center", color: "black", textAlign: "center", alignItems: "center" }}>Sign Up</h4> */}
                <h5 className="modal-title2" style={{marginLeft:"340px", marginRight:"340px"}}>You must create a Big Apple Ballots accounts and log in in order to register to vote and/or view your voter information.</h5>
                {errorMessages ? errorMessages.map((errorMessage) => {
                    (<p className="errorMessage" style={{ color: "red" }}>
                        <div className="errorMessageContainer" style={{ display: "flex", fontFamily: "helvetica", letterSpacing: "2", fontSize: "16px", flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
                            <FaExclamationTriangle className="fa-solid fa-triangle-exclamation fa-beat-fade" style={{ marginRight: "10px" }} />
                            {errorMessage}
                        </div>
                    </p>)
                }) : null}
                <Row>
                    {/* <Col> */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        {/* style={{ display: "flex", flexDirection: "row", alignItems: "center" }}> */}
                        <label style={{paddingRight:"10px"}}>CREATE A USERNAME:</label>
                        <Form.Control
                            style={inputColor ? { color: "black", marginLeft: "20px" } : { color: "gray", marginLeft: "20px" }}
                            required className="inputText" type="text" id="username" name="username" value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </Row>
                {/* </Col> */}
                <Row>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <label style={{ paddingRight: "10px" }}>CREATE A PASSWORD:</label>
                    {/* <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <label>CREATE A PASSWORD:</label> */}
                        <Form.Control
                            style={inputColor ? { color: "black", marginLeft: "20px" } : { color: "gray", marginLeft: "20px" }}
                            required className="inputText" placeholder="Minimum 8 characters" type={revealText ? "text" : "passwordInput"} id="password" name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {revealText ? (<i className="bi bi-eye-slash" onClick={handleTextReveal} id="togglePasswordInput"></i>) : (<i className="bi bi-eye" onClick={handleTextReveal} id="togglePasswordInput"></i>)}
                        {/* <PassOpenEye id="togglePassword" onClick={handleTextReveal} /> */}
                    </div>
                    {/* </Col> */}
                </Row>
            </Form>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <p style={{ marginTop: "50px", marginBottom: "50px", fontFamily: "monospace", fontSize: "16px", fontWeight: "bold", textShadow: "0.5px 0.5px rgb(81, 114, 210)" }}>ALREADY HAVE AN ACCOUNT? <a href="/login">LOG IN!</a></p>
        </div>
    </div>
    )
}

export default UserSignUp