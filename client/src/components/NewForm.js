import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function NewForm({ user, addNewVoter, voters, setVoters }) {
    const [revealText, setRevealText] = useState(false);
    const [party, setParty] = useState("default")
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [age, setAge] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [postalCode, setPostalCode] = useState("");
    // const [selectedParty, setSelectedParty] = useState("Choose One");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([])
    // const [filter, setFilter] = useState("Choose one");
    const [inputColor, setInputColor] = useState(false);
    const navigate = useNavigate();
    // const [formData, setFormData] = useState(
    //     {
    //         first: "",
    //         last: "",
    //         address1: "",
    //         address2: "",
    //         state: "",
    //         postalCode: "",
    //         age: 18,
    //         party: "",
    //         password: "",
    //         isActive: true,
    //     }
    // )
    // const history = useHistory();
    function handleColor(){
        setInputColor(true);
    }

    function handleParty(e) {
        setInputColor(true);
        setParty(e.target.value);
    }

    // function handleParty(e){
    //     setInputColor(true);
    //     setFilter(e.target.value);
    // }

    // function handleChange(e) {
    //     setInputColor(true);
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }


    function handleSubmit(e) {

        e.preventDefault();
        fetch("/voters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first: first,
                last: last,
                age: age,
                address1: address1,
                address2: address2,
                party_id: party.id,
                user_id: user.id,
                party: party,
                postalCode: postalCode,
            }),
        })
            .then(res => res.json())
            .then(addNewVoter);
        navigate(`/voters`);
    }
    //     .then(res => res.json())
    //     .then(newVoter => addNewVoter(newVoter))
    //     navigate("/voters")
    // }



    const togglePasswordInput = document.querySelector("#togglePasswordInput");
    const passwordInput = document.querySelector("#passwordInput");

    function handleTextReveal() {
        handleColor();
        setRevealText((revealText) => !revealText)
        const type = passwordInput.getAttribute("type") === "passwordInput" ? "text" : "passwordInput";
        passwordInput.setAttribute("type", type);

        // toggle the icon
        // this.classList.toggle("bi-eye");
    }

    return (
        <React.Fragment>
            {user.username ? null :
                <div style={{marginTop:"0", paddingTop:"0", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
                    <p style={{ fontSize: "20px", paddingBottom: "3px", fontWeight: "bold", color: "navy", textShadow: "1px 1px lightblue", fontFamily: "monospace" }}>TO REGISTER, YOU MUST HAVE AN ACCOUNT WITH BIG APPLE BALLOTS.</p>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <Button 
                        className='regFormLoginBtn'
                        // style={{ cursor:"pointer", fontFamily: "monospace", fontSize: "18px", fontWeight: "bold", padding: "10px 15px", backgroundColor: "white", border: "3px solid navy", color: "navy", marginRight:"10px" }}
                        onClick={() => navigate("/login")}
                        >
                            LOG IN
                        </Button>
                        <Button 
                        className='regFormLoginBtn'
                        // style={{ marginLeft:"10px", fontFamily: "monospace", fontSize: "18px", fontWeight: "bold", padding: "10px 15px", backgroundColor: "white", border: "3px solid navy", color: "navy" }}
                        onClick={() => navigate("/signup")}
                        >
                            SIGN UP
                        </Button>
                    </div>
                </div>
            }
            <div id="overviewContainer" style={{ marginLeft: "auto", marginRight: "auto", width: "65%", alignItems: "center", justifyContent: "center", border: "1px solid black", padding: "5px 20px 20px 20px", marginBottom:"70px" }}>
                <p id="overviewTitle" className="formHeading2">OVERVIEW</p>
                <div style={{ margin: "15px", alignItems: "center" }}>
                    <p style={{ fontSize: "17px", paddingBottom: "13px", fontWeight: "bold", fontFamily: "monospace" }}>TO REGISTER IN NEW YORK STATE YOU MUST:</p>
                    <ul style={{ listStyleType: "circle", fontFamily: "monospace" }}>
                        <li id="bullet1">Be a citizen of the United States & 18 years old.</li>
                        <li id="bullet2">Be a resident of this state and the county, city or village for at least 30 days before the election.</li>
                        <li id="bullet2">Not be in prison for a felony conviction.</li>
                    </ul>
                </div>
                <div style={{ margin: "15px 35px 15px 15px", alignItems: "center" }}>
                    <p style={{ fontSize: "17px", paddingBottom: "13px", paddingTop: "13px", fontWeight: "bold", fontFamily: "monospace" }}>IF YOU HAVE ALREADY REGISTERED TO VOTE, YOU ARE PERMANENTLY REGISTERED UNLESS:</p>
                    <ul style={{ listStyleType: "circle", fontFamily: "monospace" }}>
                        <li id="bullet1">You moved your residence outside the city or county in which you were registered.</li>
                        <li id="bullet2">You are an inactive voter who has not voted in any election, including two consecutive Federal Elections, and have not confirmed your address during that period.</li>
                    </ul>
                </div>
            </div>
            {user.username ? 
            <div id="form-container-new">
                <h1 className="formHeading4">REGISTER</h1>
                <Form id="registerForm" onSubmit={handleSubmit}>
                    <Row style={{ display: "flex", flexDirection: "row" }}>
                        <Col xs={7}>
                            <label style={{ paddingRight: "10px" }}>FIRST NAME:</label>
                            <Form.Control required
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="inputText" placeholder="First Name" name="first" value={first}
                                // onChange={handleChange}
                                onChange={(e) => {
                                    handleColor();
                                    setFirst(e.target.value)
                                }}
                            />
                        </Col>
                        <Col xs={7}>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>LAST NAME:</label>
                            <Form.Control required
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="inputText" placeholder="Last Name" name="last" value={last}
                                onChange={(e) => {
                                    handleColor();
                                    setLast(e.target.value)
                                }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Col>
                            <label style={{ paddingRight: "10px" }}>ADDRESS 1:</label>
                            <Form.Control id="add1"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                required className="inputText" placeholder="Street address" name="address1" value={address1}
                                onChange={(e) => {
                                    handleColor();
                                    setAddress1(e.target.value)
                                }}
                            />
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>ADDRESS 2:</label>
                            <Form.Control id="add2"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="inputText" placeholder="Apt/Floor" name="address2" value={address2}
                                onChange={(e) => {
                                    handleColor();
                                    setAddress2(e.target.value)
                                }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Col>
                            <label style={{ paddingRight: "10px" }}>POSTAL CODE:</label>
                            <Form.Control
                                style={inputColor ? { color: "black" } : { color: "gray" }} required
                                className="inputText" id="zip" placeholder="Postal Code" name="postalCode" value={postalCode}
                                onChange={(e) => {
                                    handleColor();
                                    setPostalCode(e.target.value)
                                }}
                            />
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>BIRTHDAY:</label>
                            <Form.Control
                                onChange={handleColor}
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                id="bday" type="date" className="inputText"
                                placeholder="MM/DD/YYYY" />
                        </Col>
                        <Col>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>AGE:</label>
                            <Form.Control id="age"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                required
                                className="inputText" placeholder="18" name="age" min="18" max="100" value={age}
                                onChange={(e) => {
                                    handleColor();
                                    setAge(e.target.value)
                                }}
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom:"20px", display: "flex", alignItems: "center"}}>
                        <Form.Group as={Col} id="formGridState" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Form.Label id="party-options-label" style={{ paddingRight: "10px" }}>CHOOSE A PARTY:</Form.Label>
                            <Form.Select
                                style={inputColor ? { color: "black", height: "40px", justifyContent: "center", alignItems: "center", fontSize: "14px", fontFamily: "monospace" } : { color: "gray", height: "40px", justifyContent: "center", alignItems: "center", fontSize: "14px", fontFamily: "monospace" }}
                                id="selectedParty"
                                required
                                name="party"
                                value={party}
                                label="Choose One"
                                defaultValue={'DEFAULT'}
                                onChange={handleParty}
                                // onChange={(e) => setParty(e.target.value)}
                            >
                                <option style={{color:"gray"}} value="DEFAULT">Choose One</option>
                                <option style={{ color: "black" }} value="democrat">Democratic Party</option>
                                <option style={{ color: "black" }} value="green">Green Party</option>
                                <option style={{ color: "black" }} value="independent">Independent Party</option>
                                <option style={{ color: "black" }} value="republican">Republican Party</option>
                                <option style={{ color: "black" }} value="working_families">Working Families Party</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    {/* <Row>
                        <Col>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <label style={{ paddingRight: "10px"}}>CREATE A USERNAME:</label>
                                <Form.Control
                                    style={inputColor ? { color: "black" } : { color: "gray" }}
                                    required className="inputText" type="text" id="username" name="username" value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <label style={{ paddingRight: "10px", paddingLeft: "16px", marginLeft: "20px" }}>CREATE A PASSWORD:</label>
                                <Form.Control
                                    style={inputColor ? { color: "black" } : { color: "gray" }}
                                    required className="inputText" placeholder="Minimum 8 characters" type={revealText ? "text" : "passwordInput"} id="password" name="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {revealText ? (<i className="bi bi-eye-slash" onClick={handleTextReveal} id="togglePasswordInput"></i>) : (<i className="bi bi-eye" onClick={handleTextReveal} id="togglePasswordInput"></i>)} */}
                                {/* <PassOpenEye id="togglePassword" onClick={handleTextReveal} /> */}
                            {/* </div>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", lineHeight: "1" }} required label="I agree that I am 18 years old or will be on the date of the election." />
                        </Col>
                    </Row>
                    <Row id="checkboxRow">
                        <Col sm={{ span: 10, offset: 2 }} >
                            <Form.Check style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", lineHeight: "1" }} id="formCheck2" required label="I certify that the above information is true and correct." />
                        </Col>
                    </Row>
                    <Button style={{ marginTop: "35px", marginLeft: "10px", fontFamily: "KGThankYouStamp", borderRadius:"2px" }} variant="primary" id="newVoterSubmit" type="submit">SUBMIT</Button>
                </Form>
            </div> : 
            null}
        </React.Fragment>
    );
}



export default NewForm;