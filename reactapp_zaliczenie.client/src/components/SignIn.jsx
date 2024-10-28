import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingElement } from '../components/LoadingElement';

export const SignIn = ({ handleClose }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const storedEmail = localStorage.getItem('rememberedEmail');
        const storedPassword = localStorage.getItem('rememberedPassword');

        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Włączanie efektu modala

        try {
            // Walidacja adresu e-mail
            if (!validateEmail(email)) {
                setError('Proszę podać poprawny adres e-mail.');
                setIsLoading(false);
                return;
            }

            // Walidacja hasła
            if (!validatePassword(password)) {
                setError('Podano błędne hasło (wymagane min. 8 znaków).');
                setIsLoading(false);
                return;
            }

            // Zapisz e-mail i hasło, jeśli użytkownik chce zapamiętać logowanie
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', password);
            } else {
                // Usuń zapamiętane dane logowania, jeśli użytkownik nie chce zapamiętać logowania
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword');
            }

            // Symulacja operacji logowania 
            // Symulacja operacji logowania 
            setTimeout(() => {
                setIsLoading(false); // Wyłączanie efektu modala po zakończeniu operacji
                handleClose();
                navigate('/user', { state: { login: getEmailPrefix(email) } }); // Przekazywanie loginu użytkownika
            }, 3000); // Symulacja trwania operacji logowania przez 3 sekundy
        } catch (error) {
            console.error('Błąd logowania:', error.message);
            setError('Wystąpił błąd podczas logowania. Spróbuj ponownie.');
            setIsLoading(false); // Wyłączanie efektu modala w przypadku błędu
        }
    };

    // Funkcja do pobierania części adresu e-mail przed znakiem "@"
    const getEmailPrefix = (email) => {
        const atIndex = email.indexOf('@');
        return email.substring(0, atIndex);
    };



    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleForgotPassword = () => {
        navigate('/forgot_password'); 
        handleClose();
    };



    return (
        <>
        { isLoading && <LoadingElement />} 

        <form onSubmit={handleSubmit} className="sign-in-form">
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">Adres e-mail:</label>
                <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example2">Hasło:</label>
                <input
                    type="password"
                    id="form1Example2"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label className="form-check-label" htmlFor="form1Example3">Zapamiętaj mnie</label>
                    </div>
                </div>
                <div className="col">
                    <a className="form-check-label" href="#!" onClick={handleForgotPassword}>Zapomniałeś/aś hasła?</a>
                </div>
            </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn-new-size btn btn-primary btn-block">
                        {isLoading ? <LoadingElement /> : 'Zaloguj się'} {/* Zmiana treści przycisku na modal podczas ładowania */}
                    </button>
            </div>
            </form>
        </>
    );
};


