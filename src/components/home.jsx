import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to Pheebs Blog!</h2>
                    <p>Random text to make sure everything is working</p>
                </Jumbotron>
                <Link to='\about'>
                    <Button bsStyle='primary'>About</Button>
                </Link>
            </Container>
        );
    }
}