import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Voter from './Voter';

function EditSearchedV({ deleteVoterRecord, findVoter, setFindVoter, postalCodeState, setPostalCodeState, handleCloseEdit, editPostalCodeState, setEditPostalCodeState, initialPostalCodeValue, postalCode, address1, address2, setInitialPostalCodeValue, voter, upperFN, upperLN, address1State, editInfo, setEditInfo, setAddress1State, user, handleClose, setChange, change, handleShow, show, editAddress1State, editAddress2State, setAddress2State, setEditAddress2State, address2State, initialAddress2Value, setInitialAddress2Value, setEditAddress1State, initialAddress1Value, setInitialAddress1Value }){
    // const [address2State, setAddress2State] = useState(myVoter.address2);
    // const [editAddress2State, setEditAddress2State] = useState(false);
    // const [initialAddress2Value, setInitialAddress2Value] = useState(myVoter.address2);

    // const [postalCodeState, setPostalCodeState] = useState(myVoter.postalCode);
    // const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    // const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(myVoter.postalCode);

    function handleExitModal(){
        setChange(!change);
        handleCloseEdit();
    }

    let handleEditAddress1 = () => {
        setEditAddress1State(!editAddress1State);
        if (address1State !== "") {
            fetch(`/voters/edit/${voter.user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address1State,
                    id: voter.user_id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setAddress1State(data.address1));
            setChange(!change);
            // setEditAddress1State(!editAddress1State);
        }
    };

    let handleEditAddress2 = () => {
        setEditAddress2State(!editAddress2State);
        if (address2State !== "") {
            fetch(`/voters/edit/${voter.user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address2: address2State,
                    id: voter.user_id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setAddress2State(data.address2));
            setChange(!change);
        }
    };

    let handleEditPostalCode = () => {
        setEditPostalCodeState(!editPostalCodeState);
        if (postalCodeState !== "") {
            fetch(`/voters/edit/${voter.user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postalCode: postalCodeState,
                    id: voter.user_id,
                }),
            })
            .then((res) => res.json())
            // .then(data => console.log("returning json data: ", data))
            .then((data) => setPostalCodeState(data.postalCode));
            console.log("new postal code: ", initialPostalCodeValue)
            // setEditPostalCodeState(!editPostalCodeState);
            setChange(!change);
        }
    };

    return(
    <div style={{ margin: "5px" }}>
        <div className='modal-container'>
            <section className="modal">
                {/* <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button> */}
                <Modal show={editInfo}>
                    <Modal.Header style={{lineHeight:"1", justifyContent:"right", display:"flex",  flexDirection:"row", }} className="modal-header">
                            <h1 style={{ fontFamily: "KGThankYouStamp", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", letterSpacing: "3px", textShadow:"1.6px 1.6px rgb(126, 171, 211)", fontSize:"40px"}}>EDIT VOTER INFO</h1>
                        {/* closeButton> */}
                        <Form.Group style={{alignItems:"right", justifyContent:"right", float:"right"}} className="XIconContainer" onClick={handleCloseEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </Form.Group>
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <div className='modal-item-description-box'>
                            <p style={{fontWeight:"bold", textAlign:"center", marginBottom:"20px", fontFamily:"monospace", fontSize:"18px"}}>{upperFN} {upperLN}</p>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent:"flex-start", textAlign:"left", alignItems: "left" }}>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto", padding:"10px"}}>
                                    {editAddress1State ? (
                                    <div className='field1' 
                                    // style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    >
                                        <input
                                            defaultValue={address1State}
                                            className="editItemInput"
                                            id="my-input"
                                            aria-describedby='my-helper-text'
                                            onChange={(e) => setAddress1State(e.target.value)}
                                        />
                                        <p style={{marginBottom:"10px", fontFamily:"monospace", fontSize:"14px"}} id='my-helper-text'>
                                            EDIT STREET ADDRESS
                                        </p>
                                    </div>
                                    ) : 
                                    (
                                    // <div style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    ><span><span style={{ fontFamily: "monospace", fontSize: "15px" }}>
                                        STREET ADDRESS:</span> {address1State}</span>
                                        {/* </div> */}
                                        {/* {editAddress1State ? 
                                        <Button onClick={handleEditAddress1}>SAVE</Button> : 
                                        <Button onClick={handleEditAddress1}>EDIT</Button>
                                        } */}
                                    </div>
                                    )}
                                {editAddress1State ?
                                <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditAddress1}>SAVE</Button> :
                                <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditAddress1}>EDIT</Button>
                                }
                                </div>
                                {/* </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}> */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto", padding: "10px" }}>
                                    {editAddress2State ? (
                                    <div className='field1' 
                                    // style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    >
                                        <input
                                            defaultValue={address2State}
                                            className="editItemInput"
                                            id="my-input"
                                            aria-describedby='my-helper-text'
                                            onChange={(e) => setAddress2State(e.target.value)}
                                        />
                                        <p style={{ marginBottom: "10px", fontFamily: "monospace", fontSize: "14px" }} id='my-helper-text'>
                                        EDIT APT/SUITE/FLOOR NUMBER
                                        </p>
                                    </div>
                                    ) : 
                                        (
                                    <div style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                        ><span><span style={{ fontFamily: "monospace", fontSize: "15px" }}>
                                            APT/SUITE/FLOOR NUMBER:</span> {address2State}</span>
                                    </div>
                                    )}
                                    {editAddress2State ?
                                    <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditAddress2}>SAVE</Button> :
                                    <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditAddress2}>EDIT</Button>
                                    }
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: "auto", marginRight: "auto", padding: "10px" }}>
                                    {editPostalCodeState ? (
                                        <div className='field1' 
                                        // style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                        >
                                            <input
                                                defaultValue={postalCodeState}
                                                className="editItemInput"
                                                id="my-input"
                                                aria-describedby='my-helper-text'
                                                onChange={(e) => {
                                                    setPostalCodeState(e.target.value)
                                                    console.log("new postal code state in code: ", postalCodeState)
                                                }}
                                            />
                                            <p style={{ marginBottom: "10px", fontFamily: "monospace", fontSize: "14px" }} id='my-helper-text'>
                                                EDIT POSTAL CODE
                                            </p>
                                        </div>
                                    ) : (
                                        // <div style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                        >
                                            <span><span style={{ fontFamily: "monospace", fontSize: "15px" }}>
                                            POSTAL CODE:</span> {postalCodeState}</span>
                                        </div>
                                        // </div>
                                    )}
                                {editPostalCodeState ?
                                    <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditPostalCode}>SAVE</Button> :
                                    <Button style={{ marginLeft: "20px", padding: "5px 12px" }} onClick={handleEditPostalCode}>EDIT</Button>
                                }
                                </div>

                                {/* { editAddress1State ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"
                                        onClick={handleEditAddress1}
                                    >
                                        <path 
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                    :
                                    <svg onClick={handleEditAddress1}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>} */}
                            </div>
                            <Button style={{ padding: "6px 15px", fontFamily:"monospace", backgroundColor:"white", color:"navy", cursor:"pointer", marginTop:"20px", fontWeight:"bold", border:"2px solid navy", fontSize:"16px", marginBottom:"15px" }} onClick={handleExitModal}>SAVE & EXIT</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
        </div>
    )}

export default EditSearchedV;
