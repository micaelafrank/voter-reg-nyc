import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Voter from './Voter';

function EditParty({ voter, party, partyState, setPartyState, editPartyState, setEditPartyState }) {
    // const [address2State, setAddress2State] = useState(myVoter.address2);
    // const [editAddress2State, setEditAddress2State] = useState(false);
    // const [initialAddress2Value, setInitialAddress2Value] = useState(myVoter.address2);

    // const [postalCodeState, setPostalCodeState] = useState(myVoter.postalCode);
    // const [editPostalCodeState, setEditPostalCodeState] = useState(false);
    // const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(myVoter.postalCode);

    function handleExitModal() {
        setChange(!change);
        handleCloseEdit();
    }

    let handleEditParty = () => {
        setEditPartyState(!editPartyState);
        if (partyState !== party) {
            fetch(`/voters/edit/${voter.user_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    party: partyState,
                    id: voter.user_id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setPartyState(data.party));
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
                                <div style={{ display: "flex", flexDirection: "row", rowGap: "20px", justifyContent: "center", alignItems: "center" }}>
                                    <div>
                                        {editPartyState ? (
                                            <div className='field1' style={{ justifyContent: "center", marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}>
                                                <input
                                                    defaultValue={partyState}
                                                    className="editItemInput"
                                                    id="my-input"
                                                    aria-describedby='my-helper-text'
                                                    onChange={(e) => setPartyState(e.target.value)}
                                                />
                                                <p style={{ marginBottom: "10px", fontFamily: "monospace", fontSize: "13px" }} id='my-helper-text'>
                                                    EDIT PARTY AFFILIATION
                                                </p>
                                            </div>
                                        ) :
                                            (
                                                // <div style={{display: "flex", flexDirection: "row"}}>
                                                <div style={{ marginLeft: "auto", marginRight: "auto", alignItems: "center", textAlign: "center" }}
                                                ><span><span style={{ fontFamily: "monospace", fontSize: "14px" }}>
                                                    VOTING PARTY:</span> {partyState}</span>
                                                    {/* </div> */}
                                                    {/* {editAddress1State ? 
                                        <Button onClick={handleEditAddress1}>SAVE</Button> : 
                                        <Button onClick={handleEditAddress1}>EDIT</Button>
                                        } */}
                                                </div>
                                            )}
                                    </div>
                                    {editPartyState ?
                                        <Button onClick={handleEditParty}>SAVE</Button> :
                                        <Button onClick={handleEditParty}>EDIT</Button>
                                    }
                                </div>
                                <Button onClick={handleExitModal}>SAVE & EXIT</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </section>
            </div>
        </div>
    )
}

export default EditParty;
