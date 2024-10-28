import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { TbPigMoney } from "react-icons/tb";
import '../css/App.css';

export const ThankYouShop = ({ showModal, handleCloseModal }) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title>Dziękujemy za złożenie zamówienia! </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-img-shop text-center">
                <TbPigMoney className="size-pig" /> <br/>
                Twoje zamówienie zostało przekazane do realizacji.
            </Modal.Body>
        </Modal>
    );
};


