import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";





export const Kids = () => {
    const [inCart, setInCart] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

    const handleAddToCart = () => {
        if (cartItems) {
            const existingItem = cartItems.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += addedQuantity;
                setCartItems([...cartItems]); 
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

    return (
        <Container>
            <Row>
                <h3 className="text-center">Kolekcja dla dzieci</h3>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={3}>
                    <Image src="/image/7.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}

                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/8.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/12.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={3}>
                    <Image src="/image/13.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/37.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/36.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={3}>
                    <Image src="/image/11.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/17.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/15.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={3}>
                    <Image src="/image/16.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/14.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
                <Col xs={6} md={3}>
                    <Image src="/image/fashion-1283863_1920.jpg" thumbnail />
                    {!inFavorites ? (
                        <button type="button" className="size-price btn btn-primary-hover-2 btn-block mb-4" onClick={handleAddToFavorites}>
                            <FaHeart />
                        </button>
                    ) : (
                        <button type="button" className="size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromFavorites}>
                            <FaHeart />
                        </button>
                    )}
                    {!inCart ? (
                        <button type="button" className="fa-style size-price btn  btn-primary-hover-2 btn-block mb-4" onClick={handleAddToCart}>
                            <BsFillBasket2Fill />
                        </button>
                    ) : (
                        <button type="button" className="fa-style size-price btn btn-danger btn-block mb-4" onClick={handleRemoveFromCart}>
                            <BsFillBasket2Fill />
                        </button>
                    )}
                </Col>
            </Row>
        </Container>
    );
}


