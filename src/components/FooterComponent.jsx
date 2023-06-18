import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Icon from "../assets/img/heart.png"
import Github from "../assets/img/github.png"
import Linkedin from "../assets/img/linkedin.png"
import Medium from "../assets/img/Medium.png"

const FooterComponent = () => {
    return (
        <Row className='footer'>
        <Col>
        Made With <img src={Icon} alt="Love" /> <br /> <span className='by-person'>
        By Dhiya Risalah Ghaida
            </span>
        </Col>
        <Col className='website text-end'>
            <a href='https://www.linkedin.com/in/dhiyarisalah/' target= "_blank">
                <img src={Linkedin} alt="LinkedIn" /> 
            </a> 
            <span>
            <a href='https://github.com/dhiyarisalah' target= "_blank">
                <img src={Github} alt="GitHub" />
            </a>
            </span>
            <span>
            <a href='https://medium.com/@dhiyarisalah' target= "_blank">
                <img src={Medium} alt="Medium" />
            </a>
            </span>
        </Col>
        </Row>

    )
}

export default FooterComponent