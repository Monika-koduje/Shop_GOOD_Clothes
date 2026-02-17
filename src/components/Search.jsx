import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Search = () => {
    return (

        <Navbar className="bg-body-tertiary justify-content-between nav-background">

            <Form inline>
            </Form>

            <Form inline>

                <Row>

                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Szukaj ubrania"
                            className=" mr-sm-2"
                        />
                    </Col>

                    {/*<Col xs="auto">*/}
                    {/*    <Button className="button-submit" type="submit">Szukaj</Button>*/}
                    {/*</Col>*/}

                </Row>

            </Form>

        </Navbar>
    )

}