import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function LogIn({ setUser, user }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [revealText, setRevealText] = useState(false);


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
        // console.log(formData)
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, password}),
        }).then(res => {
            if (res.ok) {
                res.json().then((user) => setUser(user))
                console.log(user)
                navigate('/register');
            }
            else {
                res.json().then(errors => {
                    console.error(errors)
                })
            }
        })
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }} className="modal-title1">Log In</h2>
            <br></br>
            <Form id="registerForm" onSubmit={handleSubmit}>
                <h5 className="modal-title2">You must create a Big Apple Ballots accounts and log in in order to register to vote and/or view your voter information.</h5>
                {errorMessages ? errorMessages.map((errorMessage) => {
                    (<p className="errorMessage" style={{ color: "red" }}>
                        <div className="errorMessageContainer" style={{ display: "flex", fontFamily: "helvetica", letterSpacing: "2", fontSize: "16px", flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
                            <FaExclamationTriangle className="fa-solid fa-triangle-exclamation fa-beat-fade" style={{ marginRight: "10px" }} />
                            {errorMessage}
                        </div>
                    </p>)}) : null}
                <Row>
                    {/* <Col> */}
                    <div>
                    {/* style={{ display: "flex", flexDirection: "row", alignItems: "center" }}> */}
                        <label style={{ paddingRight: "10px"}}>CREATE A USERNAME:</label>
                        <Form.Control
                        style={inputColor ? { color: "black" } : { color: "gray" }}
                        required className="inputText" type="text" id="username" name="username" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </Row>
                    {/* </Col> */}
                <Row>
                    <div>
                    {/* style={{ display: "flex", flexDirection: "row", alignItems: "center" }}> */}
                        <label style={{ paddingRight: "10px", paddingLeft: "16px", marginLeft: "20px" }}>CREATE A PASSWORD:</label>
                        <Form.Control
                            style={inputColor ? { color: "black" } : { color: "gray" }}
                            required className="inputText" placeholder="Minimum 8 characters" type={revealText ? "text" : "passwordInput"} id="password" name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {revealText ? (<i className="bi bi-eye-slash" onClick={handleTextReveal} id="togglePasswordInput"></i>) : (<i className="bi bi-eye" onClick={handleTextReveal} id="togglePasswordInput"></i>)}
                        {/* <PassOpenEye id="togglePassword" onClick={handleTextReveal} /> */}
                    </div>
                    {/* </Col> */}
                </Row>
            </Form>
        </>
        //     {user.username ? null :
        //         (<div id="loginCard" style={{ width: "23rem", padding: "30px", border: "1px solid black", borderRadius: "6px", margin: "auto" }}>
        //             <h2 style={{ textAlign: "center" }}>Log In</h2>
        //             <br></br>
        //             <h5>You must create a Big Apple Ballots accounts and log in in order to register to vote and/or view your voter information.</h5>
        //             <form onSubmit={handleSubmit} style={{ paddingTop: ".5rem" }}>
        //                 <div className="mb-3">
        //                     <label className="form-label">Username:</label>
        //                     <input name="username" value={formData.username} onChange={handleChange} type="text" className="form-control" id="signin-username" aria-describedby="emailHelp" />
        //                 </div>
        //                 <div className="mb-3">
        //                     <label className="form-label">Create a password:</label>
        //                     <input name="password" value={formData.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
        //                 </div>
        //                 <button style={{ marginBottom: "20px", marginTop: "20px" }} type="submit" className="btn btn-primary">Submit</button>
        //             </form>
        //             <nav>
        //                 <button style={{ color: "black" }} className="navItem" onClick={() => navigate("/signup")} >New to Plotluck? Become a member!</button>
        //                 {/* <NavLink exact to="/signup">New to Plotluck? Become a member!</NavLink> */}
        //             </nav>
        //         </div>)
        //     }
        // </>
    )
}

export default LogIn