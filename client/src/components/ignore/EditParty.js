import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Voter from '../Voter';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function EditParty({ partyNameState, setPartyNameState, handleCloseEdit, editPartyNameState, setEditPartyNameState, initialPartyNameValue, setInitialPartyNameValue, voter, upperFN, upperLN, editInfo, setEditInfo, user, handleClose, setChange, change, handleShow, show }) {

    let handleEditVoterParty = () => {
        setEditPartyNameState(!editPartyNameState);
        if (partyNameState !== "") {
            fetch(`/voters/edit/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    party: partyNameState,
                    id: user.id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialPartyNameValue(data.party.party_name));
            setChange(!change);
        }
    };


    return (
        <div style={{ margin: "5px" }}>
            <div className='modal-container'>
                <section className="modal">
                    {/* <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button> */}
                    <Modal show={editInfo}>
                        <Modal.Header style={{ lineHeight: "1", justifyContent: "right", display: "flex", flexDirection: "row", }} className="modal-header">
                            <h1 style={{ fontFamily: "KGThankYouStamp", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", letterSpacing: "3px", textShadow: "1.6px 1.6px rgb(126, 171, 211)", fontSize: "40px" }}>EDIT VOTER INFO</h1>
                            {/* closeButton> */}
                            <Form.Group style={{ alignItems: "right", justifyContent: "right", float: "right" }} className="XIconContainer" onClick={handleCloseEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </Form.Group>
                        </Modal.Header>
                        <Modal.Body className="modal-content">
                            <div className='modal-item-description-box'>
                                <p style={{ fontWeight: "bold", textAlign: "center", marginBottom: "40px", fontFamily: "monospace", fontSize: "18px" }}>{upperFN} {upperLN}</p>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                {editPartyNameState ? (
                                   <div>
                                   <Form>
                                    <Row style={{ display: "flex", flexDirection: "row" }}>
                                        <Col xs={7}>
                                        <Form.Select
                                        style={{ color: "black", height: "40px", justifyContent: "center", alignItems: "center", fontSize: "14px", fontFamily: "monospace" }}
                                        id="selectedParty"
                                        required
                                        name="party"
                                        value={partyNameState}
                                        label="Choose One"
                                        defaultValue={initialPartyNameValue}
                                        onChange={(e) => setPartyNameState(e.target.checked)}
                                        >
                                            <option style={{color:"gray"}} value="DEFAULT">Choose One</option>
                                            <option style={{ color: "black" }} value="democrat">Democratic Party</option>
                                            <option style={{ color: "black" }} value="green">Green Party</option>
                                            <option style={{ color: "black" }} value="independent">Independent Party</option>
                                            <option style={{ color: "black" }} value="republican">Republican Party</option>
                                            <option style={{ color: "black" }} value="working_families">Working Families Party</option>
                                        </Form.Select>
                                    </Col>
                                    </Row>
                                    </Form>
                                    </div>
                                    ) : (
                                        <div
                                            style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                        >
                                            <span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>POLITICAL PARTY:</span> {voter.party.party_name}</span>
                                        </div>
                                    )}
                                    {/* { editPartyState ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"
                                        onClick={handleEditParty}
                                    >
                                        <path 
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                    :
                                    <svg onClick={handleEditParty}
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>} */}
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        </div>
    )
}

export default EditParty;
