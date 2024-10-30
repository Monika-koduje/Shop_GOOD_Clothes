import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ClothesCollectionImageDesc = () => {
    return (

            <Row>
                <Col>
                    <Card className="card-icon">
                   
                    <Button className="button-collection" ><Card.Img variant="top" src="/image/ai-generated-7981929_1280.jpg" /></Button>
                        <Card.Body>
                            <Card.Title>Sukienki</Card.Title>
                            <Card.Text>
                                Nowości z letniej kolekcji
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-icon">
                    
                    <Button className="button-collection" ><Card.Img variant="top" src="image/ai-generated-8208064_1280.jpg" /></Button>
                        <Card.Body>
                            <Card.Title>Komplety</Card.Title>
                            <Card.Text>
                                Dodatki, kapelusze, tuniki
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-icon">
                    
                    <Button className="button-collection" ><Card.Img variant="top" src="image/shoes-8212405_1280.jpg" /></Button>
                        <Card.Body>
                            <Card.Title>Buty</Card.Title>
                            <Card.Text>
                                Sportowe buty, zegarki
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className="card-icon">
                   
                    <Button className="button-collection" > <Card.Img variant="top" src="image/woman-8704204_1280.jpg" /></Button>
                        <Card.Body>
                            <Card.Title>Dresy</Card.Title>
                            <Card.Text>
                                Komplety sportowe
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

    )

}