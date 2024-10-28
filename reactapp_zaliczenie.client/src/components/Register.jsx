import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingElement } from '../components/LoadingElement';
import { PrivacyPolicy } from './PrivacyPolicy';

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);



    const validateForm = () => {
        const newErrors = {};

        if (!firstName) {
            newErrors.firstName = 'Imię jest wymagane';
        } else if (firstName.length < 3) {
            newErrors.firstName = 'Imię musi mieć co najmniej 3 znaki';
        } else if (/\d/.test(firstName)) {
            newErrors.firstName = 'Imię nie może zawierać liczb';
        }

        if (!lastName) {
            newErrors.lastName = 'Nazwisko jest wymagane';
        } else if (lastName.length < 3) {
            newErrors.lastName = 'Nazwisko musi mieć co najmniej 3 znaki';
        } else if (/\d/.test(lastName)) {
            newErrors.lastName = 'Nazwisko nie może zawierać liczb';
        }

        if (!email) {
            newErrors.email = 'Adres e-mail jest wymagany';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Podaj poprawny adres e-mail';
        }

        if (!password) {
            newErrors.password = 'Hasło jest wymagane';
        } else if (password.length < 8) {
            newErrors.password = 'Hasło powinno mieć co najmniej 8 znaków';
        }

        return newErrors;
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true); // Włączanie efektu modala

        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Symulacja operacji rejestracji 
            setTimeout(() => {
                setIsLoading(false); // Wyłączanie efektu modala po zakończeniu operacji
                navigate('/user', { state: { login: getEmailPrefix(email) } }); // Przekazywanie email jako login do komponentu User
            }, 3000); // Symulacja trwania operacji rejestracji przez 3 sekundy
        } else {
            setErrors(formErrors);
            setIsLoading(false); // Wyłączanie efektu modala w przypadku błędu walidacji formularza
        }
    };

    // Funkcja do pobierania części adresu e-mail przed znakiem "@"
    const getEmailPrefix = (email) => {
        const atIndex = email.indexOf('@');
        return email.substring(0, atIndex);
    };

    // Symulacja wyboru opcji rejestracji za pomocą różnych platform społecznościowych
    const handleSocialRegister = (platform) => {
        setIsLoading(true); // Włączanie efektu modala

        // Symulacja operacji rejestracji za pomocą platformy społecznościowej (usuń to w rzeczywistej aplikacji)
        setTimeout(() => {
            setIsLoading(false); // Wyłączanie efektu modala po zakończeniu operacji
            navigate('/user'); // Przekierowanie użytkownika na stronę /user
        }, 3000); // Symulacja trwania operacji rejestracji przez 2 sekundy
    };

    const handlePrivacyPopup = () => {
        setShowPrivacyPopup(true);
    };

    const handleClosePrivacyPopup = () => {
        setShowPrivacyPopup(false);
    };

    const handleChange = (field, value) => {
        const newErrors = { ...errors };
        delete newErrors[field];
        setErrors(newErrors);

        switch (field) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };


    return (
        <>
            {isLoading && <LoadingElement />}
            <PrivacyPolicy isOpen={showPrivacyPopup} onRequestClose={handleClosePrivacyPopup} />

            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form3Example1">Imię:</label>
                            <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                            />
                            {errors.firstName && <div className="alert alert-danger">{errors.firstName}</div>}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form3Example2">Nazwisko:</label>
                            <input
                                type="text"
                                id="form3Example2"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                            />
                            {errors.lastName && <div className="alert alert-danger">{errors.lastName}</div>}
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Adres e-mail:</label>
                    <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={email}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Hasło:</label>
                    <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                </div>

                <div className="form-check d-flex mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                    <label className="form-check-label" htmlFor="form2Example33">
                        Subskrypcja naszego newsletter'a
                    </label>
                </div>

                <div className="form-check d-flex mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label>
                        <p className="accept">
                            Akceptuję i zgadzam się z
                            <a href="#!" onClick={handlePrivacyPopup}>
                                <span> polityką prywatności</span>
                            </a>
                        </p>
                    </label>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn-new-size-1 btn btn-primary btn-block mb-4">
                        {isLoading ? <LoadingElement /> : 'Załóż konto'} {/* Zmiana treści przycisku na modal podczas ładowania */}
                    </button>
                </div>

                <div className="text-center">
                    <p>lub zarejestruj się za pomocą:</p>
                    <button type="button" className="btn-new-log-fav btn btn-secondary btn-floating mx-1" onClick={() => handleSocialRegister('Facebook')}>
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn-new-log-fav btn btn-secondary btn-floating mx-1" onClick={() => handleSocialRegister('Google')}>
                        <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn-new-log-fav btn btn-secondary btn-floating mx-1" onClick={() => handleSocialRegister('Twitter')}>
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn-new-log-fav btn btn-secondary btn-floating mx-1" onClick={() => handleSocialRegister('GitHub')}>
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </>
    );
};
