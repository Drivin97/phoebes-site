import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
//import Button from 'react-bootstrap/Button'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <Card className='blogs'>
                            <Card.Title>Check out my latest blog!</Card.Title>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className='about'>
                            <Card.Title className='blog-title'>About Me</Card.Title>
                            <Card.Img variant='top' src='assets/queen.jpg'/>
                        </Card>
                    </Col>
                </Row>

                <Card className='all-blogs'>
                    <Card.Title>All Blogs</Card.Title>
                </Card>
            </Container>
        );
    }
}