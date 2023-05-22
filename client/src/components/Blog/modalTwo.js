import { Avatar, Box, CardHeader, Chip, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Col, Image, Row } from 'react-bootstrap';

function ModalTwo() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <>
            <IconButton aria-label="modal">
                <FullscreenIcon  onClick={handleShow} color="primary" sx={{fontSize:30}} />
            </IconButton>

            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fuld Visning Af Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
        
                    <Row>
                        <Col xs={6} md={4} lg={4}>
                        <Image rounded className='hero-blog-img' alt="vision" src={require('../../img/galleri6.jpg')} style={{}} />
                            <CardHeader
                                avatar={
                                    <Avatar  aria-label="recipe">
                                        JP  
                                    </Avatar>
                                }
                                title={
                                    <Typography sx={{ fontSize: 14, color:'#3C9FE1' }}>
                                        Jens Bäckvall, PM @ Hololink<br/> NOVEMBER 15, 2022
                                    </Typography>
                                        
                                }
                            />    
                        </Col>
                        <Col xs={12} md={8} lg={8}>
                            <h2>VR Med Kemi Og MoleKyler</h2>
                            <h5>This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</h5>
                            <hr></hr>
                            <p>Method:</p>
                            <p> Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.</p>
                            <p>Set aside off of the heat to let rest for 10 minutes, and then serve.</p>
                            <Box sx={{pt:1}}>
                                <Stack  direction="row" spacing={2}>
                                    <Chip label="VR" />
                                    <Chip color="primary" label="Kemi" />
                                    <Chip label="AR" />
                                    <Chip color="primary" label="Tech" />
                                </Stack>
                            </Box>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalTwo;
