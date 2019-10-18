import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";

import Button from "../Button";
import {validateEmail} from "../../helpers/validate";

const SignUp = ({show, handleClose, logIn}) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    const checkUser = () => {
        if(validateEmail(email) && password.length > 0)
            onSuccess();
        else
            onError(email, password);
        setEmail('');
        setPassword('');
        setFirstName('');
        setSecondName('');
    };

    const onSuccess = () => {
        logIn();
        handleClose();
    };

    const onError = (em, pass) => {
        const errors = [];
        if(!validateEmail(em))
            errors.push("Invalid email");
        if(pass.length === 0)
            errors.push("Password can not be empty");
        setError(errors);
    };

    return <Modal show={show} onHide={handleClose} className="modal" >
        <Modal.Body>
            <div className="modal-title">Log In</div>
            <div className="input-container">
                <span className="input-placeholder">First Name:</span>
                <input type="text" className="input-field" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div className="input-container">
                <span className="input-placeholder">Last Name:</span>
                <input type="text" className="input-field" onChange={(e) => setSecondName(e.target.value)} value={secondName}/>
            </div>
            <div className="input-container">
                <span className="input-placeholder">Email:</span>
                <input type="text" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-container">
                <span className="input-placeholder">Password:</span>
                <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                {error.map(err => <div className="error">{err}</div>)}
            </div>
            <div className="input-button">
                <Button onClick={checkUser} text="Submit"/>
            </div>
        </Modal.Body>
    </Modal>
};

export default SignUp;