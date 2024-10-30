import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { SiMoneygram } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import { ThankYouShop } from '../components/ThankYouShop';
import { Item } from './AddItemToBasketShop';


export const Basket = () => {
    const [cartItems, setCartItems] = useState([
        { id: '111222', name: 'Bluza', size: '38', quantity: 1, category: 'Ubrania letnie', imageUrl: '/image/fashion-2.jpg', price: 200 },
        { id: '333222', name: 'Sukienka', size: 'M', quantity: 1, category: 'Ubrania wiosenne', imageUrl: '/image/woman-2.jpg', price: 430 },
        { id: '333444', name: 'Kurtka', size: 'XL', quantity: 1, category: 'Ubrania zimowe', imageUrl: '/image/ai-generated-2.jpg', price: 110 }
    ]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedBank, setSelectedBank] = useState(null);
    const [showModal, setShowModal] = useState(false); 
    const [showError, setShowError] = useState(false); 

    const handleCloseModal = () => {
        setShowModal(false);
        clearBasket(); 
        setSelectedDelivery(null); 
        setSelectedPayment(null); 
        setSelectedBank(null); 
        setShowError(false); 
    }

    const navigate = useNavigate();

    const deliveryOptions = [
        { id: 'dpd', name: 'Kurier DPD', price: 15 },
        { id: 'inpost-courier', name: 'Kurier InPost', price: 10 },
        { id: 'inpost-paczkomat', name: 'Paczkomat InPost', price: 8 }
    ];

    const paymentOptions = [
        { id: 'traditional', name: 'Przelew tradycyjny' },
        { id: 'cash', name: 'Płatność przy odbiorze' },
        { id: 'online', name: 'Szybki przelew online' }
    ];

    const bankOptions = [
        { id: 'bank1', name: 'Bank PKO BP' },
        { id: 'bank2', name: 'Bank PEKAO' },
        { id: 'bank3', name: 'Bank Credit Agricole' }
    ];

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allItemIds = cartItems.map(item => item.id);
            setSelectedItems(allItemIds);
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleSelectDelivery = (optionId) => {
        setSelectedDelivery(optionId);
        setShowError(false); 
    };

    const handleSelectPayment = (optionId) => {
        setSelectedPayment(optionId);
        if (optionId !== 'online') {
            setSelectedBank(null);
        }
        setShowError(false); 

    const handleSelectBank = (bankId) => {
        setSelectedBank(bankId);
    };

    const handleDeleteItem = (itemId) => {
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setSelectedItems(selectedItems.filter(id => id !== itemId));
        setCartItems(updatedItems);
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleBuy = () => {
        
        if (selectedItems.length === 0 || !selectedDelivery || !selectedPayment) {
            setShowError(true); 
        } else {

            setCartItems([]);
            setSelectedItems([]);
            setSelectedDelivery(null);
            setSelectedPayment(null);
            setShowError(false); 

            setShowModal(true);
        }
    };

    const clearBasket = () => {
        setCartItems([]);
        setSelectedItems([]);
    };

    const selectedDeliveryPrice = selectedDelivery ? deliveryOptions.find(option => option.id === selectedDelivery).price : 0;

    const totalItemsPrice = selectedItems.reduce((total, itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        return total + (item ? item.price : 0);
    }, 0);

    const totalAmount = totalItemsPrice + selectedDeliveryPrice;

    return (
        <>
            <Container>
                <h3 className="m-5 fa-style"><BsFillBasket2Fill />  Twój koszyk</h3>

                <section className="m-5">
                    <Table striped bordered hover className="custom-table">
                        <thead className="text-center">
                            <tr>
                                <th>Nr zamówienia:</th>
                                <th>332113142</th>
                            </tr>
                            <tr>
                                <th>Usuń</th>
                                <th>Nr katalogowy</th>
                                <th>Nazwa</th>
                                <th>Rozmiar</th>
                                <th>Ilość</th>
                                <th>Kategoria</th>
                                <th>Podgląd wyglądu</th>
                                <th>Cena (zł)</th>
                                <th>
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        id="select-all"
                                        checked={selectedItems.length === cartItems.length}
                                        onChange={handleSelectAll}
                                    />Zaznacz
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td className="delete-item" onClick={() => handleDeleteItem(item.id)}>✕</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.size}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <Link to={`/item/${item.id}`}>
                                            <Image
                                                className="img-size"
                                                src={item.imageUrl}
                                                thumbnail
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </Link>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleSelectItem(item.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <section className="size-price d-inline-flex p-2 bd-highlight">
                        <div>
                            <p>Cena za produkty:</p>
                        </div>
                        <div className="size-price">
                            <p>{totalItemsPrice} zł</p>
                        </div>
                    </section>
                </section>

                <section>
                    <h3 className="m-5 fa-style"><FaBoxOpen /> Informacje o dostawie</h3>

                    {deliveryOptions.map(option => (
                        <div className="form-check d-flex mb-4" key={option.id}>
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                id={option.id}
                                checked={selectedDelivery === option.id}
                                onChange={() => handleSelectDelivery(option.id)}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                                {option.name} (+{option.price} zł)
                            </label>
                        </div>
                    ))}
                </section>

                <section>
                    <h3 className="m-5 fa-style"><FaMoneyCheckDollar /> Płatności</h3>

                    {paymentOptions.map(option => (
                        <div className="form-check d-flex mb-4" key={option.id}>
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                id={option.id}
                                checked={selectedPayment === option.id}
                                onChange={() => handleSelectPayment(option.id)}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                                {option.name}
                            </label>
                        </div>
                    ))}

                    {selectedPayment === 'online' && (
                        <section>
                            <h4 className="style-h4 fa-style"><SiMoneygram /> Wybierz bank <BsBank2 /></h4>
                            {bankOptions.map(bank => (
                                <div className="form-check d-flex mb-4" key={bank.id}>
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        id={bank.id}
                                        checked={selectedBank === bank.id}
                                        onChange={() => handleSelectBank(bank.id)}
                                    />
                                    <label className="form-check-label" htmlFor={bank.id}>
                                        {bank.name}
                                    </label>
                                </div>
                            ))}
                        </section>
                    )}
                </section>

                <section className="size-price d-inline-flex p-2 bd-highlight">
                    <div>
                        <p>Całkowita kwota do zapłaty (+ koszt dostawy):</p>
                    </div>
                    <div className="size-price">
                        <p className="p-bold">{totalAmount} zł</p>
                    </div>
                </section>

                {showError && <p className="text-danger">Wybierz metodę płatności oraz dostawy, oraz dodaj przedmioty do koszyka, aby dokonać zakupu.</p>}
                
                <div className="d-flex justify-content-center">
                   
                    <button
                        type="button"
                        className="fa-style size-price btn btn-primary btn-block mb-4"
                        onClick={handleBuy}
                        disabled={selectedItems.length === 0 || !selectedDelivery || !selectedPayment}
                    >
                        Kupuj <FaMoneyBillTrendUp />
                    </button>

                    <ThankYouShop showModal={showModal} handleCloseModal={handleCloseModal} />

                    <button
                        type="button"
                        className="fa-style size-price btn btn-primary btn-block mb-4"
                        onClick={handleCancel}
                    >
                        Anuluj <RxCross1 />
                    </button>
                    
                </div>
                <p className="text-center">Wybierz przedmiot, metodę dostawy oraz płatności, aby dokonać zakupu.</p>
            </Container>


        </>
       );

    };
};
