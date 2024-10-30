import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export const Item = ({ item, cartItems, setCartItems, toggleFavorite }) => {
    const [product, setProduct] = useState({
        id: '54321',
        name: 'Sweter luxus',
        imageUrl: '/image/fashion-1.jpg',
        code: '12345',
        catalogNumber: '54321',
        category: 'Kobieta',
        size: 'M',
        price: 200,
        description: 'Wysokiej jakości produkt w granatowe i szare pasy, długi rękaw, skład: 100% bawełna',
        additionalInfo: '⚠ Darmowa dostawa przy zakupie za kwotę min. 200zł'
    });

    const [quantity, setQuantity] = useState(1);
    const [addedQuantity, setAddedQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const [inCart, setInCart] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    const navigate = useNavigate();

    const descriptionRef = useRef(null);
    const additionalInfoRef = useRef(null);

    useEffect(() => {
        adjustTextareaHeight(descriptionRef.current);
        adjustTextareaHeight(additionalInfoRef.current);
    }, [product.description, product.additionalInfo]);

    useEffect(() => {
        setTotalPrice(addedQuantity * product.price);
    }, [addedQuantity, product.price]);

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);
        setQuantity(newQuantity);
    };

    const handleAddedQuantityChange = (e) => {
        const newAddedQuantity = Number(e.target.value);
        setAddedQuantity(newAddedQuantity);
    };

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setProduct({ ...product, size: newSize });
    };

    const adjustTextareaHeight = (element) => {
        if (element) {
            element.style.height = 'auto';
            element.style.height = `${element.scrollHeight}px`;
        }
    };

    const handleDescriptionChange = (e) => {
        setProduct({ ...product, description: e.target.value });
        adjustTextareaHeight(e.target);
    };

    const handleAdditionalInfoChange = (e) => {
        setProduct({ ...product, additionalInfo: e.target.value });
        adjustTextareaHeight(e.target);
    };

    const handleAddToCart = () => {
        if (cartItems) {
            const existingItem = cartItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += addedQuantity;
                setCartItems([...cartItems]); 
            } else {
                const newItem = {
                    ...product,
                    quantity: addedQuantity
                };
                setCartItems([...cartItems, newItem]); 
            }
            setInCart(true);
        }
    };

    const handleRemoveFromCart = () => {
        if (cartItems) {
            const updatedItems = cartItems.filter(item => item.id !== product.id);
            setCartItems(updatedItems); 
            setInCart(false);
        }
    };

    const handleAddToFavorites = () => {
        toggleFavorite(product);
        setInFavorites(true);
    };

    const handleRemoveFromFavorites = () => {
        toggleFavorite(product);
        setInFavorites(false);
    };

    const handleCancel = () => {
        setQuantity(1);
        setAddedQuantity(1);
        setProduct({ ...product, size: 'M' });
        navigate('/');
    };

    return (
        <Container>
            <div className="div-prop d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center style-h3">{product.name}</h3>
                        <div className="col text-center">
                            <Image className="img-carousel img-size-1" src={product.imageUrl} />
                        </div>
                        <Form>
                            <Row>
                                <Tabs defaultActiveKey="danePodstawowe" id="DaneUbrania" className="mb-3 stype-padding style-h3" variant="">
                                    <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Kod</Form.Label>
                                                    <Form.Control type="text" value={product.code} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nr katalogowy</Form.Label>
                                                    <Form.Control type="text" value={product.catalogNumber} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Ilość</Form.Label>
                                                    <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nazwa</Form.Label>
                                                    <Form.Control type="text" value={product.name} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Kategoria</Form.Label>
                                                    <Form.Control type="text" value={product.category} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Rozmiar</Form.Label>
                                                    <Form.Select value={product.size} onChange={handleSizeChange}>
                                                        <option value="XL">XL</option>
                                                        <option value="L">L</option>
                                                        <option value="M">M</option>
                                                        <option value="S">S</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="cena" title="Cena">
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Cena</Form.Label>
                                                    <Form.Control type="text" value={product.price} readOnly />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Dodana ilość</Form.Label>
                                                    <Form.Control type="number" value={addedQuantity} onChange={handleAddedQuantityChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Cena całkowita</Form.Label>
                                                    <Form.Control type="text" value={totalPrice} readOnly />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="uwagi" title="Opis produktu">
                                        <Row>
                                            <Col xs={8}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Opis</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        value={product.description}
                                                        onChange={handleDescriptionChange}
                                                        ref={descriptionRef}
                                                        rows={1}
                                                        style={{ resize: 'true', overflow: 'none' }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Dodatkowe informacje</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        value={product.additionalInfo}
                                                        onChange={handleAdditionalInfoChange}
                                                        ref={additionalInfoRef}
                                                        rows={1}
                                                        style={{ resize: 'true', overflow: 'none' }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </Row>
                        </Form>
                        <div className="d-flex justify-content-center">
                            {!inFavorites ? (
                                <button type="button" className="size-price btn btn-primary-hover btn-block mb-4" onClick={handleAddToFavorites}>
                                    <FaHeart />
                                </button>
                            ) : (
                                <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                                    <FaHeart />
                                </button>
                            )}
                            {!inCart ? (
                                <button type="button" className="fa-style size-price btn btn-primary btn-block mb-4" onClick={handleAddToCart}>
                                    Dodaj do <BsFillBasket2Fill />
                                </button>
                            ) : (
                                <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                                    Usuń z <BsFillBasket2Fill />
                                </button>
                            )}
                            <button type="button" className="fa-style size-price btn btn-primary btn-block mb-4" onClick={handleCancel}>
                                Anuluj <RxCross1 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
