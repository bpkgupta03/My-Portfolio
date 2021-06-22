import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import profile from '../../assets/img/profile/profile.jpg'
import Button from 'react-bootstrap/Button'
import './about.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2" >
                                <Image className="profile" alt="profile" src={profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Bhanu Prakash Khandelwal</strong>
                                <br />
                                A computer science engineering student currently in final semester of my graduation from University College of Engineering and Technology , bikaner(Rajasthan) .
                                <br />
                                Along with my course i also learnt various programming languages that I've mentioned in my skill section that helps me to thrive and explore my knowledge on the latest technology .
                                <br />
                                Aloof from this, I also did various courses on Udmey named as "Complete Web Development Bootcamp" this course helped me to acquire all the skills needed to be a full stack web developer with the latest and trending technology Javascipt
                                with MERN (MongoDB,Express.js,Node.js,React.js) Stack that includes full stack developement from the frontend to backend with Database support and Deployement can be done using Firebase or Heroku
                                <br />
                                I am very zeal towards learning new technologies shaping the future thus I'm searching a place where i can thrive my existing knowledge .
                                <br /><br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Talk
                                            </Button>
                                        </a>
                                    </div>

                                    <div>
                                        <a href="#contact" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/bpkgupta03" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                Github
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/bhanu-prakash-khandelwal-420a2a16b/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                linkedin
                                            </Button>
                                        </a>
                                    </div>


                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    )
}

export default About
