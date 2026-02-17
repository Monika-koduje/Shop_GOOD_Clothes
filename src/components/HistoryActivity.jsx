import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export const HistoryActivity = () => {


    const [showHistory, setShowHistory] = useState(false);

    const toggleHistory = () => {
        setShowHistory(!showHistory);
    };

    const userActivity = [
        { timestamp: '14 czerwca 2024, 10:30', action: 'Zalogowanie na konto' },
        { timestamp: '14 czerwca 2024, 10:35', action: 'Przeglądanie kategorii "Ubrania sportowe"' },
        { timestamp: '14 czerwca 2024, 10:50', action: 'Dodanie do koszyka buty sportowe' },
        { timestamp: '15 czerwca 2024, 11:20', action: 'Przeglądanie kategorii "Ubrania letnie"' },
        { timestamp: '15 czerwca 2024, 11:40', action: 'Przeglądanie szczegółów zamówienia nr 332113142' },
        { timestamp: '16 czerwca 2024, 12:00', action: 'Edytowanie danych personalnych' },
        { timestamp: '16 czerwca 2024, 14:20', action: 'Przeglądanie kategorii "Dodatki"' },
        { timestamp: '17 czerwca 2024, 09:45', action: 'Przeglądanie kategorii "Buty"' },
        { timestamp: '17 czerwca 2024, 10:00', action: 'Przeglądanie kategorii "Ubrania zimowe"' },
        { timestamp: '17 czerwca 2024, 10:30', action: 'Przeglądanie kategorii "Ubrania jesienne"' },
        { timestamp: '17 czerwca 2024, 10:45', action: 'Przeglądanie szczegółów zamówienia nr 332113222' },
        { timestamp: '17 czerwca 2024, 11:10', action: 'Wylogowanie się z aplikacji' },
    ];

    return (
        <Container>
            <div className="m-5">
                <h4>Historia aktywności</h4>
                <Button variant="primary" onClick={toggleHistory}>
                    {showHistory ? 'Schowaj' : 'Pokaż'}
                </Button>
                {showHistory && (
                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Czas</th>
                                <th>Akcja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userActivity.map((activity, index) => (
                                <tr key={index}>
                                    <td>{activity.timestamp}</td>
                                    <td>{activity.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </div>
        </Container>
    );
};
