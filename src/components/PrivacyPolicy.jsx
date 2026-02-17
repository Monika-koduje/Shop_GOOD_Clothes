import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import '../css/App.css';

export const PrivacyPolicy = ({ isOpen, onRequestClose }) => {
    return (
        <Container>
            <Modal className= "modal-size" show={isOpen} onHide={onRequestClose} centered>
                <Modal.Header closeButton className="modal-header-custom">
                    <Modal.Title>Polityka prywatności</Modal.Title>
                </Modal.Header> 
                <Modal.Body className="modal-img modal-body-privacy">
                    <p><strong>1. Wprowadzenie</strong><br />
                        Twoja prywatność jest dla nas bardzo ważna. Niniejsza polityka prywatności opisuje, jakie informacje zbieramy, jak je wykorzystujemy oraz jakie masz prawa i możliwości.
                    </p>
                    <p><strong>2. Zbieranie informacji</strong><br />
                        Zbieramy informacje, które podajesz nam bezpośrednio, na przykład podczas rejestracji konta, subskrypcji newslettera lub kontaktowania się z nami. Informacje te mogą obejmować Twoje imię, nazwisko, adres e-mail oraz hasło.
                    </p>
                    <p><strong>3. Wykorzystanie informacji</strong><br />
                        Wykorzystujemy zebrane informacje do różnych celów, w tym do:
                        <ul>
                            <li>Świadczenia i utrzymywania naszych usług</li>
                            <li>Komunikowania się z Tobą</li>
                            <li>Wysyłania Ci aktualizacji i informacji marketingowych</li>
                            <li>Personalizowania Twojego doświadczenia</li>
                        </ul>
                    </p>
                    <p><strong>4. Udostępnianie informacji</strong><br />
                        Nie udostępniamy Twoich danych osobowych osobom trzecim bez Twojej zgody, z wyjątkiem sytuacji, gdy jest to wymagane przez prawo lub niezbędne do świadczenia naszych usług.
                    </p>
                    <p><strong>5. Bezpieczeństwo</strong><br />
                        Dbamy o bezpieczeństwo Twoich danych i stosujemy odpowiednie środki techniczne oraz organizacyjne, aby chronić Twoje dane przed nieautoryzowanym dostępem, utratą, zniszczeniem lub zmianą.
                    </p>
                    <p><strong>6. Twoje prawa</strong><br />
                        Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia oraz ograniczenia ich przetwarzania. Możesz również wycofać swoją zgodę na przetwarzanie danych w dowolnym momencie.
                    </p>
                    <p><strong>7. Pliki cookies</strong><br />
                        Nasza strona internetowa może korzystać z plików cookies, aby ulepszyć funkcjonalność i ułatwić korzystanie z niej. Pliki cookies to małe pliki tekstowe, które są przechowywane na Twoim urządzeniu.
                    </p>
                    <p><strong>8. Kontakt</strong><br />
                        Jeśli masz pytania dotyczące naszej polityki prywatności, skontaktuj się z nami pod adresem e-mail: <i>privacy@goodclothes.com</i>
                    </p>
                    <p><strong>9. Zmiany w polityce prywatności</strong><br />
                        Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. Wszelkie zmiany zostaną opublikowane na tej stronie. Zachęcamy do regularnego przeglądania naszej polityki prywatności, aby być na bieżąco z informacjami o tym, jak chronimy Twoje dane.
                    </p>
                </Modal.Body>
                <Modal.Footer className="modal-footer modal-header-custom">
                    <Button variant="primary" className="btn btn-primary btn-block mb-4" onClick={onRequestClose}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};


