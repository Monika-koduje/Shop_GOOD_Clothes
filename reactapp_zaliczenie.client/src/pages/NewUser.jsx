import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Register } from '../components/Register.jsx';
import { SignInUser } from './SignInUser.jsx';

export const NewUser = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    return (
        <>
            <Container>

                <div className="div-prop  d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <div className="text-big big">Rejestracja nowego użytkownika</div>
                            <Register />
                            <div className="col">
                                <p className="text-center p-size"><span>Masz już konto?</span></p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={handleShowLogin} type="button" className="btn-new-size-1 btn btn-primary btn-block mb-4">Zaloguj się!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>


            {showLogin && <SignInUser show={showLogin} handleClose={handleCloseLogin} />}
        </>
    );
};
