import { db } from "../../db/firebaseConfig";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { Card, Col, Row } from "react-bootstrap";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


import '../../styles/Home.css';


const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};


const ValueCard = ({ num }) => {

     // State to store data todos
    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "værdisæt"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
            }
        )
    }
    useEffect(()=>{
        fetchPost();
    }, [])



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

    

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);




    return (
        <Row xs={1} md={1} lg={3} xl={3} className="g-4 px-4">
            {
                todos?.map((todo,i)=>(
                    <div key={i}>
                        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
                            <Card className="shadow-lg" style={{borderRadius:25, width:400}}> {num}
                            <motion.div
                            className="box"
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={control} 
                            >
                                <div className="card-img">
                                    <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ duration: 3 }} 
                                    >
                                        <Card.Img style={{borderTopRightRadius:25, borderTopLeftRadius:25}}  variant="top" src={todo.image} alt="Description"/>
                                    </motion.div>
                                </div>
                                <Card.Body>
                                    <div className="valuetitletekst px-2 pb-4">
                                        <Card.Title className="text-center"><h4>{todo.titel}</h4></Card.Title>
                                        <hr></hr>
                                        <Card.Text style={{zIndex:9}}><ReadMore >{todo.tekst}</ReadMore></Card.Text>
                                    </div>
                                </Card.Body>
                                </motion.div>
                            </Card>
                                
                        </Col>
                    </div>
                ))
            }
        </Row>
    );

}

export default ValueCard;
