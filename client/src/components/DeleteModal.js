import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function DeleteModal({ user, setUser, vId, handleOpenDelete, deleteVoterRecord, handleCloseDelete, openDelete, setOpenDelete, voter }){
    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    setUser({});
                    navigate('/')
                }
            });
    }

    function handleDelete(){
        console.log(voter.id)
        fetch(`/voters/${voter.id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
                deleteVoterRecord(voter.id);
                handleLogout();
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
                        <div style={{textAlign:"center", fontFamily:"monospace", fontSize:"15px"}}>Deleting is permanent.</div>
                        <div style={{ alignItems:"center", justifyContent:"center", alignItems:"center", fontFamily:"monospace", display:"flex", marginBottom:"15px", marginTop:"30px", flexDirection:"row"}}>
                            <Button style={{marginRight:"30px", fontWeight:"bold", fontFamily:"monospace", padding:"10px 18px", fontSize:"13px", backgroundColor:"white", cursor:"pointer", color:"black", border:"2px solid black"}} onClick={handleDelete}>I'M SURE</Button>
                            <Button style={{ marginLeft: "30px", fontWeight:"bold", fontFamily: "monospace", padding: "10px 18px", fontSize: "13px", backgroundColor: "white", cursor:"pointer", color: "black", border: "2px solid black"}} onClick={handleCloseDelete}>CANCEL</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        </div>
    </div>
    )
}

export default DeleteModal;