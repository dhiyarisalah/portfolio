import {useState, useEffect} from "react"
import { Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react'
import Foto from "../assets/img/foto.png"
import PM from "../assets/img/pm.png"
import SoftEng from "../assets/img/softeng.png"
import Business from "../assets/img/business.png"

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
            <div className = "expertise w-100 min-vh-100"> 
            <Container className= "align-items-center">
            <h1 className='text-center fw-bold'>Areas of Expertise</h1>
                <Row className="expertise-list text-center">
                    <Col>
                    <img src={SoftEng} />
                    <h3> Software Engineering</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus illum aspernatur ducimus ut sunt a saepe explicabo totam molestias!</p>
                    </Col>
                    <Col>
                    <img src={PM} />
                    <h3> Product Management</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus iusto unde quam minima perspiciatis voluptatibus fugiat velit voluptatum nobis quaerat.</p>
                    </Col>
                    <Col>
                    <img src={Business} />
                    <h3> Business Analyst</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde accusamus suscipit beatae enim autem quasi ducimus. Ipsam, quas autem.</p>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default HomePage