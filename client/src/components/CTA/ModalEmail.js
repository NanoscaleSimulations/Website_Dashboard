import React, { useState } from 'react';

import { BsFillChatDotsFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';

import Email from './Email';



export default function ModalEmail() {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  

  
  window.addEventListener('scroll', toggleVisible);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal-body text-center'>
      
      <BsFillChatDotsFill 
        size={50} 
        onClick={handleShow} 
        style={{display: visible ? 'inline' : 'none', position: 'fixed', left:'95%', bottom:100, width:50, height:50, zIndex:99, cursor: 'pointer', color:'orange'}}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Email/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

