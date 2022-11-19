import React from "react";

function EditVoterCard({ handleValidation }){

    return(
    <>
        <div className="search-item">
            <div className={isActive ? `searchContainerBlack` : `voterContainerBlack`}>
                <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{fullName}</p>
                <p style={{ lineHeight: "0" }}>{age} years old</p>
                <p style={{ textAlign: "center", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p>
                <p style={{ alignItems: "left" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p>
                <p style={{ fontSize: "13px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                <p text="password">RESIDENTIAL ADDRESS: {address1}, {address2} {postalCode}</p>
                <p><a href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">Find My Pollsite</a></p>
                <Button variant="primary" onClick={handleShow}>
                    Edit Voter Information
                </Button>
                {show ? <ModalSignIn handleValidation={handleValidation} firstName={firstName} handleCount={resetCount} count={count} address1={address1} address2={address2} party={party} isActive={isActive} postalCode={postalCode} age={age} password={password} lastName={lastName} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> : null}
            </div>
        </div>
    </>
    )
}

export default EditVoterCard;