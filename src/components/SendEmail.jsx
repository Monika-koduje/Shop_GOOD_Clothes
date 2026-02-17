import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SendEmail = () => {
    const [formData, setFormData] = useState({
        form4Example1: '',
        form4Example2: '',
        form4Example3: '',
    });

    const [errors, setErrors] = useState({
        form4Example1: '',
        form4Example2: '',
        form4Example3: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {
            form4Example1: '',
            form4Example2: '',
            form4Example3: '',
        };

        let valid = true;

        if (formData.form4Example1.trim() === '') {
            formErrors.form4Example1 = 'Imię i nazwisko jest wymagane.';
            valid = false;
        } else if (/\d/.test(formData.form4Example1)) {
            formErrors.form4Example1 = 'Imię i nazwisko nie może zawierać cyfr.';
            valid = false;
        } else if (!/^([a-zA-Z]{3,})\s([a-zA-Z]{3,})$/.test(formData.form4Example1)) {
            formErrors.form4Example1 = 'Imię i nazwisko musi zawierać co najmniej 3 litery dla imienia, spację i co najmniej 3 litery dla nazwiska.';
            valid = false;
        }

        if (formData.form4Example2.trim() === '') {
            formErrors.form4Example2 = 'Adres e-mail jest wymagany.';
            valid = false;
        } else if (!validateEmail(formData.form4Example2)) {
            formErrors.form4Example2 = 'Podaj poprawny adres e-mail.';
            valid = false;
        }

        if (formData.form4Example3.trim().length < 30) {
            formErrors.form4Example3 = 'Wiadomość musi zawierać minimum 30 znaków.';
            valid = false;
        } else if (formData.form4Example3.trim().length > 250) {
            formErrors.form4Example3 = 'Wiadomość może zawierać maksymalnie 250 znaków.';
            valid = false;
        }

        setErrors(formErrors);

        if (valid) {
            toast.success('Wiadomość została wysłana pomyślnie!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log('Form submitted', formData);
        }
    };

    return (
        <>
            <ToastContainer />
            <section className="mb-5 mb-lg-10">
                <div className="row gx-xl-5">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form4Example1">Imię i nazwisko:</label>
                                <input
                                    type="text"
                                    id="form4Example1"
                                    className="form-control"
                                    value={formData.form4Example1}
                                    onChange={handleChange}
                                />
                                {errors.form4Example1 && <span className="error" style={{ color: 'red' }}>{errors.form4Example1}</span>}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form4Example2">Adres e-mail:</label>
                                <input
                                    type="email"
                                    id="form4Example2"
                                    className="form-control"
                                    value={formData.form4Example2}
                                    onChange={handleChange}
                                />
                                {errors.form4Example2 && <span className="error" style={{ color: 'red' }}>{errors.form4Example2}</span>}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label form-label-prop" htmlFor="form4Example3">Napisz wiadomość:</label>
                                <textarea
                                    className="form-control"
                                    id="form4Example3"
                                    rows="4"
                                    value={formData.form4Example3}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.form4Example3 && <span className="error" style={{ color: 'red' }}>{errors.form4Example3}</span>}
                            </div>
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
                                <label className="form-check-label" htmlFor="form4Example4">
                                    Wyślij do mnie kopię tego e-maila
                                </label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn-new-size-1 btn btn-primary btn-block">Wyślij</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="row gx-lg-5">
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-headset fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Obsługa klienta</p>
                                        <p className="text-muted mb-0">klient@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-dollar-sign fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Marketing</p>
                                        <p className="text-muted mb-0">marketing@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-at fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Reklamacje</p>
                                        <p className="text-muted mb-0">reklamacje@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-award fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Media</p>
                                        <p className="text-muted mb-0">media@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-newspaper fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Kariera</p>
                                        <p className="text-muted mb-0">kariera@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-md-5">
                                <div className="d-flex align-items-start">
                                    <div className="p-3 badge-primary rounded-4">
                                        <i className="fas fa-recycle fa-lg fa-fw"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="fw-bold mb-1">Zwroty</p>
                                        <p className="text-muted mb-0">zwroty@goodclothes.com</p>
                                        <p className="text-muted mb-0">+48 234-567-891</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
