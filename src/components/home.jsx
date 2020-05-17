import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Card className='latest-blog'>
                    <Card.Body>
                        <Card.Title>Latest Blog</Card.Title>
                        <h2 className='blog-title'>This is the blogs title</h2>
                        <Card.Subtitle className="mb-2 text-muted">By Pheebs</Card.Subtitle>
                        <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button size='md'>Read More</Button>
                    </Card.Body>
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