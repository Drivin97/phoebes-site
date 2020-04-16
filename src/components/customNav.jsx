import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import './customNav.css'

export default class customNav extends Component {
    render() {
        return(
            <Navbar collapseOnSelect>
                <Navbar.Brand>
                    <Link to='/'>What Time is it?</Link>
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={1} componentClass={Link} to='/'>Home</Nav.Link>
                        <Nav.Link eventKey={2} componentClass={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link eventKey={3} componentClass={Link} to='/about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}