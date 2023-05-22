import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import VerticalTabs from "../components/produkter/produktSektion";
import SimpleBottomNavigation from "../components/produkter/iconBar";
import HeroVideo from "../components/produkter/produktVideo";

import '../styles/Produkter.css';
import Prisliste from "../components/produkter/prisListe";



function Products() {
    return (

        <div className="Products">     
            <Container fluid>   
                
                <div className='hero-section'>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12} >
                            <figure className='position-relative'>
                                <HeroVideo/>
                            </figure>
                            <div className="hero-video-data text-center">
                                <h1>Discover <span style={{color:'#3C9FE1'}}>
                                    NanoScale</span><br/>
                                    Your integrated platform for molecular
                                </h1>
                                <p class="text-muted lead">Med vores gennemførende VR teknologi, vil alt indlæring være muligt!</p>
                                <hr></hr>
                                <div className='hero-btn-group mt-4 g-4'>
                                    <SimpleBottomNavigation/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="produkt-sektion">
                    <Row>
                        <Col>
                            <div className="produkt-sektion-titel text-center">
                                <h2>Vores Produkter</h2>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VerticalTabs/>
                        </Col>
                    </Row>
                </div>

                <div className="ydelser-sektion">
                    <div className="ydelser-titel text-center">
                        <Row>
                            <Col>
                                <h2>Hvad kan vi tilbyde af ydelser?</h2>
                                <hr></hr>
                            </Col>
                        </Row>
                    </div>
                    <Prisliste/>
                </div>

            </Container>
        </div>
    );
}


export default Products;