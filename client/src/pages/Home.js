import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge, Button, Card, Image, Col, Row, Container } from 'react-bootstrap';
import { fadeInUp } from 'react-animations';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

import ModalEmail from '../components/CTA/ModalEmail';
import Subscriber from '../components/CTA/Subscriber';
// import ValueCard from '../components/Forside/VærdiCard';
import UserCase from '../components/Forside/userCase';
import Scientist from '../components/Forside/Scientist';
// import Customer from '../components/Forside/Customer';
import FAQ from '../components/Forside/FAQ';
import Video from '../components/Forside/Video';
import ScrollButton from '../components/CTA/ScrollButton';
import UserCaseRight from '../components/Forside/userCaseRight';

import '../styles/Home.css';


const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 }
};
const boxVariant2 = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};
const boxVariant3 = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.4 } },
    hidden: { opacity: 0, scale: 0 }
};



function Home() {

    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = document.documentElement.scrollTop;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
    
        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 100;
    
        setScrollTop(scrolled);
    };
    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);



    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);



    /*READ MORE VALUECARD SECTION START */
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "[Læs Mere]" : " [Vis Mindre]"}
                </span>
            </p>
        );
    };
    /*READ MORE VALUECARD SECTION END */


    return (
        
        <div className="Home">
            <div className="progressMainWrapper">
                <div className="progressMainStyle" style={{ width: `${scrollTop}%` }}></div>
            </div>
            <Container fluid>
                {/*HERO SECTION STARTS*/}
                <div className='hero-wrapper'>
                    <Row>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <div className='hero_info'>
                                <div className='hero-title pt-4'>
                                    <h1>Engager Dine Elever Med Interaktive og Realistiske Simuleringer</h1>
                                </div>
                                <div className='hero-tekst py-2 mx-3'>
                                    <p>Elevate Your Classroom Teaching With Cutting-edge Molecular Simulations And Interactive Virtual Labs.
                                    </p>
                                </div>
                                <div className='hero-btn-body px-4 mx-2 pt-2 pb-2'>
                                    <Button className="hero-btn" variant="outline-light" size="lg" style={{borderRadius:30, maxWidth:300, width:300}}>VORES PRODUKTER</Button>
                                </div>
                                <div className='hero-link mt-4 mx-4 mb-2'>
                                    <i className="fa fa-envelope px-2"></i><Card.Link href="#">Læs Om Vores Platform I Ingeniøren</Card.Link>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            <div className='hero-video'>
                                <Video/>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/*HERO SECTION ENDS*/}


                {/* VÆRDICARD / VALUECARD SECTION STARTS */}
                <div className='værdi-wrapper py-4'>

                    <Row> 
                        <Col sm={12} md={12} lg={12}>
                            <div  className='værdi-text text-center my-4'>
                                <h2>Hvilke værdier bringer vi</h2>
                                <h5 className='text-secondary'>Her vil du kunne læse om vores kerneværdier omkring NanoScale</h5>
                            </div>
                            {/*
                                <div className='værdi-body mb-4'>
                                <div className='valuecard-komponent p-4'>
                                    <ValueCard/>
                                </div>
                            </div>
                             */}
                        </Col>
                    </Row>

                    <Container className='pt-4'>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                            <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant}
                                initial="hidden"
                                animate={control}
                            >
                                <div class="blog-card blog-card-blog">
                                    <div class="blog-card-image">
                                        <a href="/"> <Image className="img" src={require('../img/galleri3.jpg')} style={{width:536,height:278}} alt=''/> </a>
                                    <div class="ripple-cont"></div>
                                    </div>
                                    <div class="blog-table">
                                        <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> Videnskab & Teknik</h6>
                                        <h3 class="blog-card-caption" style={{color:'#3C9FE1'}}>
                                            Molekyler Og VR
                                        </h3>
                                        <p class="blog-card-description"><ReadMore>Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ReadMore></p>
                                        <div class="ftr">
                                            <hr></hr>
                                            <div class="author">
                                                <Image src={require('../img/idea.png')} style={{height:40, width:40}} alt="..." class="avatar img-raised" /> <span>Smart læring</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </motion.div>
                            </Col>
                
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant2}
                                initial="hidden"
                                animate={control}
                                >
                                <div class="blog-card blog-card-blog">
                                    <div class="blog-card-image">
                                        <a href="/"> <Image class="img" src={require('../img/galleri5.jpg')} style={{width:536,height:278}} alt=''/> </a>
                                    <div class="ripple-cont"></div>
                                    </div>
                                    <div class="blog-table">
                                        <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> Teknik & Computer</h6>
                                        <h3 class="blog-card-caption" style={{color:'#3C9FE1'}}>
                                            Hurting Installering
                                        </h3>
                                        <p class="blog-card-description"><ReadMore>Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ReadMore></p>
                                        <div class="ftr">
                                            <hr></hr>
                                            <div class="author">
                                                <Image src={require('../img/molecules.png')} style={{height:40, width:40}} alt="..." class="avatar img-raised" /> <span> Molekylær VR</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </motion.div>
                            </Col>
                    
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant3}
                                initial="hidden"
                                animate={control}
                                >
                                <div class="blog-card blog-card-blog">
                                    <div class="blog-card-image">
                                        <a href="/"> <Image class="img" src={require('../img/galleri4.jpg')} style={{width:536,height:278}} alt=''/> </a>
                                    <div class="ripple-cont"></div>
                                    </div>
                                    <div class="blog-table">
                                        <h6 class="blog-category blog-text-success"><i class="far fa-newspaper"></i> Teknik & Programmer</h6>
                                        <h3 class="blog-card-caption" style={{color:'#3C9FE1'}}>
                                            Interaktiv Leg
                                        </h3>
                                        <p class="blog-card-description"><ReadMore>Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</ReadMore></p>
                                        <div class="ftr">
                                            <hr></hr>
                                            <div class="author">
                                                <Image src={require('../img/research.png')} style={{height:40, width:40}} alt="..." class="avatar img-raised" /> <span>IT & Videskab</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>

                    <Row className='py-4 mt-4' style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                        <Col sm={12} md={10} lg={8} xl={8}>
                            <div className='mere px-4 pb-4'>
                                <Card border="info" className='bg-light' style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                                    <Card.Body>
                                        <Card.Title className='text-center py-1'>
                                            <h3>Hvad Mere Bringer Vi?</h3>
                                        </Card.Title>
                                        <Card.Text className='px-4 text-center' style={{backgroundColor:'white', padding:30, borderRadius:20, margin:20}}>
                                            <p>
                                            With supporting text below as a natural lead-in to additional content.
                                            With supporting text below as a natural lead-in to additional content.<br/><br/>
                                            With supporting text below as a natural lead-in to additional content.
                                            With supporting text below as a natural lead-in to additional content.
                                            </p>
                                        </Card.Text>
                                        <Card.Text className='product-btn text-center'>
                                            <p>Læs Mere Om Vores VR Platform? <Button className='mx-2' variant="primary">Klik her</Button></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
                {/* VÆRDICARD / VALUECARD SECTION ENDS */}



                {/* USER CASES SECTION STARTS */}
                <div className='py-4 my-4'>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <div className='usercase-title text-center my-4 py-4'>
                                <h2>User Cases</h2>
                                <h5 className='text-secondary'>Se hvilket scenarier du kan bruge NanoScale til</h5>
                            </div>
                            <div className='usercase-komponent'>
                                <Container>
                                    <UserCase/>
                                </Container>
                                <Container>
                                    <UserCaseRight/> 
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* USER CASES SECTION ENDS */}



                {/* SCIENTIST SECTION STARTS */}
                <div className='py-4'>
                    <Row className='justify-content-center'>
                        <Col sm={10} md={10} lg={10}>
                            <div className='text-center my-4 py-4'>
                                <h2>Board of Scientist</h2>
                                <h5 className='text-secondary'>Hos NanoScaleSimulation sigter vi efter de bedste vilkår og resulter i følgende områder</h5>
                            </div>
                            <div className='py-2 mb-4'>
                                <Scientist/>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* SCIENTIST SECTION ENDS */}



                {/* CUSTOMER SUCCESS SECTION STARTS */}
                <div className='custom wrapper text-dark py-4'>
                    <Row className='justify-content-center'>
                        <Col sm={12} md={9} lg={9} xl={9}>
                            <div className='custom-titel text-center mt-4 py-4'>
                                <h2>Customer success</h2>
                                <h5 className='text-secondary'>Hos NanoScaleSimulation vægter vi kvalitet på et niveau, som kan tilfredstille alle</h5>
                            </div>
                            {/*
                            <div className='custom-komponent'>
                                <Container>
                                    <Card body className='shadow-lg' style={{borderRadius:30, backgroundColor:'#3C9FE1', display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <Customer/>
                                    </Card>
                                </Container>
                            </div>
                            */}
                        
                            <Container className="profile-page pt-2 pb-4">
                                <div class="custom-card profile-header">
                                    <div class="custom-body">
                                        <Row>
                                            <Col sm={12} md={4} lg={4} xl={4}>
                                                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: `0.2s`, animatioName: fadeInUp}}>
                                                    <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                                                        <div class="social-info"><a href="/"><FaFacebook size={20}/></a><a href="/"><FaTwitter size={20}/></a><a href="/"><FaLinkedin size={20}/></a></div>
                                                    </div>
                                                    <div class="single_advisor_details_info">
                                                        <Badge bg="primary" style={{borderRadius:86}}><h6>JP</h6></Badge>
                                                        <p class="designation">Founder &amp; CEO</p>
                                                        <p>Dato: 03-04:2023</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={12} md={8} lg={8} xl={8}>
                                                <div className='custom-main px-4'>
                                                    <h3 class="m-t-0 m-b-0" style={{color:'#3C9FE1'}}><strong>Jannick</strong> Pedersen</h3>
                                                    <span class="job_post">Fullstack Programmør</span>
                                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                    <hr></hr>
                                                    <h4 className='pt-2 text-center'>Kundens Historie</h4>
                                                    <h6 className='pt-2' style={{color:'#3C9FE1'}}>Erfaring:</h6>
                                                    <p className='pt-2'>Lorem Lorem Lorem Lorem Lorem Lorem
                                                    Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem <br></br>
                                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem<br></br>
                                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorems
                                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem <br></br></p>
                                                    <h6 style={{color:'#3C9FE1'}}>Brugervenlighed:</h6>
                                                    <p>
                                                    Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem <br></br>
                                                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem<br></br>
                                                    </p>
                                                </div>
                                            </Col>                
                                        </Row>
                                    </div>
                                </div>
                            </Container>

                        </Col>
                    </Row>
                </div>
                {/* CUSTOMER SUCCESS SECTION ENDS */}
            

                {/* FAQ SECTION STARTS */}
                <div className='text-dark py-4 my-4'>
                    <Row className='justify-content-center'>
                        <Col sm={12} md={8} lg={8} xl={8}>
                            <div className='text-center mt-4 mb-4'>
                                <h2>FAQ</h2>
                                <h5>Hos NanoScaleSimulation har vi lavet en QA, for at hjæpe med hurtige svar</h5>
                            </div>
                            <div className='FAQ-komponent mb-4'>
                                <FAQ/>
                            </div>
                        </Col>
                    </Row>
                </div>
                 {/* FAQ SECTION ENDS */}
                

                {/* SUBSCRIBER SECTION STARTS */}
                <div className='text-dark'>
                    <Row className='justify-content-center '>
                        <Col sm={12} md={8} lg={8} xl={8}>
                            <div className='subscriber-komponent'>
                                <div class="hero"> 
                                    <div class="hero__title">
                                        <div className='text-center my-2'>
                                            <h2 style={{color:'black'}}>Subscriber</h2>
                                        </div>
                                        <Subscriber/>
                                    </div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
                 {/* SUBSCRIBER SECTION ENDS */}


                {/* GLOBAL COMPONENTS USAGE STARTS */}
                <ModalEmail/>
                <ScrollButton />
                {/* GLOBAL COMPONENTS USAGE ENDS */}

            </Container>
        </div>
    );
};

export default Home;