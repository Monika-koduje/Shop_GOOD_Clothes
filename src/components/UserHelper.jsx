import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdContactSupport } from "react-icons/md";

export const UserHelper = () => {
    const [message, setMessage] = useState('');
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [error, setError] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) {
            setError('Wiadomość jest wymagana');
            return;
        }

        if (message.length < 30) {
            setError('Wiadomość musi mieć co najmniej 30 znaków');
            return;
        }

        if (message.length > 250) {
            setError('Wiadomość nie może przekraczać 250 znaków');
            return;
        }

        setIsMessageSent(true);
    };

    return (
        <Container>
            <div className="m-5">
                <h4>Potrzebujesz pomocy <span className="helper"><MdContactSupport /></span></h4> 
                <p>Napisz do nas, a my postaramy się odpowiedzieć na Twoje pytania.</p>
                {isMessageSent ? (
                    <p><b>Dziękujemy za Twoją wiadomość. Skontaktujemy się z Tobą jak najszybciej!</b></p>
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="message">
                            <Form.Label>Wiadomość:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
                            {error && <Form.Text className="text-danger">{error}</Form.Text>}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Wyślij wiadomość
                        </Button>
                    </Form>
                )}
            </div>
        </Container>
    );
};
