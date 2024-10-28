import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


export const CarouselImageDesc = () => {
    return (
        <Carousel>

            <Carousel.Item className="carousel-img">

                <Image className="img-carousel" src="/image/fashion-8012239_1280.jpg" />

                <Carousel.Caption className="desc-img-carousel">
                    <h3 className="img-desc">Ubrania codzienne</h3>
                    <p className="img-desc img-p">Wygodne stroje</p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>

                <Image className="img-carousel" src="/image/hangers-1850082_1280.jpg" />

                <Carousel.Caption className="desc-img-carousel">
                    <h3 className="img-desc">Kurtki</h3>
                    <p className="img-desc img-p">Okazjonalne ceny</p>
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>

                <Image className="img-carousel" src="/image/fashion-1283863_1920.jpg" />

                <Carousel.Caption className="desc-img-carousel">
                    <h3 className="img-desc">Buty</h3>
                    <p className="img-desc img-p">
                        Zobacz najnowsze trendy
                    </p>
                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
    )

}




























