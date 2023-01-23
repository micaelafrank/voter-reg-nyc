import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Voter from './Voter';

function EditParty({ change, partyId, voterPartyObj, setChange, user, voterPartyState, setVoterPartyState, editVoterPartyState, setEditVoterPartyState, initialVoterPartyValue, setInitialVoterPartyValue, handleExitPartyEdit, parties, setParties, voter, party, editPartyInfo, setEditPartyInfo, partyNameState, setPartyNameState, editPartyNameState, setEditPartyNameState, initialPartyNameValue, setInitialPartyNameValue, upperFN, upperLN }) {
    // const [address2State, setAddress2State] = useState(myVoter.address2);
    // const [editAddress2State, setEditAddress2State] = useState(false);
    // const [initialAddress2Value, setInitialAddress2Value] = useState(myVoter.address2);

    // const [postalCodeState, setPostalCodeState] = useState(myVoter.postalCode);
    // const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    // const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(myVoter.postalCode);

    function handleExitPartyModal() {
        setChange(!change);
        handleExitPartyEdit();
    }

    let handleChangeParty = () => {
        setEditVoterPartyState(!editVoterPartyState);
        console.log("party state: ", voterPartyState)
        // if (voterPartyState !== initialPartyNameValue) {
            fetch(`/voters/edit/${voter.user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    partyId: voterPartyState, 
                    id: voter.user_id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setVoterPartyState(data.partyId));
            setChange(!change);
        // }
        console.log("new party state after patch request: ", voterPartyState)
    };

    return (
        <div style={{ margin: "5px" }}>
            <div className='modal-container'>
                <section className="modal">
                    {/* <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button> */}
                    <Modal show={editPartyInfo}>
                        <Modal.Header style={{ lineHeight: "1", justifyContent: "right", display: "flex", flexDirection: "row", }} className="modal-header">
                            <h1 style={{ fontFamily: "KGThankYouStamp", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", letterSpacing: "3px", textShadow: "1.6px 1.6px rgb(126, 171, 211)", fontSize: "40px" }}>EDIT VOTER INFO</h1>
                            {/* closeButton> */}
                            <Form.Group style={{ alignItems: "right", justifyContent: "right", float: "right" }} className="XIconContainer" onClick={handleExitPartyEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </Form.Group>
                        </Modal.Header>
                        <Modal.Body className="modal-content">
                            <div className='modal-item-description-box'>
                                <p style={{ fontWeight: "bold", textAlign: "center", marginBottom: "40px", fontFamily: "monospace", fontSize: "18px" }}>{upperFN} {upperLN}</p>
                                <div style={{ display: "flex", flexDirection: "row", rowGap: "20px", justifyContent: "center", alignItems: "center" }}>
                                    {editVoterPartyState ? 
                                    (<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <Form.Group id="formGridState" >
                                            <Form.Label id="party-options-label" htmlFor="voterParty" style={{ paddingRight: "10px" }}>NEW PARTY AFFILIATION:</Form.Label>
                                            <Form.Select
                                                style={{ color: "black", height: "40px", justifyContent: "center", alignItems: "center", fontSize: "14px", fontFamily: "monospace" }}
                                                id="voterPartyState"
                                                required
                                                name="voterPartyState"
                                                value={voterPartyState}
                                                // label="Choose One"
                                                // defaultValue={voterPartyState}
                                                onChange={(e) => {
                                                    setVoterPartyState(e.target.value)
                                                    console.log("new party name state in select: ", voterPartyState);
                                                }}>
                                                <option value="1">Democratic Party</option>
                                                <option value="2">Republican Party</option>
                                                <option value="3">Independent Party</option>
                                                <option value="4">Working Families Party</option>
                                                <option value="5">Green Party</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>) :
                                    (
                                        // <div style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                        ><span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>
                                            VOTING PARTY:</span> {voterPartyState} </span>
                                        </div>
                                    )}
                                {editVoterPartyState ?
                                    <Button onClick={handleChangeParty}>SAVE</Button> :
                                    <Button onClick={handleChangeParty}>EDIT</Button>
                                }
                                </div>
                                <Button onClick={handleExitPartyModal}>SAVE & EXIT</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        </div>
    )
}

export default EditParty;
