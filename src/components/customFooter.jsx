import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <Navbar className='footer'>
                <FontAwesomeIcon className='insta' icon={ faInstagram } size='lg'></FontAwesomeIcon>
                <FontAwesomeIcon className='twitter' icon={ faTwitter } size='lg'></FontAwesomeIcon>
            </Navbar>
        )
    }
}