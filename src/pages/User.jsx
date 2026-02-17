import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { orders } from './../assets/data/data_orders'
import { HistoryActivity } from '../components/HistoryActivity';
import { UserHelper } from '../components/UserHelper';
import { IoMdContact } from "react-icons/io";
import { UserData } from '../components/UserData';

export const User = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        orderNumber: '',
        minPrice: '',
        maxPrice: '',
        category: '',
    });
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [errors, setErrors] = useState({});

    <orders />


    useEffect(() => {
        const filterOrders = () => {
            const filtered = orders.filter(order => {
                const categoryMatches = searchCriteria.category === '' || searchCriteria.category === 'Wszystko' || order.category.toLowerCase().includes(searchCriteria.category.toLowerCase());
                return (
                    order.orderNumber.includes(searchCriteria.orderNumber) &&
                    order.name.toLowerCase().includes(searchCriteria.name.toLowerCase()) &&
                    (searchCriteria.minPrice === '' || order.price >= parseFloat(searchCriteria.minPrice)) &&
                    (searchCriteria.maxPrice === '' || order.price <= parseFloat(searchCriteria.maxPrice)) &&
                    categoryMatches
                );
            });
            setFilteredOrders(filtered);
        };

        filterOrders();
    }, [searchCriteria]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;


        if ((name === 'minPrice' || name === 'maxPrice') && parseFloat(value) < 0) {
            setErrors({ ...errors, [name]: 'Nie można wprowadzać liczb ujemnych.' });
            return;
        }

        setErrors({ ...errors, [name]: '' });
        setSearchCriteria({ ...searchCriteria, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!/^[a-zA-Z\s]*$/.test(searchCriteria.name)) {
            newErrors.name = 'Nazwa musi zawierać tylko litery';
        }
        if (searchCriteria.name.length < 3) {
            newErrors.name = 'Nazwa musi mieć co najmniej 3 znaki';
        }
        if (searchCriteria.name.length >= 20) {
            newErrors.name = 'Nazwa musi mieć max 20 znaków';
        }


        if (searchCriteria.minPrice && isNaN(searchCriteria.minPrice)) {
            newErrors.minPrice = 'Cena od musi być liczbą';
        }
        if (searchCriteria.maxPrice && isNaN(searchCriteria.maxPrice)) {
            newErrors.maxPrice = 'Cena do musi być liczbą';
        }
        if (parseFloat(searchCriteria.minPrice) > parseFloat(searchCriteria.maxPrice)) {
            newErrors.maxPrice = 'Cena do musi być większa lub równa cenie od';
        }




        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            filterOrders();
        }
    };


    const location = useLocation();
    const { login } = location.state || { login: 'Nieznany użytkownik' };

  
    const uniqueOrderNumbers = Array.from(new Set(orders.map(order => order.orderNumber)));

    return (
        <Container>
            <h3 className="m-5"><span className="helper"><IoMdContact /></span> Witaj <strong>{login}</strong>!</h3>

            <section className="m-5">
                <Table striped bordered hover>
                    <UserData />
                </Table>
            </section>

            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Wyszukaj Twoje zamówienia</Accordion.Header>
                    <Accordion.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={searchCriteria.name}
                                            onChange={handleInputChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nr zamówienia</Form.Label>
                                        <Form.Select
                                            name="orderNumber"
                                            value={searchCriteria.orderNumber}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Wybierz</option>
                                            {uniqueOrderNumbers.map(orderNumber => (
                                                <option key={orderNumber} value={orderNumber}>{orderNumber}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="minPrice"
                                            value={searchCriteria.minPrice}
                                            onChange={handleInputChange}
                                            isInvalid={!!errors.minPrice}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.minPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="maxPrice"
                                            value={searchCriteria.maxPrice}
                                            onChange={handleInputChange}
                                            isInvalid={!!errors.maxPrice}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.maxPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj kategorii</Form.Label>
                                        <Form.Select
                                            name="category"
                                            value={searchCriteria.category}
                                            onChange={handleInputChange}
                                        >
                                            <option value="Wszystko">Wszystko</option>
                                            <option value="Ubrania sportowe">Ubrania sportowe</option>
                                            <option value="Ubrania zimowe">Ubrania zimowe</option>
                                            <option value="Ubrania letnie">Ubrania letnie</option>
                                            <option value="Ubrania wiosenne">Ubrania wiosenne</option>
                                            <option value="Ubrania jesienne">Ubrania jesienne</option>
                                            <option value="Dodatki">Dodatki</option>
                                            <option value="Buty">Buty</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex btn-sent-chat">
                                <button type="submit" className="btn btn-primary">Szukaj</button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



            <section className="m-5">
                <Table className="text-center" striped bordered hover>
                    <thead className="th-client">
                        <tr>
                            <th>Nr zamówienia:</th>
                            <th>Nr katalogowy</th>
                            <th>Nazwa</th>
                            <th>Rozmiar</th>
                            <th>Ilość</th>
                            <th>Kategoria</th>
                            <th>Podgląd wyglądu</th>
                            <th>Cena (zł)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id}>
                                <td>{order.orderNumber}</td>
                                <td>{order.catalogNumber}</td>
                                <td>{order.name}</td>
                                <td>{order.size}</td>
                                <td>{order.quantity}</td>
                                <td>{order.category}</td>
                                <td>
                                    <Image thumbnail className="img-carousel img-size" src={order.imageUrl} />
                                </td>
                                <td>{order.price}</td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
            </section>



            <Row>
                <Col>
                    <section className="m-5">
                        <UserHelper />
                    </section>
                </Col>
                <Col>
                    <section className="m-5">
                        <Table className="text-center" striped bordered hover>
                            <HistoryActivity />
                        </Table>
                    </section>
                </Col>
            </Row>

        </Container >
    );
};
