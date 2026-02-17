import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const NewClothesCollectionImage = () => {
    return (

        <Card className="bg-dark text-white">

            <Card.Img className="new-products-img" src="/Shop_GOOD_Clothes/image/store-906722_1280.jpg" alt="Card image" />

            <Card.ImgOverlay>
                <Card.Title className="new-products text-big">Nowości</Card.Title>
                <Button className="button-collection text-big" type="submit">Zobacz kolekcje</Button>
            </Card.ImgOverlay>

        </Card>



    )

}