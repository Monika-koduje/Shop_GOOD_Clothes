import Container from 'react-bootstrap/Container';
import { SendEmail } from '../components/SendEmail.jsx'
import Image from 'react-bootstrap/Image';


export const AboutUs = () => {
    return (
        <>
            <Container>

                <div className="mail-prop d-flex justify-content-center">

                    <div className="row">



                        <div class="col">

                            <div className="d-flex justify-content-center">
                                <div className="div-log text-big big d-inline-flex">O naszym sklepie <Image className="logo logo-size" src="/image/logo.png" /></div>
                            </div>

                            <p className="form-prop">Działamy na rynku światowym. Istniejemy już od 1999r. Cieszymy się ogromną popularnością. Gwarantujemy zadowolenie i satysfakcję z zakupów. W razie problemów nasza ekipa specjalistów udzieli Państwu pomocy. </p>

                            <div className="d-flex justify-content-center">
                            <img src="image/cafe-3537801_640.jpg" class="mw-100" alt="shop" />
                            </div>

                            <div className="prop-about div-log text-big big">Skontaktuj się z nami</div>

                            <SendEmail />

                            <div className="d-flex justify-content-center">
                                <img src="image/port-8431044_640.jpg" class="mw-100" alt="shop-img" />
                            </div>


                        </div>

                    </div>

                </div>

            </Container>




        </>
    )
}