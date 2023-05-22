/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, Form, Image, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import { BsArrowRight, BsFillCheckCircleFill } from 'react-icons/bs';
import { FaWindowClose, FaRegWindowClose } from "react-icons/fa";
import { MdCancel } from "react-icons/md";



export default function Prisliste() {

    const [academicShow, setAcademicShow] = useState(false);
    const [researchShow, setResearchShow] = useState(false);
    const [freeShow, setFreeShow] = useState(false);


    const [academicorder, setAcademicorder] = useState({
        navn: '',
        email: '',
    })
    const PostAcademicorder = async(e)=>{
        e.preventDefault()
        
        const {navn, email}=academicorder;

        const res = await fetch("https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app/academiclist.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            navn,
            email,

            })
            
        })
    }


    const [researchorder, setResearchorder] = useState({
        navn: '',
        email: '',
    })
    const PostResearchorder = async(e)=>{
        e.preventDefault()
        
        const {navn, email}= researchorder;

        const res = await fetch("https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app/researchlist.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            navn,
            email,

            })
            
        })
    }




    return (
        <div className=''>
            <Modal
            size="lg"
            show={academicShow}
            onHide={() => setAcademicShow(false)}
            aria-labelledby="Academic modal"
            animation="fadeIn"
            >
            <Modal.Header closeButton>
                <Modal.Title id="Academic modal">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="container">
                    <div class="text-center mb-2-8 mb-lg-6">
                        <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong class="text-primary font-weight-700">Academic</strong></h2>
                        <span>The trusted source for why choose Academic</span>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div class="pr-md-3">
                                <div class="text-center text-sm-right mb-2-9">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/FFB6C1/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">Backup</h4>
                                    <p class="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div class="text-center text-sm-right">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/87CEFA/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">Support</h4>
                                    <p class="display-30 mb-0">Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="why-choose-center-image">
                                <Image roundedCircle alt="2pacShakur" src={require('../../img/academic.jpg')}></Image>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="pl-md-3">
                                <div class="text-center text-sm-left mb-2-9">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/8A2BE2/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">VR performance</h4>
                                    <p class="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div class="text-center text-sm-left">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/20B2AA/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">AR functionality</h4>
                                    <p class="display-30 mb-0">Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div class="row justify-content-between text-left contactform pt-4 mt-2">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="text" id="name" name="name" placeholder="Fornavn og efternavn" onChange={(e)=> setAcademicorder({...academicorder,navn:e.target.value})}/> 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="email" id="email" name="email" placeholder="Barack@Obama.com" onChange={(e)=> setAcademicorder({...academicorder,email:e.target.value})}/> 
                        </div>
                    </div>
                </Form>
                <Card.Body className='py-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:200, width:200, borderRadius:30, padding:6, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}  onClick={ PostAcademicorder }>
                        BESTIL HER
                        </Button>
                </Card.Body>
            </Modal.Body>
            </Modal>


            <Modal
                size="lg"
                show={researchShow}
                onHide={() => setResearchShow(false)}
                aria-labelledby="Research modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Research modal">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="container">
                    <div class="text-center mb-2-8 mb-lg-6">
                        <h2 class="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong class="text-primary font-weight-700">Research</strong></h2>
                        <span>The trusted source for why choose Research</span>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div class="pr-md-3">
                                <div class="text-center text-sm-right mb-2-9">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/FFB6C1/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">Backup</h4>
                                    <p class="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div class="text-center text-sm-right">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/87CEFA/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">Support</h4>
                                    <p class="display-30 mb-0">Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="why-choose-center-image">
                                <Image roundedCircle alt="2pacShakur" src={require('../../img/research.jpg')}></Image>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <div class="pl-md-3">
                                <div class="text-center text-sm-left mb-2-9">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/8A2BE2/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">VR performance</h4>
                                    <p class="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div class="text-center text-sm-left">
                                    <div class="mb-4">
                                        <img src="https://www.bootdey.com/image/80x80/20B2AA/000000" alt="..." class="rounded-circle" />
                                    </div>
                                    <h4 class="sub-info">AR functionality</h4>
                                    <p class="display-30 mb-0">Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div class="row justify-content-between text-left contactform pt-4 mt-2">
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="text" id="name" name="name" placeholder="Fornavn og efternavn" onChange={(e)=> setResearchorder({...researchorder,navn:e.target.value})}/> 
                        </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="email" id="email" name="email" placeholder="Barack@Obama.com" onChange={(e)=> setResearchorder({...researchorder,email:e.target.value})}/> 
                        </div>
                    </div>
                </Form>
                <Card.Body className='py-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:200, width:200, borderRadius:30, padding:6, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}  onClick={ PostResearchorder }>
                        BESTIL HER
                        </Button>
                </Card.Body>
                </Modal.Body>
            </Modal>



            <Modal
                size="lg"
                show={freeShow}
                onHide={() => setFreeShow(false)}
                aria-labelledby="Free modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Free modal">
                        Free modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>

            <div class="container">
                <div class="tab-content wow fadeIn">
                    <div role="tabpanel" class="tab-pane fade show active" id="yearly">
                        <div class="row justify-content-center">

                        <div class="col-md-6 col-lg-4 mb-4">
                                <div class="price-item text-center popular">
                                    <div class="price-top">
                                        <div class="pricing-badge">
                                            <div class="badge">Free version</div>
                                        </div>
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/free.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Personal</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p className='text-dark'>2 User Licenses</p>            
                                        </Card.Subtitle>
                                        <h2 class="mb-0"><sup>$</sup>0</h2>
                                        <span class="text-capitalize">per year</span>
                                    </div>
                                    <div class="price-content">
                                        <div class="border-bottom mb-4 mt-md-4 pb-3 text-left text-light" style={{listStyle:'none'}}>
                                            <h5>Features</h5>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>1:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-dark"><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="free-btn" variant='outline-light' onClick={() => setFreeShow(true)} style={{fontWeight:'bold', letterSpacing:1}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="price-item text-center">
                                    <div class="price-top">
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/academic.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Academic</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p>2 User Licenses</p>
                                                
                                        </Card.Subtitle>
                                        <h2 class="mb-0"><sup>$</sup>99</h2>
                                        <span class="text-capitalize">per year</span>
                                    </div>
                                    <div class="price-content">
                                        <div class="border-bottom mb-4 mt-md-4 pb-3 text-left" style={{listStyle:'none'}}>
                                        <h5>Features</h5>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>3:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Backup</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Support</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Free:</b> Storage</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-light" style={{backgroundColor:'#3C9FE1'}}><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="prem-btn" variant='outline-primary' onClick={() => setAcademicShow(true)} style={{fontWeight:'bold', letterSpacing:1, color:'#3C9FE1'}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="price-item text-center">
                                    <div class="price-top">
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/research.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Research</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p>2 User Licenses</p>
                                                
                                        </Card.Subtitle>
                                        {/*<div className="price-label text-light">Best version</div>*/}
                                        <h2 class="mb-0"><sup>$</sup>149</h2>
                                        <span class="text-capitalize">per year</span>
                                    </div>
                                    <div class="price-content">
                                        <div class="border-bottom mb-4 mt-md-4 pb-3 text-left" style={{listStyle:'none'}}>
                                            <h5>Features</h5>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>5:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-check mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Backup</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Support</p>
                                            </li>
                                            <li>
                                                <i class="zmdi zmdi-close mr-2"></i>
                                                <p class="mb-2"><BsFillCheckCircleFill color='green'/> <b>Free:</b> Storage</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-light" style={{backgroundColor:'#3C9FE1'}}><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="prem-btn" variant='outline-primary' onClick={() => setResearchShow(true)} style={{fontWeight:'bold', letterSpacing:1, color:'#3C9FE1'}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}