
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import '../styles/Projects.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsInfoSquareFill } from "react-icons/bs";
import Table from 'react-bootstrap/Table';



function Projects() {

    const now = 100;

    return (
        <div className="projecta">    
            <Container>
                
                <div className="projecta-section-title">
                    <Row>
                        <Col>
                            <h1>Digitial Reality</h1>
                        </Col>
                    </Row>
                </div>

                <div className="projecta-section-intro px-4">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Image fluid className='projecta-img' alt="vision" src={require('../img/galleri6.jpg')} style={{heightMax:470, height:470}} />
                        </Col>

                        <Col s={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>Status:</h5>
                                <ProgressBar variant="success" now={now} label={`${now}%`} style={{width:300, marginBottom:15}} />
                            <p>Afsluttet</p>
                            <h5>Tema</h5>
                            <div className="projecta-intro-tema" style={{display: "flex", justifyContent: "start", alignItems: "center"}}>
                                <Image alt="vision" src={require('../img/ar-glasses.png')} style={{height:60, marginTop:8, marginBottom:8, marginLeft:8}}/>
                                <p>VR Teknologier</p>
                            </div>
                            <hr></hr>
                            <div className="projecta-intro-slut">
                                <BsInfoSquareFill size={30}></BsInfoSquareFill>
                                <p>Projektet havde til hensigt at øge kendskabet til XR-teknologier og indfri teknologiernes potentiale.<br/>
                                Der rettede sig mod effektivisering og forbedring af produktionen samt muliggøre nye typer services til kunder.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            
                <div className="projecta-metode-effekt-section">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="projecta-metode p-4 mb-4">
                                <h3>METODE</h3>
                                <hr></hr>
                                <h5>Projektet bestod af tre hovedaktiviteter:</h5>
                                <p><span>Fase 1.</span> Konsolidering af viden og erfaring. Projektet indsamlede af viden og erfaringer fra danske og internationale industrivirksomheder<br/>
                                Anvendelsesmuligheder af VR/AR/MR-teknologien samt en rekruttering af pilotvirksomheder, onboarde ledelse og skabelse af strategisk alignment omkring mål, succeskriterier og proces.</p>
                                <p><span>Fase 2.</span> XR-udviklingsforløbMed udgangspunkt i erfaringer fra fase 1 blev tre virksomheder med et stort effektpotentiale udvalgt til implementering og test af VR/AR/MR-teknologier og software.</p>
                                <p><span>Fase 3.</span> Netværk skabelse På baggrund af den indsamlede viden og erfaringer blev en digital platform (www.Digital-Reality.dk) udviklet.<br/>
                                Hvor viden og værktøjer blev gjort nemt tilgængelige for interesserede virksomheder. <br/>
                                Derudover blev der oprettet workshops og events til inspiration og formidling af den nye viden.</p>
                                
                                <div class='air air1'></div>
                                <div class='air air2'></div>
                                <div class='air air3'></div>
                                <div class='air air4'></div>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className="projecta-effekt p-4 mb-4">
                                <h3>EFFEKT</h3>
                                <hr></hr>
                                <h5>Projektet bestod af tre hovedaktiviteter:</h5>
                                <p><span>Fase 1.</span> Konsolidering af viden og erfaring. Projektet indsamlede af viden og erfaringer fra danske og internationale industrivirksomheder<br/>
                                Anvendelsesmuligheder af VR/AR/MR-teknologien samt en rekruttering af pilotvirksomheder, onboarde ledelse og skabelse af strategisk alignment omkring mål, succeskriterier og proces.</p>
                                <p><span>Fase 2.</span> XR-udviklingsforløbMed udgangspunkt i erfaringer fra fase 1 blev tre virksomheder med et stort effektpotentiale udvalgt til implementering og test af VR/AR/MR-teknologier og software.</p>
                                <p><span>Fase 3.</span> Netværk skabelse På baggrund af den indsamlede viden og erfaringer blev en digital platform (www.Digital-Reality.dk) udviklet.<br/>
                                Hvor viden og værktøjer blev gjort nemt tilgængelige for interesserede virksomheder. <br/>
                                Derudover blev der oprettet workshops og events til inspiration og formidling af den nye viden.</p>

                                <div class='air air1'></div>
                                <div class='air air2'></div>
                                <div class='air air3'></div>
                                <div class='air air4'></div>
                            </div>
                        </Col>
                    </Row>
                </div>
        
                <div className="projecta-data-section mb-4">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="projecta-data-title">
                                <h3>PROJEKT DATA</h3>
                                <div className="px-4">
                                    <div class="profile">
                                        <Image roundedCircle className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" style={{height:150, maxHeight:150}}/>
                                    </div>
                                    <div className="profile-avatar-info mt-4">
                                        <h4 className="">PROJEKT LEDER</h4>
                                    </div>
                                    <div className="about-candidate border-top border-bottom">
                                        <div className="candidate-info py-2">
                                            <h5 className="text-dark">Name:</h5>
                                            <h6 className="text-white">Jannick Pedersen</h6>
                                        </div>
                                        <div className="candidate-info py-2">
                                            <h5 className="text-dark">Email:</h5>
                                            <h6 className="text-white">test04@gmail.com</h6>
                                        </div>
                                        <div className="candidate-info py-2">
                                            <h5 className="text-dark">Phone:</h5>
                                            <h6 className="text-white">(123) 345-6789</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-projecta my-3 mx-4">
                                <div class="card-body-projecta">
                                    <div class="d-flex flex-column flex-lg-row">
                                        <span class="avatar avatar-text rounded-3 me-4 mb-2">JP</span>
                                        <div class="row flex-fill">
                                            <div xs={12} sm={12} md={7} lg={7} xl={7} class="">
                                                <h4 class="h5">Andet projekt: Green Enrgee</h4>
                                                <h5><span style={{fontWeight:'bold', color:'#3C9FE1'}}>Hos:</span> NanoScale</h5>
                                                <span class="badge bg-success">WORLDWIDE</span> <span class="badge bg-success">TECHNOLOGY</span>
                                            </div>
                                            <div xs={12} sm={12} md={5} lg={5} xl={5} class="py-2">
                                                <span class="badge bg-secondary">VR</span>
                                                <span class="badge bg-secondary mx-2">AR</span>
                                                <span class="badge bg-secondary">Molecules</span>
                                                <span class="badge bg-secondary mx-2">Learning</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <div className="projecta-om-projektet">
                                <h4 className="mx-4">PROJEKTET</h4>
                                <div className="projecta-table p-4">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                            <th>Projekt Navn:</th>
                                            <th>Projekt ejer:</th>
                                            <th>Website:</th>
                                            <th>Periode:</th>
                                            <th>Støttet med:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Digital-Reality.dk</td>
                                                <td>Danmarks Tekniske Universitet</td>
                                                <td>digital-reality.dk</td>
                                                <td>2019-2021</td>
                                                <td>4,3 mio. kr.</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <hr></hr>
                                <div className="projecta-partner mx-4 my-2">
                                    <h5>PROJEKTPARTNERE</h5>
                                    <p>
                                    Projektet udføres i et samarbejde mellem Danmarks Tekniske Universitet, Virsabi og Kring Innovation.<br/> 
                                    Besøg dem herunder.
                                    </p>
                                    <div className="projecta-partner-list mx-2 p-2">
                                        <li>Virsabi</li>
                                        <li>Phillips</li>
                                        <li>Dharma</li>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="projecta-rapport mx-4 my-2">
                                    <h5>AFSLUTTENDE RAPPORT</h5>
                                    <p>
                                    Projektet er afsluttet, og erfaringer og resultater er samlet i en afsluttende rapport.<br/> 
                                    Rapporten kan læses nedenfor.
                                    </p>
                                    <div className="projecta-rapport-link mx-2 p-2 my-4">
                                        <li>Læs om den afsluttende rapport her: </li>
                                        <Button href="google.com" className="projecta-rapport-btn mx-4 mt-3" variant="primary" size="sm">Rapport Link</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>





        
              

                
        
            </Container>    
        </div>
    );
}


export default Projects;