import { Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react'
import Foto from "../assets/img/foto.png"
import PM from "../assets/img/pm.png"
import SoftEng from "../assets/img/softeng.png"
import Business from "../assets/img/business.png"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { projectNonProgramming } from '../assets/data';

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
            <div className = "w-100 min-vh-100"> 
                <Container className= "expertise align-items-center">
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
                <Container className= "expertise align-items-center">
                <h1 className='text-center fw-bold'>Skills & Technology</h1>
                </Container>
            </div>
            <div className = "w-100 min-vh-100"> 
                <Container className= "expertise align-items-center">
                <h1 className='text-center fw-bold'>Projects</h1>         
                    <Row>
                    <h2 className='text-center'>NonProgramming</h2>      
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
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
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
                    <Row>
                    <h2 className='text-center'>Programming</h2>      
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
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
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
                </Container>
            </div>           
        </div>
    );
};

export default HomePage
