import { Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react'
import Foto from "../assets/img/foto.png"
import PM from "../assets/img/pm.png"
import SoftEng from "../assets/img/softeng.png"
import Business from "../assets/img/business.png"
import CV from "../assets/data/cv.pdf"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { projectNonProgramming, projectProgramming, skills, competition, courses} from '../assets/data';
import FooterComponent from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

const HomePage = () => {
    return (
        <div className= "homepage">
            <NavbarComponent />
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className= "header-box d-flex align-items-center">
                        <Col style={{marginLeft: "110px"}}>
                            <h1 className='mb-4'>Hello, I’m <br /> <span> Dhiya Risalah Ghaida</span> </h1>
                            <p className='mb-4'>an Undergraduate Information and System Technology Student <br />at Bandung Institute of Technology </p>
                            <Button onClick={() => window.open(CV, '_blank')} download> <i className="fas fa-download"></i> My Resume</Button>
                        </Col>
                        <Col style={{paddingLeft: "120px"}}>
                            <img src={Foto} />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className = "w-100 min-vh-100"> 
                <Container className= "expertise">
                <h1 className='text-center fw-bold'>Areas of Expertise</h1>
                    <Row className="expertise-list text-center">
                        <Col className='expertise-item'>
                        <img src={SoftEng} />
                        <h3> Software Engineering</h3>
                        <p>Software Development, Agile Methodologies, Software Testing, Technical Documentation, Continuous Integration and Deployment, Problem Solving and Troubleshooting</p>
                        </Col>
                        <Col className='expertise-item'>
                        <img src={PM} />
                        <h3> Product Management</h3>
                        <p>Product Research, Defining & Creating MVP, Product Metrics, Designing Usability Testing, Creating PRD, Product Roadmap, Product Prioritization, Agile Development, UI/UX Design, Competitive Analysis, System Requirement Analysis</p>
                        </Col>
                        <Col className='expertise-item'>
                        <img src={Business} />
                        <h3> Business Analyst</h3>
                        <p>Requirements Gathering and Analysis, Stakeholder Management, Business Process Modeling, Data Analysis, Documentation and Reporting, Gap Analysis, Risk Analysis, Business Case Development</p>
                        </Col>
                    </Row>
                </Container>
                <Container className='skill text-center'>
                <h1 className='title text-center fw-bold'>Skills & Technology</h1>
                <div className='skills'>
                        {skills.map((data2)=> {
                            return(<Col key= {data2.id} xs = {2} className='item mb-3'>
                                <div>
                                    <Row className='align-items-center content'>
                                        <Col className='text-center'>
                                            <h5 className='name'>{data2.name}</h5>
                                        </Col>
                                        <Col className='text-center'>
                                            <img src={data2.img} alt="" />
                                        </Col>
                                    </Row>
                                
                                </div>
                            </Col>)
                        })}
                </div>
                </Container>
            </div>
            <div className = "w-100 min-vh-100"> 
                <Container className= "projects align-items-center">
                <h1 className='project text-center fw-bold'>Projects</h1>         
                    <Row className='swiper-project'>
                    <h2 className='subproject text-center'>NonProgramming</h2>      
                    <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {projectNonProgramming.map((data1) => {
                                return (
                                <SwiperSlide key= {data1.id}>
                                <div>
                                    <img src={data1.image} />
                                    <div>
                                        <h5>{data1.name}</h5>
                                        <p5>{data1.desc}</p5>
                                    </div>
                                </div>
                                </SwiperSlide>
                                )
                            })}
                        </Swiper>      
                    </Row>
                    <Row className='swiper-project'>
                    <h2 className=' subproject text-center'>Programming</h2>    
                    <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            >
                            {projectProgramming.map((data2) => {
                                return (
                                <SwiperSlide key= {data2.id}>
                                <div>
                                    <img src={data2.image} />
                                    <div>
                                        <h5>{data2.name}</h5>
                                        <p5>{data2.desc}</p5>
                                    </div>
                                </div>
                                </SwiperSlide>
                                )
                            })}
                        </Swiper>      
                    </Row>
                </Container>
            </div>  
            <div className = "w-100 min-vh-100"> 
            <Container className= "certificates align-items-center">
                <h1 className='certif text-center fw-bold'>Certifications & Honors</h1> 
                <div className='certif-box'>
                    <div className='compe'>
                        {competition.map ((data3) => {
                            return <Col key={data3.id} xs= {3} className='compe-item'>
                                <img src={data3.img} alt={data3.name} />
                            </Col>
                        })}
                    </div>
                    <Row>

                    </Row>
                </div>

            </Container>
            </div>        
            <div>
                <FooterComponent />
            </div> 
        </div>
    );
};

export default HomePage
