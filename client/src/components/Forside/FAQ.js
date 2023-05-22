

import React, { useState, useEffect } from 'react';
import { Accordion} from "react-bootstrap";

import '../../styles/Home.css';

const FAQ = () => {

    
    // State to store data todos
    const [faq, setFaq] = useState([]);

    
    return (

        <div className="faq-wrapper">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        
                    </Accordion.Header>
                    <Accordion.Body>
                                
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
                
    );

}

export default FAQ;