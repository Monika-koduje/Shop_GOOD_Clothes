import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const NewOldClothesCollectionImage = () => {


    return (

        <>




            <div class="row">

                <div class="col-md-6">

                    <Card>

                        
                        

                        <Card.Body>

                            <Card.Text className="text-big big">
                                Nowa kolekcja
                            </Card.Text>

                        </Card.Body>
                        <Button className="button-collection" type="submit"><Card.Img variant="top" src="/image/8.jpg" /></Button>
                        
                    </Card>

                </div>

                <div class="col-md-6">

                    <Card>

                        

                        <Card.Body>

                            <Card.Text className="text-big big">
                                Ostatnie sztuki
                            </Card.Text>
                            
                        </Card.Body>
                        <Button className="button-collection" type="submit"><Card.Img variant="top" src="/image/christmas-2971961_1280.jpg" /></Button>
                    </Card>

                </div>

            </div>




            <div class="row">

                <div class="col-md-6">

                    <Card>
                        <Card.Body>

                            <Card.Text className="text-big">
                                Wyprzedaż zimowej kolekcji
                            </Card.Text>

                        </Card.Body>
                        <Button className="button-collection" type="submit"><Card.Img variant="bottom" src="/image/woman-600225_1280.jpg" /></Button>
                        

                    </Card>

                </div>

                <div class="col-md-6">

                    <Card>
                        <Card.Body>

                            <Card.Text className="text-big">
                                Okazje promocyjne
                            </Card.Text>

                        </Card.Body>
                        <Button className="button-collection" type="submit"><Card.Img variant="bottom" src="/image/woman-3040029_1280.jpg" /></Button>
                        

                    </Card>

                </div>

            </div>






        </>

    )

}