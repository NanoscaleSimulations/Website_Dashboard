import React from "react";

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillBellFill } from "react-icons/bs";



export default function Subscriber() {

    
    return (

        <Container>
            <div className="subscriber-body">
                    <div className="subscriber-title text-center mb-4">
                        <h4>Tilmelding Af Vores Nyhedsbreve Og Opdateringer!</h4>
                    </div>
                    <div className="subscriber-form">
                        <InputGroup className="mb-3" id="sub-input">
                            <Form.Control
                            style={{borderTopLeftRadius:30, borderBottomLeftRadius:30}}
                            placeholder="Din mail her"
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                    
                            className="text-dark"
                            />
                            <Button style={{backgroundColor:'orange', borderTopRightRadius:30, borderBottomRightRadius:30}} id="button-addon1" variant="outline-dark">
                                <BsFillBellFill size={20} style={{marginBottom:4, marginRight:5}} /> 
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>
                </div>
        </Container>

    )
}