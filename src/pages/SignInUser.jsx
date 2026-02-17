import React from 'react';
import Container from 'react-bootstrap/Container';
import { SignIn } from '../components/SignIn.jsx';
import { Modal } from 'react-bootstrap';

export const SignInUser = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="justify-content-center modal-header-custom">
                <Modal.Title className="w-100 text-center">Logowanie</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-custom">
                <Container>
                    <SignIn handleClose={handleClose} />
                </Container>
            </Modal.Body>
        </Modal>
    );
};


