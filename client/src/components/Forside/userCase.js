
import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import '../../styles/Home.css';


const UserCase = () => {

    // State to store data to the 2x different usercase collections

    const [usercase, setUsercase] = useState([]);

    
    return (
        <div className="usercase my-4">
            <Container className="py-2">
                <div className="usercase-wrapper1 mb-4">
                    <Card className="shadow-lg" style={{borderRadius:20}}>
                        <Row >
                            <Col xs={{span: 12, order: 2}} md={{span: 12, order: 2}} lg={{span: 4, order: 1, offset: 0}}>
                                <div className="usercase-info p-4">
                                    <h4>At skabe molekyler</h4>
                                    <hr></hr>
                                    <h5>Beskrivelse:</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </Col>
                            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1, offset:3}} lg={{span: 8, order: 2, offset: 0}}>
                                <Image className="p-4" src={require('../../img/bg_container1.png')} alt="llalal" style={{maxHeight:500}}></Image>
                            </Col>
                        </Row>
                    </Card>  
                </div>
            </Container>
        </div>
        
    );

}

export default UserCase;
