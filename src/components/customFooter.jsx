import React, { Component } from 'react';
import './customFooter.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <Navbar className='footer'>
                <Nav.Link to='/' className='contact'>Contact</Nav.Link>
                <div className='icons'>
                    <Nav.Link 
                        href='https://instagram.com/phoebekarin?igshid=15kx0e67w97w' 
                        target='_blank'>
                            <FontAwesomeIcon className='insta' icon={faInstagram} size='lg'></FontAwesomeIcon>
                    </Nav.Link>
                    <Nav.Link 
                        href='https://twitter.com/Phoebekarin' 
                        target='_blank'>
                            <FontAwesomeIcon className='twitter' icon={faTwitter} size='lg'></FontAwesomeIcon>
                    </Nav.Link>
                </div>
            </Navbar>
        )
    }
}