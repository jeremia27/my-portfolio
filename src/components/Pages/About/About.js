import React from 'react'
import './About.css'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <Row id="about" className='justify-content-md-center'>
            <Col lg='8'>
                <h1 className='title-about'>About Me</h1>
                <p className='content-about'>
                    Hello! My name is Jeremia Sibarani. I am proud to be a graduate of Del Institute of Technology with a background in the D3 Computer Technology department. Currently, I am passionately embarking on a journey in the world of web development, particularly in the frontend area.
                </p>
                <Row className='justify-content-md-center'>
                    <Col lg='4'>
                        <Card border="secondary" style={{ height: 120 }}>
                            <Card.Body >
                                <Card.Title>Experience</Card.Title>
                                <Card.Text> 1 Years 10 Month - Fullstack Developer
                                    1 Years - Frontend Developer React.js
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4'>
                        <Card border="secondary" style={{ height: 120 }}>
                            <Card.Body >
                                <Card.Title>Education</Card.Title>
                                <Card.Text> Diploma 3 - Computer Technology</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
