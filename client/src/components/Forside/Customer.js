import { db } from "../../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row } from "react-bootstrap";


import '../../styles/Home.css';

// {new Date().toLocaleDateString("en-US")} 
// To get real time date

const Customer = () => {

    // State to store data todos
    const [customer, setCustomer] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "customer"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setCustomer(newData);              
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    
    return (

        <div className="customer-wrapper" style={{position:'relative'}}>
            <Row>
                {
                    customer?.map((customer,i)=>(
                        <Col sm={12} md={12} lg={4} xl={4} key={i}>
                            <div className="customer-body">
                                <div className="customer-img text-center">
                                    <Card.Img className="rounded-circle" src={customer.image} alt="Description" style={{width:200, height:170, position:'relative', bottom:80}}></Card.Img>
                                </div>
                                
                                <div className="customer-tekst px-4" style={{position:"relative", bottom:40}}>
                                    <h4 className="text-light">{customer.navn}</h4>
                                    <hr></hr>
                                    <h5>{customer.job}</h5>
                                    <p>{customer.lokation}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }

                {
                    customer?.map((customer,i)=>(
                        <Col sm={12} md={12} lg={8} xl={8} key={i}>
                            <div className="customer-body" style={{position:"relative"}}>
                            <div className="custom-info p-4" >
                                <Card.Title className="text-light pb-2">Kundens Historie</Card.Title>
                                <Card.Header className="bg-light px-4" style={{borderRadius:10}}>{customer.tekst}</Card.Header>
                            </div>
                            <div className="custom-dato mx-4">
                                <div className="mx-2">
                                    <p className="text-light">Dato: {new Date(customer.dato.seconds * 1000).toLocaleDateString("dk-EU")}
                                    </p>
                                </div>
                            </div>
                            </div>

                        </Col>
                    ))
                }
            </Row>
        </div>

    );

}

export default Customer;