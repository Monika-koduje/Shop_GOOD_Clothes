import Container from 'react-bootstrap/Container';
import '../css/App.css';
import '../css/Spinner.css'
import { Search } from '../components/Search'
import { Promotions } from '../components/Promotions';
import { CarouselImageDesc } from '../components/CarouselImageDesc'
import { NewOldClothesCollectionImage } from '../components/NewOldClothesCollectionImage'
import { ClothesCollectionImageDesc } from '../components/ClothesCollectionImageDesc'
import { NewClothesCollectionImage } from '../components/NewClothesCollectionImage'


export const MainPage = () => {

    return (
        <>
            <Container fluid className="container">


                <div class="row">

                    <Search />

                    <Promotions />

                    <div class="col-lg-12">

                        <CarouselImageDesc />

                    </div>


                </div>

                <div>

                    <NewOldClothesCollectionImage />

                    <ClothesCollectionImageDesc />

                    <NewClothesCollectionImage />

                </div>










            </Container>




        </>
    )
}