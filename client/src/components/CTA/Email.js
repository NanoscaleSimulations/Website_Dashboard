
import React, { useState } from 'react';
import Axios from 'axios';
import { Card, Container, Image, ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Email.css";



export default function Email() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:5000/email', {
            fullName: name,
            email: email,
            text: text,
        })
    }

    return (
        <div className="outer-container">
            {['sm'].map((breakpoint) => (
                <ListGroup variant='flush' key={breakpoint} horizontal={breakpoint} className="mb-2">
                <ListGroup.Item><i class="fa-sharp fa-solid fa-envelope"></i>Nanoscale@live.com</ListGroup.Item>
                <ListGroup.Item><i class="fa-sharp fa-solid fa-phone"></i>(+45)55663322</ListGroup.Item>
                <ListGroup.Item><i class="fa-solid fa-address-book"></i><span style={{display:'block', borderStyle:'none'}}>Copenhagen, DK</span></ListGroup.Item>
                </ListGroup>
            ))}
            <Image className="img-fluid mb-2" alt="Article" src={require('../../img/3d-render-low-poly-plexus-design-network-communications.jpg')} style={{height:200, width: '100%'}}/>
            <Container>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="contactform my-4">
                        <Form.Control className = "fullname" type="text" placeholder="Fornavn og efternavn" onChange={(e) => {setName(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="contactform my-4">
                        <Form.Control className = "email" type="email" placeholder="Barack@Obama.com" onChange={(e) => {setEmail(e.target.value)}}/>
                        <Form.Text className="text-muted">
                            <p>We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="contactform my-2">
                        <Form.Control type="text" placeholder="kommentar..." onChange={(e) => {setText(e.target.value)}}/>
                    </Form.Group>
                </Form>
                <Card.Footer style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:250, width:250, borderRadius:30, padding:10, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}>Submit</Button>
                </Card.Footer>
            </Container>

        </div>
    )

}


