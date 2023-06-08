
import React from 'react';
import '../styles/Blog.css';

// import { db } from "../db/firebaseConfig";
// import { collection, getDocs, where, query, limit } from "firebase/firestore";

import { Col, Container, Image, Row } from "react-bootstrap";

import RecipeReviewCard from '../components/Blog/blogOne';
import RecipeReviewCardTwo from '../components/Blog/blogTwo';
import RecipeReviewCardThree from '../components/Blog/blogThree';
import BlogMain from '../components/Blog/blogMain';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const boxVariant2 = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 }
};


// const q = query(colRef, where('label', '==', 1,), limit(3))


function BlogPage() {


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
        <div className="blog">
            <Container>
                <div className="hero-section-blog py-4">
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Col xs={12} md={8} lg={10} xl={10}>
                            <div className="media blog-media">
                                <a href="blog-post-left-sidebar.html"><Image className="d-flex" src={require('../img/galleri6.jpg')} alt="" style={{ height: 400, maxHeight: 400 }} /></a>
                                <div className="circle">
                                    <h5 className="day">JP</h5>
                                </div>
                                <div className="media-body pb-4">
                                    <BlogMain />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>



                <Row>
                    <Col>
                        <div className='blog-mellemtitel-section pt-4'>
                            <h2>Følg Med I Vores Nyeste Blogs!</h2>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>


                <div className="blog-section-one" style={{ paddingTop: 20, paddingBottom: 70 }}>
                    <Row xs={1} md={2} lg={3} xl={3} className="g-4 px-4">
                        <Col>
                            <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant2}
                                initial="hidden"
                                animate={control}
                            >
                                <div className='blog-section-two-cardthree'>
                                    <RecipeReviewCard />
                                </div>
                            </motion.div>
                        </Col>
                        <Col>
                            <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant2}
                                initial="hidden"
                                animate={control}
                            >
                                <div className='blog-section-two-cardfour'>
                                    <RecipeReviewCardTwo />
                                </div>
                            </motion.div>
                        </Col>
                        <Col>
                            <motion.div
                                className="box"
                                ref={ref}
                                variants={boxVariant2}
                                initial="hidden"
                                animate={control}
                            >
                                <div className='blog-section-two-cardfive mb-4'>
                                    <RecipeReviewCardThree />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>


            </Container>
        </div>
    );
}


export default BlogPage;