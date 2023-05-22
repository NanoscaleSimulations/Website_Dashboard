import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col, Image, Container, Card } from 'react-bootstrap';



export default function VerticalTabs() {

  return (
    <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-2" justify>

      <Tab eventKey="home" title="Feature-packed platform for molecular design">
        <Container className='p-4' xs={12} sm={12} md={10} lg={10} xl={10} style={{display:'flex', justifyContent:'center', justifyItems:'center', maxWidth:'1200px'}}>
          <Card className='p-4'>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Image src={require('../../img/galleri3.jpg')}></Image>
                <p>Conference showcase at Black Rock</p>
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <h3 style={{color:'#3C9FE1'}}>Feature-packed platform for molecular design</h3>
                <hr></hr>
                <h5 style={{textDecoration:'underline 2px #3C9FE1'}}>Beskrivelse:</h5>
                <p>
                  Use physics-based construction to create molecules and assemblies.
                  Model nanosystems through their structures, dynamics, interactions, visuals, and properties.<br/><br/>
                  Enable expert-in-the-loop design with interactive simulations.
                  Export to large-scale simulators, and import trajectories to compute properties.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </Tab>
      
      <Tab eventKey="profile" title="A unique platform for science communication">
        <Container className='p-4' xs={12} sm={12} md={10} lg={10} xl={10} style={{display:'flex', justifyContent:'center', justifyItems:'center', maxWidth:'1200px'}}>
          <Card className='p-4'>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Image src={require('../../img/galleri3.jpg')}></Image>
                <p>Conference showcase at Black Rock</p>
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <h3 style={{color:'#3C9FE1'}}>A unique platform for science communication</h3>
                <hr></hr>
                <h5 style={{textDecoration:'underline 2px #3C9FE1'}}>Beskrivelse:</h5>
                <p>
                  Use physics-based construction to create molecules and assemblies.
                  Model nanosystems through their structures, dynamics, interactions, visuals, and properties.<br/><br/>
                  Enable expert-in-the-loop design with interactive simulations.
                  Export to large-scale simulators, and import trajectories to compute properties.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </Tab>

      <Tab eventKey="longer-tab" title="VR And Molecyles With AR Technology">
        <Container className='p-4' xs={12} sm={12} md={10} lg={10} xl={10} style={{display:'flex', justifyContent:'center', justifyItems:'center', maxWidth:'1200px'}}>
          <Card className='p-4'>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Image src={require('../../img/galleri3.jpg')}></Image>
                <p>Conference showcase at Black Rock</p>
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <h3 style={{color:'#3C9FE1'}}>VR And Molecyles With AR Technology</h3>
                <hr></hr>
                <h5 style={{textDecoration:'underline 2px #3C9FE1'}}>Beskrivelse:</h5>
                <p>
                  Use physics-based construction to create molecules and assemblies.
                  Model nanosystems through their structures, dynamics, interactions, visuals, and properties.<br/><br/>
                  Enable expert-in-the-loop design with interactive simulations.
                  Export to large-scale simulators, and import trajectories to compute properties.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </Tab>

    </Tabs>
  );
  
};