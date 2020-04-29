import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Card className='latest-blog'>
                    <Card.Title>Latest Blog</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">By Pheebs</Card.Subtitle>
                </Card>
                <Card className='about-me'>
                    <Card.Title>About</Card.Title>
                </Card>
                <Card className='all-blogs'>
                    <Card.Title>Check All Blogs</Card.Title>
                </Card>
            </Container>
        );
    }
}