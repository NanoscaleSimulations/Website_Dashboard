
import React from 'react';
import heroimg from "../img/bg_container1.png";
import '../styles/About.css';

import Scrollspy from 'react-scrollspy'
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup, Card, Image } from 'react-bootstrap';

import ModalEmail from '../components/CTA/ModalEmail';
import ScrollButton from '../components/CTA/ScrollButton';

import { BsFillArrowDownCircleFill } from "react-icons/bs";

import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
    animation: 1s 3s 2 ${bounceAnimation};
`;


const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverTwo = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Molecules my G</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const popoverThree = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Electron Binding</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);


function About() {
    return (
        <Container fluid>
            <div className="About-Page">     
                

                <div className='hero-section'>
                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <figure className='position-relative'>
                                <img src={heroimg} alt="heroimg" />
                            </figure>
                            <motion.figcaption 
                                animate={{ x: [0, 300, 0], opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 2,
                                    delay: 0.2,
                                    ease: [0.5, 0.71, 1, 1.5],
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileHover={{ scale: 1.1}}
                            >
                                <h1 className=''>Information Omkring:</h1>
                                <hr></hr>
                                <Scrollspy items={ ['vision', 'hvem', 'projekter'] } currentClassName="is-current" >
                                    <div className='hero-btn-group mt-4 g-4'>
                                        <ButtonGroup className="about-btn btn-sm red me-2 shadow-sm" aria-label="First group" >
                                            <motion.div whileHover={{ scale: 1.1}}>
                                                <Button variant="outline-primary" className='shadow' size="lg" href='#vision' >Vision</Button>{' '}
                                            </motion.div>
                                        </ButtonGroup>
                                        <ButtonGroup className="about-btn btn-sm red me-2 shadow-sm" aria-label="Second group">
                                            <motion.div whileHover={{ scale: 1.1}}>
                                                <Button variant="outline-primary" className='shadow' size="lg" href='#hvem'>Hvem er vi</Button>{' '}
                                            </motion.div>
                                        </ButtonGroup>
                                        <ButtonGroup className="about-btn btn-sm red me-4 shadow-sm" aria-label="Third group">
                                            <motion.div whileHover={{ scale: 1.1}}>
                                                <Button variant="outline-primary" className='shadow' size="lg" href='#projekter'>Projekter</Button>{' '}
                                            </motion.div>    
                                        </ButtonGroup>
                                    </div>
                                </Scrollspy>
                            </motion.figcaption>
                            <div className='hero-icon-section' style={{}}>
                                <BouncyDiv>
                                <BsFillArrowDownCircleFill className='hero-icon' size={60} style={{}}/>
                                </BouncyDiv>
                            </div>
                            
                        </Col>
                    </Row>
                </div>


                <div className='vision-section' id="vision">

                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className='vision-h2 text-center'>
                                <h2>Vores Vision</h2>
                                <h5 className='text-secondary' style={{marginTop:20}}>Læs Om Vores Spænende Vision for NanoScale</h5>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    
                    
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <Image rounded alt="vision" src={require('../img/galleri4.jpg')} />
                                <div className='text-dark text-center pt-2'>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <hr></hr>
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={8} xl={8} className='text-dark'>
                                <div className='vision-brødtekst'>
                                    <p>
                                    Vi gør det muligt for lejere at blive medejere, hvor de løbende kan opspare ejerskab ved at købe en lille bid hver måned. <br></br><br></br> Interesserne bliver på denne måde mere afstemt, da lejer føler ejerskab og passer bedre på boligen. <br></br><br></br>
                                    Dette resulterer i bedre driftsøkonomi for porteføljen af lejligheder. <br></br> Samt giver en sundere og mere bæredygtig gevinst af din investering.
                                    </p>
                                </div>

                                <div className='vision-værdi-sektion text-center p-4 mb-4'>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <div className='vision-værdi' style={{width:'20%', display:'inline-block'}}>
                                            <Image className='w-75' alt="vision" src={require('../img/vr-glasses.png')}  />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverTwo}>
                                        <div className='vision-værdi' style={{width:'20%', display:'inline-block', marginLeft:20, marginRight:20}}>
                                            <Image className='vision-img w-75' alt="vision" src={require('../img/research.png')}  />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverThree}>
                                        <div className='vision-værdi' style={{width:'20%', display:'inline-block'}}>
                                            <Image className='w-75' alt="vision" src={require('../img/molecules.png')}  />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>


                <div className='hvem-sektion my-4' id="hvem">

                    <Row>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <div className='hvem-sektion-h2 text-center'>
                                <h2>Hvem er vi</h2>
                                <h5 className='text-secondary' style={{marginTop:20}}>Læs Om Vores Rolle og Historie</h5>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>

                    <Container>

                        <Row>
                            <Col sm={12} md={3} lg={3} xl={3} >
                                <div className='hvem-profil-img bg-info' style={{borderRadius:84, padding:12}}>
                                    <Image rounded alt="vision" src={require('../img/idea.png')}  />
                                </div>
                                <div className='hvem-profil-navn bg-info'>
                                    <h3>Jannick Pedersen</h3>
                                </div>
                            </Col>
                            <Col sm={12} md={9} lg={9} xl={9}>
                                <div className='hvem-content'>
                                    <div className='hvem-rolle'>
                                        <h4>Min Rolle </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className='hvem-historie'>
                                    <h4>Min Historie</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <hr></hr>

                        <Row>
                            <Col xs={{span: 12, order: 2}} md={{span: 9, order: 2}} lg={{span: 9, order: 1,}} xl={{span: 9, order:1}}>
                                <div className='hvem-content-right'>
                                    <div className='hvem-rolle-right'>
                                        <h4>Min Rolle </h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className='hvem-historie-right'>
                                        <h4>Min Historie</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 2}} lg={{span: 3, order: 2}} xl={{span: 3, order:2}} >
                                <div className='hvem-profil-img-right bg-info' style={{borderRadius:84, padding:12}}>
                                    <Image rounded alt="vision" src={require('../img/idea.png')}  />
                                </div>
                                <div className='hvem-profil-navn-right bg-info'>
                                    <h3>Jannick Pedersen</h3>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>



                <div className='vores-projekter-sektion' id="projekter">
                    <div className='vores-projekter-intro text-center my-4'>
                        <Row>
                            <Col>
                            <div className='vores-projekter-titel mt-4'>
                                <h2>Vores Projekter</h2>
                                <h5 className='text-secondary' style={{marginTop:20}}>Her Vil Du Se Vores Senete Projekter</h5>
                                <hr></hr>
                            </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <div className='vores-projekter-content'>
                        <Container>
                    
                            <Row className='justify-content-center'>
                                <Col xs={12} sm={12} md={12} lg={9} xl={9}>
                                    <Card className='my-4' style={{borderRadius:'20px'}}>
                                        <Row>
                                            <Col xs={12} sm={12} md={3} lg={3} xl={3} className='d-flex align-items-xs-center flex-column'>
                                                <Image className='læs-mere-img-left' alt="vision" src={require('../img/galleri6.jpg')} style={{height:219}} />
                                            </Col>
                                            <Col xs={12} sm={12} md={7} lg={7} xl={7}>
                                                <Card.Body className='læs-mere-body'>
                                                    <Card.Title className='læs-mere-titel'>
                                                        <h4>Project XY, At Roskilde campus</h4>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p>Creating AR experiences is incredibly easy with Hololink's intuitive, browser-based editor. This allows you to create working prototypes in record time.</p>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <p><small class="text-muted">Lavet af: Jannick og Jannick</small></p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={12} sm={12} md={2} lg={2} xl={2} className='læs-mere-row' style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}}>
                                                <div className='card-læs-mere'>
                                                    <Card.Title className='text-center' style={{textDecoration:'none', marginTop:70}}>
                                                        <a href='home' alt="læsMere" style={{textDecoration:'none'}}>
                                                            <h5>Læs<span style={{display:'block', paddingTop:5}}>Mere</span></h5>
                                                        </a>
                                                    </Card.Title>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <Row className='justify-content-center'>
                                <Col xs={12} sm={12} md={12} lg={9} xl={9}>
                                    <Card className='my-4' style={{borderRadius:'20px'}}>
                                        <Row >
                                            <Col xs={{span:12, order:3, offset:0}} sm={{span:12, order:3, offset: 0}} md={{span:2, order:1, offset: 0}} lg={{span:2, order:1, offset: 0}} xl={{span:2, order:1, offset: 0}} className='læs-mere-row' style={{borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}>
                                                <div className="card-læs-mere">
                                                    <Card.Title className='text-center' style={{textDecoration:'none', marginTop:70}}>
                                                        <a href='home' alt="læsMere" style={{textDecoration:'none'}}>
                                                            <h5>Læs<span style={{display:'block', paddingTop:5}}>Mere</span></h5>
                                                        </a>
                                                    </Card.Title>
                                                </div>
                                            </Col>
                                            <Col xs={{span:12, order:2}} sm={{span:12, order:2}} md={{span:7, order:2}} lg={{span:7, order:2}} xl={{span:7, order:2}}>
                                                <Card.Body className='læs-mere-body'>
                                                    <Card.Title className='læs-mere-titel'>
                                                        <h4>Project XY, At Roskilde campus</h4>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p>Creating AR experiences is incredibly easy with Hololink's intuitive, browser-based editor. This allows you to create working prototypes in record time.</p>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <p><small class="text-muted">Lavet af: Jannick og Jannick</small></p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col xs={{span:12, order:1}} sm={{span:12, order:1}} md={{span:3, order:3}} lg={{span:3, order:3}} xl={{span:3, order:3}} className='d-flex align-items-xs-center flex-column'>
                                                <Image className='læs-mere-img' alt="vision" src={require('../img/galleri6.jpg')} style={{height:219}} />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                
                
                        </Container>
                    </div>
                </div>

            <ModalEmail/>
            <ScrollButton/>

            </div>
        </Container> 
    );
}


export default About;