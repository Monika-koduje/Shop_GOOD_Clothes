import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";





export const Woman = () => {
    const [inCart, setInCart] = useState(false);
    const [inFavorites, setInFavorites] = useState(false);

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

    return (
        <Container>
            <Row>
                <h3 className="text-center">Kolekcja dla kobiet</h3>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={6} md={3}>
                    <Image src="/image/woman-2.jpg" thumbnail />
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
                    <Image src="/image/5.jpg" thumbnail />
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
                    <Image src="/image/6.jpg" thumbnail />
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
                    <Image src="/image/4.jpg" thumbnail />
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
                    <Image src="/image/3.jpg" thumbnail />
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
                    <Image src="/image/2.jpg" thumbnail />
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
                    <Image src="/image/woman-8332162_1280.jpg" thumbnail />
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
                    <Image src="/image/1.png" thumbnail />
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
                    <Image src="/image/fashion-1.jpg" thumbnail />
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
                    <Image src="/image/ai-generated-7981929_1280.jpg" thumbnail />
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
                    <Image src="/image/ai-generated-8208064_1280.jpg" thumbnail />
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
                    <Image src="/image/fashion-8012239_1280.jpg" thumbnail />
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
