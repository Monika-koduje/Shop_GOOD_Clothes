import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { SiContactlesspayment } from "react-icons/si";
import { RiContactsBook3Line } from "react-icons/ri";
import { BsFillBasket2Fill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { GrConfigure } from "react-icons/gr";
import { CiLight } from "react-icons/ci";

export const UserData = () => {
    const initialUserData = {
        personalData: {
            firstName: 'Test',
            lastName: 'Testowy',
            email: 'testowy@test.com',
            phone: '123-456-789',
            address: 'ul. Testowa 1, 00-001 Testowa',
        },
        preferences: {
            theme: 'Light',
            notifications: true,
        },
        paymentInfo: {
            cardNumber: '**** **** **** 1234',
            expirationDate: '12/24',
        },
        accountSettings: {
            language: 'PL',
            currency: 'PLN',
        },
        loyaltyPoints: 150,
        reviews: [
            { productId: '12345', rating: 5, review: 'Bardzo dobry produkt.' },
            { productId: '67890', rating: 4, review: 'Świetna jakość, polecam.' },
        ],
        cartItems: [
            { productId: '12345', name: 'Buty sportowe', quantity: 1 },
            { productId: '67890', name: 'Koszulka', quantity: 2 },
        ],
    };

    const [userData, setUserData] = useState(() => {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : initialUserData;
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editingReviewIndex, setEditingReviewIndex] = useState(null);
    const [editedReview, setEditedReview] = useState({ rating: '', review: '' });

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    const handleEditToggle = () => setIsEditing(!isEditing);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            personalData: {
                ...prevData.personalData,
                [name]: value,
            },
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleReviewEditToggle = (index) => {
        if (editingReviewIndex === index) {
            setEditingReviewIndex(null);
        } else {
            setEditingReviewIndex(index);
            setEditedReview(userData.reviews[index]);
        }
    };

    const handleReviewInputChange = (e) => {
        const { name, value } = e.target;
        setEditedReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleReviewSave = (index) => {
        const updatedReviews = [...userData.reviews];
        updatedReviews[index] = editedReview;
        setUserData((prevData) => ({
            ...prevData,
            reviews: updatedReviews,
        }));
        setEditingReviewIndex(null);
    };

    return (
        <Container>
            <div className="data-user-row">
                <Row>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Punkty lojalnościowe <span className="data-user"><MdOutlineCardGiftcard /></span></h5>
                            <p className="mb-2"><strong>Stan punktów:</strong> {userData.loyaltyPoints}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Opinie i recenzje <span className="data-user"><PiMedal /></span></h5>
                            {userData.reviews.map((review, index) => (
                                <div key={index}>
                                    {editingReviewIndex === index ? (
                                        <Form>
                                            <Form.Group controlId={`rating-${index}`}>
                                                <Form.Label>Ocena</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="rating"
                                                    value={editedReview.rating}
                                                    onChange={handleReviewInputChange}
                                                    min="1"
                                                    max="5"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId={`review-${index}`}>
                                                <Form.Label>Recenzja</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    name="review"
                                                    value={editedReview.review}
                                                    onChange={handleReviewInputChange}
                                                />
                                            </Form.Group>
                                            <Button variant="success" onClick={() => handleReviewSave(index)} className="mt-3">Zapisz</Button>
                                        </Form>
                                    ) : (
                                        <>
                                            <p className=" mt-4 mb-2"><strong>Produkt ID:</strong> {review.productId}</p>
                                            <p className="mb-2"><strong>Ocena:</strong> {review.rating}</p>
                                            <p className="mb-2"><strong>Recenzja:</strong> {review.review}</p>
                                            <Button variant="primary" onClick={() => handleReviewEditToggle(index)}>Edytuj</Button>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Koszyk <span className="data-user"><BsFillBasket2Fill /></span></h5>
                            <p className="mb-2"><strong>Liczba produktów:</strong> {userData.cartItems.length}</p>
                            <ul>
                                {userData.cartItems.map((item, index) => (
                                    <li key={index}>
                                        {item.name} 
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Dane osobowe <span className="data-user-1"><RiContactsBook3Line /></span></h5>
                            {isEditing ? (
                                <Form>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={userData.personalData.firstName}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={userData.personalData.lastName}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={userData.personalData.email}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="phone">
                                        <Form.Label>Telefon</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            value={userData.personalData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="address">
                                        <Form.Label>Adres</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={userData.personalData.address}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                    <Button variant="success" onClick={handleSave} className="mt-3">Zapisz</Button>
                                </Form>
                            ) : (
                                <>
                                    <p className="mb-2"><strong>Imię:</strong> {userData.personalData.firstName}</p>
                                    <p className="mb-2"><strong>Nazwisko:</strong> {userData.personalData.lastName}</p>
                                    <p className="mb-2"><strong>Email:</strong> {userData.personalData.email}</p>
                                    <p className="mb-2"><strong>Telefon:</strong> {userData.personalData.phone}</p>
                                    <p className="mb-2"><strong>Adres:</strong> {userData.personalData.address}</p>
                                </>
                            )}
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Dane płatności <span className="data-user-1"><SiContactlesspayment /></span></h5>
                            <p className="mb-2"><strong>Numer karty:</strong> {userData.paymentInfo.cardNumber}</p>
                            <p className="mb-2"><strong>Data ważności:</strong> {userData.paymentInfo.expirationDate}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h5 className="mb-3">Preferencje <span className="data-user-1"><CiLight /></span></h5>
                            <p className="mb-2"><strong>Tło:</strong> {userData.preferences.theme}</p>
                            <p className="mb-2"><strong>Powiadomienia:</strong> {userData.preferences.notifications ? 'Włączone' : 'Wyłączone'}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h4 className="mb-3">Ustawienia konta <span className="data-user"><GrConfigure /></span></h4>
                            <p className="mb-2"><strong>Język:</strong> {userData.accountSettings.language}</p>
                            <p className="mb-2"><strong>Waluta:</strong> {userData.accountSettings.currency}</p>
                        </div>
                    </Col>
                </Row>

                <div className="d-flex btn-sent-chat">
                    <Button variant="primary" onClick={handleEditToggle}>
                        {isEditing ? 'Anuluj' : 'Edytuj profil'}
                    </Button>
                </div>
            </div>
        </Container>
    );
};
