import { Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react'
import Foto from "../assets/img/Foto.png"

const HomePage = () => {
    return (
        <div className= "homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className= "header-box d-flex align-items-center">
                        <Col style={{marginLeft: "110px"}}>
                            <h1 className='mb-4'>Hello, I’m <br /> <span> Dhiya Risalah Ghaida</span> </h1>
                            <p className='mb-4'>an Undergraduate Information and System Technology Student <br />at Bandung Institute of Technology </p>
                            <Button>My Resume</Button>
                        </Col>
                        <Col style={{paddingLeft: "120px"}}>
                            <img src={Foto} />
                        </Col>
                    </Row>
                </Container>
            </header>

            <div className = "w-100 min-vh-100"> </div>
        </div>
    );
};

export default HomePage