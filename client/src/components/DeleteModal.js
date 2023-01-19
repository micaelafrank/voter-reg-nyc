import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ openDeleteModal, setOpenDeleteModal }){

    return(
    <div style={{ margin: "5px" }}>
        <div className='modal-container'>
            <section className="modal">
                <Modal show={openDeleteModal}>
                    <Modal.Header style={{ lineHeight: "1", justifyContent: "right", display: "flex", flexDirection: "row", }} className="modal-header">
                            <h1 style={{ fontFamily: "KGThankYouStamp", textAlign: "center", alignItems: "center", marginLeft: "auto", marginRight: "auto", letterSpacing: "3px", textShadow: "1.6px 1.6px rgb(126, 171, 211)", fontSize: "40px" }}>ARE YOU SURE?</h1>
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <div>Deleting is permanent.</div>
                        <Button onClick={deleteVoterRecord}>I'M SURE</Button>
                        <Button onClick={() => setOpenDeleteModal(false)}>CANCEL</Button>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
    </div>
    )
}

export default DeleteModal;