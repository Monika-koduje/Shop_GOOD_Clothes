import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { LoadingElement } from '../components/LoadingElement';



export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); 

    const sendResetLink = async () => {
        setIsLoading(true); 
        try {
        
            await new Promise((resolve) => setTimeout(resolve, 3000)); 
            setMessage(`Link resetujący hasło został wysłany na adres: ${email}`);
            setError('');
        } catch (error) {
            console.error('Błąd resetowania hasła:', error.message);
            setError('Wystąpił błąd podczas resetowania hasła. Spróbuj ponownie.');
            setMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendResetLink();
        setTimeout(() => {
            setMessage(`Link resetujący hasło został wysłany na adres: ${email}`);
        }, 1000); 
    };

    return (
        <Container>
            {isLoading && <LoadingElement />} {}
            <div className="row">
                <div className="col">
                    <div className="forgot-password-container">
                        <h2 className="center-h2">Zapomniałeś/aś hasła?</h2>
                        <p className="forgot-password-description">Podaj adres e-mail, na który zostanie wysłany link resetujący hasło.</p>
                        <form onSubmit={handleSubmit} className="forgot-password-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Adres e-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {message && <div className="alert alert-success">{message}</div>}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary forgot-password-btn">Wyślij link resetujący</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};
