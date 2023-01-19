import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function DeleteModal({ vId, handleOpenDelete, deleteVoterRecord, handleCloseDelete, openDelete, setOpenDelete, voter }){
    const navigate = useNavigate();

    function handleDelete(){
        console.log(voter.id)
        fetch(`/voters/${voter.id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                deleteVoterRecord(voter.id);
                <Alert>Your Big Apple Ballots voting record was successfully deleted. 
                </Alert>
                handleCloseDelete();
                navigate("/voters")
            }
        })
    }


    return(
    <div style={{ margin: "5px" }}>
        <div className='modal-container'>
            <section className="modal">
                <Modal openDelete={openDelete} onClose={handleCloseDelete} show={handleOpenDelete}>
                    <Modal.Header style={{ lineHeight: "1", justifyContent: "right", display: "flex", flexDirection: "row", }} className="modal-header">
                            <h1 style={{ fontFamily: "KGThankYouStamp", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", letterSpacing: "3px", textShadow: "1.6px 1.6px rgb(126, 171, 211)", fontSize: "40px" }}>ARE YOU SURE?</h1>
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <div>Deleting is permanent.</div>
                        <Button onClick={handleDelete}>I'M SURE</Button>
                        <Button onClick={handleCloseDelete}>CANCEL</Button>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
    </div>
    )
}

export default DeleteModal;