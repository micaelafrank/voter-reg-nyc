import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Voter from './Voter';

function EditSearchedV({ postalCodeState, setPostalCodeState, editPostalCodeState, setEditPostalCodeState, initialPostalCodeValue, setInitialPostalCodeValue, voter, upperFN, upperLN, address1State, editInfo, setEditInfo, setAddress1State, user, handleClose, setChange, change, handleShow, show, editAddress1State, editAddress2State, setAddress2State, setEditAddress2State, address2State, initialAddress2Value, setInitialAddress2Value, setEditAddress1State, initialAddress1Value, setInitialAddress1Value }){
    // const [address2State, setAddress2State] = useState(myVoter.address2);
    // const [editAddress2State, setEditAddress2State] = useState(false);
    // const [initialAddress2Value, setInitialAddress2Value] = useState(myVoter.address2);

    // const [postalCodeState, setPostalCodeState] = useState(myVoter.postalCode);
    // const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    // const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(myVoter.postalCode);

    let handleEditAddress1 = () => {
        setEditAddress1State(!editAddress1State);
        if (address1State !== "") {
            fetch(`/voters/edit/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address1State,
                    id: user.id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialAddress1Value(data.address1));
            setChange(!change);
        }
    };
    return(
    <div style={{ margin: "5px" }}>
        <div className='modal-container'>
            <section className="modal">
                {/* <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button> */}
                <Modal show={editInfo} onClose={handleClose}>
                    <Modal.Header className="modal-header">
                        {/* closeButton> */}
                        <Form.Group className="XIconContainer" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </Form.Group>
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <div className='modal-item-description-box'>
                            <p style={{fontWeight:"bold", paddingBottom:"10px", fontFamily:"monospace", fontSize:"15px"}}>{upperFN} {upperLN}</p>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems: "center" }}>
                                {editAddress1State ? (
                                    <div className='field1' style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                                        <input
                                            defaultValue={initialAddress1Value}
                                            className="editItemInput"
                                            id="my-input"
                                            aria-describedby='my-helper-text'
                                            onChange={(e) => setAddress1State(e.target.value)}
                                        />
                                        <p style={{marginBottom:"10px", fontFamily:"monospace", fontSize:"13px"}} id='my-helper-text'>
                                            EDIT STREET ADDRESS
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    >
                                        <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>STREET ADDRESS:</span> {initialAddress1Value}</span>
                                    </div>
                                )}
                                {editAddress2State ? (
                                    <div className='field1' style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                                        <input
                                            defaultValue={initialAddress2Value}
                                            className="editItemInput"
                                            id="my-input"
                                            aria-describedby='my-helper-text'
                                            onChange={(e) => setAddress2State(e.target.value)}
                                        />
                                        <p style={{ marginBottom: "10px", fontFamily: "monospace", fontSize: "13px" }} id='my-helper-text'>
                                        EDIT APT/SUITE/FLOOR NUMBER
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    >
                                        <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>APT/SUITE/FLOOR NUMBER:</span> {initialAddress2Value}</span>
                                    </div>
                                )}
                                {editPostalCodeState ? (
                                    <div className='field1' style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                                        <input
                                            defaultValue={initialPostalCodeValue}
                                            className="editItemInput"
                                            id="my-input"
                                            aria-describedby='my-helper-text'
                                            onChange={(e) => setPostalCodeState(e.target.value)}
                                        />
                                        <p style={{ marginBottom: "10px", fontFamily: "monospace", fontSize: "13px" }} id='my-helper-text'>
                                            EDIT POSTAL CODE
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                    >
                                        <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>POSTAL CODE:</span> {initialPostalCodeValue}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                </section>
            </div>
        </div>
    )}

export default EditSearchedV;
