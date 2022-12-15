import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
// import EditVoterCard from './EditVoterCard';
import { FaExclamationTriangle } from "react-icons/fa";
import SearchedVoter from './SearchedVoter';
import EditVoterInfo from './EditVoterInfo';


function ModalSignIn({ show, validated, setVoters, voter, handleValidation, setValidated, count, age, address1, handleCount, address2, id, postalCode, party, isActive, setShow, lastName, firstName, password, handleClose, handleShow }) {
    const navigate = useNavigate();
    const [inputColor, setInputColor] = useState(false);
    const [loginLastName, setLoginLastName] = useState("");
    const [loginFirstName, setLoginFirstName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginPasswordConf, setLoginPasswordConf] = useState("");
    // const [validated, setValidated] = useState(false);
    // const [errors, setErrors] = useState("");
    const [errorMessages, setErrorMessages] = useState("");
    const [canEdit, setCanEdit] = useState(false);
    const [revealText, setRevealText] = useState(false);
    const [confTextReveal, setConfTextReveal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const formData = {loginFirstName, loginLastName, loginPassword, loginPasswordConf}

    console.log("id: ", id);
    function handleNameInput() {
        setInputColor(true);
    }

    let errorNum = 0;
    const error1 = "First name entered is not associated with this voter record. Please try again.";
    const error2 = "Last name entered is not associated with this voter record. Please try again.";
    const error3 = "Password is incorrect. Please try again.";
    const error4 = "Passwords entered do not match. Please try again.";

    useEffect(() => console.log("re-render because input changed: ", handleSubmit), [errorMessages])



    function handleSubmit(e) {
        e.preventDefault();
        console.log("first name: ", firstName);
        console.log("last name: ", lastName);
        console.log("password: ", password);
        console.log(loginFirstName);
        // console.log(formData);

        if (loginFirstName === firstName) {
            errorNum = 0;
            // setErrorMessages(errorNum);
            console.log(errorMessages);
        } else if (loginFirstName !== firstName) {
            errorNum = 1;
            setErrorMessages(error1);
        }
        if (errorNum === 0 && (loginLastName === lastName)) {
            errorNum = 0;
        }
        else if (errorNum === 0 && (loginLastName !== lastName)) {
            errorNum = 2;
            setErrorMessages(error2);
        }
        if (errorNum === 0 && (loginPassword === password)) {
            errorNum = 0;
        }
        else if (errorNum === 0 && (loginPassword !== password)) {
            errorNum = 3;
            setErrorMessages(error3);
        }
        if (errorNum === 0 && (loginPassword !== loginPasswordConf)) {
            errorNum = 4;
            setErrorMessages(error4);
        }
        if (errorNum === 0 && loginPassword === loginPasswordConf) {
            setErrorMessages("");
            console.log("No errors!");
            handleCount();
            // setCanEdit(canEdit => (!canEdit));
            handleValidation();
            handleClose();
        }
        console.log(errorMessages)
        return (errorMessages)
    }

    const togglePassword = document.querySelector("#togglePassword");
    const togglePassword2 = document.querySelector("#togglePassword2");
    const passwordInput = document.querySelector("#passwordInput");
    const passwordInput2 = document.querySelector("#passwordInput2");


    function handleTextReveal() {
        setRevealText((revealText) => !revealText)
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        // toggle the icon
        this.classList.toggle("bi-eye");
    }

    function handleConfTextReveal() {
        setConfTextReveal((confTextReveal) => !confTextReveal)
        const type = passwordInput2.getAttribute("type") === "password" ? "text" : "password";
        passwordInput2.setAttribute("type", type);
        // toggle the icon
        this.classList.toggle("bi-eye");
    }


    return (
        <div style={{ margin: "5px" }}>
            <div className='modal-container'>
                <section className="modal">
                    <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className="modal-header">
                            {/* closeButton> */}
                            <Form.Group className="XIconContainer" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </Form.Group>
                            <Modal.Title className="modal-title1">
                                Sign In
                            </Modal.Title>
                            <Modal.Title className="modal-title2">
                                To make any changes to your registration record, sign in using the password connected to your account.
                            </Modal.Title>
                            {/* <p style={{ marginTop: "25px", marginBottom: "25px", color: "red", textAlign: "center" }}>{errorMessages}</p> */}
                            {errorMessages ?
                                (<p className="errorMessage" style={{ color: "red" }}>
                                    <div className="errorMessageContainer" style={{ display: "flex", fontFamily: "helvetica", letterSpacing: "2", fontSize: "16px", flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
                                        <FaExclamationTriangle className="fa-solid fa-triangle-exclamation fa-beat-fade" style={{ marginRight: "10px" }} />
                                        {errorMessages}
                                    </div>
                                </p>) : null}
                        </Modal.Header>
                        <Modal.Body className="modal-content">
                            {/* {errorMessages ? <Form.Label className="errorMessage" style={{ color: "red" }}>{errorMessages}</Form.Label> : null} */}
                            <Form className="modal-form" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label id="signInName" className="signInStyle">FIRST NAME:</Form.Label>
                                    <Form.Control
                                        // id="firstNameInput"
                                        style={inputColor ? { color: "black" } : { color: "gray" }}
                                        className="signInInput"
                                        type="text"
                                        value={loginFirstName}
                                        name="loginFirstName"
                                        onChange={(e) => {
                                            handleNameInput();
                                            setLoginFirstName(e.target.value)
                                        }}
                                        placeholder="Enter first name"
                                        autoFocus
                                    />
                                </Form.Group>
                                {/* {errorNum = 1 ? <Form.Label className="errorMessage" style={{color: "red" }}>{error1}</Form.Label> : null} */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label id="signInName" className="signInStyle">LAST NAME:</Form.Label>
                                    <Form.Control
                                        style={inputColor ? { color: "black" } : { color: "gray" }}
                                        className="signInInput"
                                        type="text"
                                        value={loginLastName}
                                        name="loginLastName"
                                        onChange={(e) => {
                                            handleNameInput();
                                            setLoginLastName(e.target.value)
                                        }}
                                        placeholder="Enter last name"
                                        autoFocus
                                    />
                                </Form.Group>
                                {/* {errorNum = 2 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error2}</Form.Label> : null}                             */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label id="passwordLabel1" className="signInStyle">PASSWORD:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        style={inputColor ? { color: "black" } : { color: "gray" }}
                                        className="signInInputPw"
                                        value={loginPassword}
                                        name="loginPassword"
                                        placeholder="Enter password"
                                        onChange={(e) => {
                                            handleNameInput();
                                            setLoginPassword(e.target.value)
                                        }}
                                        autoFocus
                                        id="passwordInput"
                                    />
                                    {revealText ? (<i className="bi bi-eye" onClick={handleTextReveal} id="togglePassword"></i>) : (<i className="bi bi-eye-slash" onClick={handleTextReveal} id="togglePassword"></i>)}
                                </Form.Group>
                                {/* {errorNum=3 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error3}</Form.Label> : null}                             */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                    <Form.Label id="passwordLabel2" className="signInStyle">CONFIRM PASSWORD:</Form.Label>
                                    <Form.Control
                                        className="signInInputPw"
                                        style={inputColor ? { color: "black" } : { color: "gray" }}
                                        onChange={(e) => {
                                            handleNameInput();
                                            setLoginPasswordConf(e.target.value)
                                        }}
                                        value={loginPasswordConf}
                                        name="loginPasswordConf"
                                        placeholder="Re-enter password"
                                        autoFocus
                                        type={showPassword ? "text" : "password"}
                                        id="passwordInput2"
                                    />

                                    {confTextReveal ? (<i className="bi bi-eye" onClick={handleConfTextReveal} id="togglePassword2"></i>) : (<i className="bi bi-eye-slash" onClick={handleConfTextReveal} id="togglePassword2"></i>)}
                                </Form.Group>
                                {/* {errorNum = 4 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error4}</Form.Label> : null}                             */}
                                <Modal.Footer>
                                    {/* {errors.map((error) => (
                            <p key={error} style={{ color: "red" }}>
                                {error}
                            </p>
                        ))} */}
                                    <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                                        CANCEL
                                    </Button>
                                    <input variant="primary" className="modal-btn modal1" id="submit" type="submit" value="SIGN IN" />
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    {/* {validated ? handleLetEdit() : null} */}
                    {validated ? <SearchedVoter voter={voter} firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age} /> : handleClose}

                    {/* {canEdit ? <SearchedVoter firstName={firstName} count={count} lastName={lastName} postalCode={postalCode} address1={address1} address2={address2} isActive={isActive} party={party} id={id} age={age} /> : null} */}
                    {/* {canEdit ? handleValidation() : null} */}
                    {/* {canEdit ? navigate("/voters/edit/") : null} */}
                </section>
            </div>
        </div>
    );
}

export default ModalSignIn;