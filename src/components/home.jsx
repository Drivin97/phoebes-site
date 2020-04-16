import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
//import Button from 'react-bootstrap/Button'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h2>Time for Transparency</h2>
                    <p>Random text to make sure everything is working</p>
                </Jumbotron>

                <Row>
                    <Col xs={12} sm={8}>
                        <h1>Latest Blog</h1>
                        <p className='blog-text text-justify'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </Col>
                    <Col xs={12} sm={{span: 3, offset: 1}}>
                        <Image src='assets/queen.jpg' className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        );
    }
}